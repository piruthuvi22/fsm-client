import React, { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as MdIcons from "react-icons/md";

const ComplaintDetails = ({ value ,handleSuspend,handleActive }) => {

  return (
    <div className="complaint-details">
      <div className="d-flex justify-content-between">
        <h5 className="">Complaint details</h5>
        
      </div>
      
      <ul className="list-inline  m-0 mt-5">
        <li className="p-0">
          <h5>Description</h5>
          <span>
          {value.description}
          </span>
        </li>
        <li className=" p-0">
          <h5>Task Id</h5>
          <span>
          {value.taskid} 
          </span>
        </li>
        <li className=" p-0">
          <h5>Agent ID</h5>
          <span>{value.agentid}</span>
        </li>
      </ul>

      <div className="mt-5">
        <button className="btn btn-danger me-2" onClick={() => handleSuspend(value)}>
          Suspend
        </button>
        <button className="btn btn-success" onClick={() => handleActive(value)}>
          Active
        </button>
      </div>
    </div>
  );
};

export default memo(ComplaintDetails);
