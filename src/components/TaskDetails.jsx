import React, { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as MdIcons from "react-icons/md";
import {Link} from "react-router-dom";

const TaskDetails = ({ value }) => {
  const navigate = useNavigate();
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const handleClickChat = () => {
    navigate("/chat", { state: { sender, receiver } });
  };

  return (
    <div className="task-details">
      <div className="d-flex justify-content-between">
        <h5 className="">Task details</h5>
        <button className="btn btn-light" onClick={handleClickChat}>
          {<MdIcons.MdOutlineChat className="icon" color="" />}
        </button>
      </div>
      <h4 className="">{value.title}</h4>
      <input
        type="text"
        className="form-control"
        value={sender}
        onChange={(e) => setSender(e.target.value)}
      />
      <input
        type="text"
        className="form-control"
        value={receiver}
        onChange={(e) => setReceiver(e.target.value)}
      />
      <p className="text-muted">{value.description}</p>
      <ul className="list-inline row m-0 mt-5">
        <li className="col-4 p-0">
          <h5>Start Date</h5>
          <span>
            01 February 2023 <small className="text-muted">1:00 PM</small>
          </span>
        </li>
        <li className="col-4 p-0">
          <h5>Due Date</h5>
          <span>
            17 February 2023 <small className="text-muted">12:00 PM</small>
          </span>
        </li>
        <li className="col-4 p-0">
          <h5>Address</h5>
          <span>{value.address}</span>
        </li>
      </ul>

      <div className="assign-team mt-4">
        <h5>Assign to</h5>
        <div>
          <img
            className="rounded-circle thumb-sm"
            alt="64x64"
            src="https://bootdey.com/img/Content/avatar/avatar2.png"
          />
          <img
            className="rounded-circle thumb-sm"
            alt="64x64"
            src="https://bootdey.com/img/Content/avatar/avatar3.png"
          />
          <img
            className="rounded-circle thumb-sm"
            alt="64x64"
            src="https://bootdey.com/img/Content/avatar/avatar5.png"
          />
          <img
            className="rounded-circle thumb-sm"
            alt="64x64"
            src="https://bootdey.com/img/Content/avatar/avatar8.png"
          />
        </div>
      </div>
      <Link to={`/assign-agent/${value.id}`}>
      <button className="btn btn-info btn-lg me-4">Assign</button>
      </Link>
    </div>
  );
};

export default memo(TaskDetails);
