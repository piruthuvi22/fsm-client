import "./chat.css";
import React, { useState, useEffect } from "react";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import { MdSend } from "react-icons/md";
import { useLocation } from "react-router-dom";

let stompClient = null;
const Chat = ({}) => {
  let location = useLocation();
  const [userData, setUserData] = useState({
    username: location ? location.state.sender : "",
    receiverName: location ? location.state.receiver : "",
    connected: false,
    message: "",
  });

  const [privateChats, setPrivateChats] = useState(new Map());
  const [tab, setTab] = useState("");

  // const handleUsername = (e) => {
  //   let { name, value } = e.target;
  //   setUserData((prev) => ({ ...prev, [name]: value }));
  // };

  useEffect(() => {
    handleConnect();
  }, []);

  const handleConnect = () => {
    let stomp = new SockJS("http://localhost:8081/socket");
    stompClient = over(stomp);
    stompClient.connect({}, onConnected, onError);
  };

  const onConnected = () => {
    console.info("onConnected");
    setUserData((prev) => ({ ...prev, connected: true }));

    privateChats.set(userData.receiverName, []);
    setPrivateChats(new Map(privateChats));

    stompClient.subscribe(
      "/user/" + userData.username + "/private",
      onPrivateMessageReceived
    );
  };

  const onError = (err) => {
    console.log(err);
  };

  const onPrivateMessageReceived = (payload) => {
    let payloadBody = JSON.parse(payload.body);
    privateChats.get(payloadBody.senderName).push(payloadBody);
    setPrivateChats(new Map(privateChats));
  };

  const handleMessage = (e) => {
    setUserData((prev) => ({ ...prev, message: e.target.value }));
  };

  const sendPrivateMessage = (e) => {
    if (stompClient) {
      let chatMsg = {
        senderName: userData.username,
        receiverName: userData.receiverName,
        message: userData.message,
      };

      privateChats.get(userData.receiverName).push(chatMsg);
      setPrivateChats(new Map(privateChats));

      stompClient.send("/app/private-message", {}, JSON.stringify(chatMsg));
      setUserData((prev) => ({ ...prev, message: "" }));
    }
  };

  return (
    <div className="chat-wrapper">
      <div className="container-xxl h-100">
        <div className="chat-app h-100 my-3">
          <div className="people-list h-100">
            <ul className="list-group list-group-flush list-unstyled chat-list overflow-auto">
              <li>Current user:{userData.username}</li>
              {[...privateChats.keys()].length > 0 &&
                [...privateChats.keys()].map((username, index) => {
                  return (
                    <li
                      key={index}
                      className="list-group-item list-group-item-action d-flex justify-content-between align-items-start clearfix px-1 my-1"
                      onClick={() => setTab(username)}
                    >
                      <img
                        src="https://www.shareicon.net/data/512x512/2016/09/15/829466_man_512x512.png"
                        alt="avatar"
                        className="img-fluid rounded-circle"
                      />
                      <div className="ms-2 w-100">
                        <div className="mx-auto">
                          <div className="d-flex justify-content-between align-items-center">
                            <span>{username}</span>
                          </div>
                        </div>
                        <p className="small text-muted m-0">
                          Lorem ipsum dolor sit amet
                        </p>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>

          <div className="chat">
            {tab !== "CHATROOM" && (
              <div className="chat2">
                <div className="chat-header clearfix px-3 py-2">
                  <div className="d-flex align-align-items-center">
                    <img
                      src="https://www.shareicon.net/data/512x512/2016/09/15/829466_man_512x512.png"
                      alt="avatar"
                      className="img-fluid rounded-circle user-dp"
                    />
                    <div className="ms-2 w-100">
                      <div className="mx-auto">
                        <div className="d-flex justify-content-between align-items-center">
                          <span>{tab}</span>
                        </div>
                      </div>
                      <p className="small text-muted m-0">Online</p>
                    </div>
                  </div>
                </div>

                <div className="chat-history overflow-auto">
                  <ul className="px-3 m-0">
                    {[...privateChats.keys()].length > 0 ? (
                      privateChats
                        .get(userData.receiverName)
                        .map((chat, index) => {
                          console.log(chat);
                          return (
                            <li className="clearfix mb-2" key={index}>
                              {chat.senderName !== userData.username && (
                                <>
                                  <div className="message-data mb-3">
                                    <span className="message-data-time">
                                      Today 10:13 AM, {chat.senderName}
                                    </span>
                                  </div>
                                  <div className="message my-message  px-2 py-3">
                                    {chat.message}
                                  </div>
                                </>
                              )}
                              {chat.senderName === userData.username && (
                                <>
                                  <div className="message-data text-end mb-3">
                                    <span className="message-data-time">
                                      Today 10:10 AM, {chat.senderName}
                                    </span>
                                  </div>
                                  <div className="message other-message float-right  px-2 py-3">
                                    {chat.message}
                                  </div>
                                </>
                              )}
                            </li>
                          );
                        })
                    ) : (
                      <li>Error</li>
                    )}
                  </ul>
                </div>

                <div className="chat-message clearfix px-3 py-2">
                  <div className="input-group mb-0">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter text here..."
                      onChange={handleMessage}
                      value={userData.message}
                    />
                    <button
                      type="button"
                      className="btn input-group-text btn-primary"
                      onClick={sendPrivateMessage}
                    >
                      <MdSend />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
