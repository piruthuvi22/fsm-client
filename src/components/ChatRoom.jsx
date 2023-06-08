import React, { useState } from "react";
import { over } from "stompjs";
import SockJS from "sockjs-client";

let stompClient = null;
const ChatRoom = () => {
  // Message details and connection details
  const [userData, setUserData] = useState({
    username: "",
    receiverName: "",
    connected: false,
    message: "",
  });

  const [privateChats, setPrivateChats] = useState(new Map());
  const [tab, setTab] = useState("");

  const handleUsername = (e) => {
    let { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleConnect = () => {
    let stomp = new SockJS("http://localhost:8080/socket");
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
    <div className="container">
      {userData.connected ? (
        <div className="chat-box">
          <div className="member-list">
            <ul>
              <li>Current user:{userData.username}</li>
              {[...privateChats.keys()].length > 0 &&
                [...privateChats.keys()].map((username, index) => {
                  return (
                    <li
                      key={index}
                      className="member active"
                      onClick={() => setTab(username)}
                    >
                      {username}
                    </li>
                  );
                })}
            </ul>
          </div>

          {tab !== "CHATROOM" && (
            <div className="chat-content">
              <ul className="chat-messages">
                <li>Private chat</li>
                {[...privateChats.keys()].length > 0 ? (
                  privateChats.get(userData.receiverName).map((chat, index) => {
                    console.log(chat);
                    return (
                      <li className="message" key={index}>
                        {chat.senderName !== userData.username && (
                          <div className="avatar">{chat.senderName}</div>
                        )}
                        <div className="message-data">{chat.message}</div>
                        {chat.senderName === userData.username && (
                          <div className="avatar self">{chat.senderName}</div>
                        )}
                      </li>
                    );
                  })
                ) : (
                  <li>Error</li>
                )}
              </ul>
              <div className="send-message">
                <input
                  type="text"
                  name=""
                  className="input-message"
                  placeholder="Enter private msg"
                  onChange={handleMessage}
                  value={userData.message}
                />
                <button
                  type="button"
                  className="send-button"
                  onClick={sendPrivateMessage}
                >
                  Send
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="register">
          Sender name:
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleUsername}
          />
          Receiver name:
          <input
            type="text"
            name="receiverName"
            value={userData.receiverName}
            onChange={handleUsername}
          />
          <button type="button" onClick={handleConnect}>
            CONNECT
          </button>
          <br />
          <p style={{ display: "block" }}>{JSON.stringify(userData)}</p>
        </div>
      )}
    </div>
  );
};

export default ChatRoom;
