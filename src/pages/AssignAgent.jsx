import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAllAgents, fetchAllResources, fetchTaskById } from "../apis/apiHandlers";

const AssignAgent = () => {
  const { taskId } = useParams(); // Retrieve the task ID from the URL parameter
  console.log(taskId)
  const [task, setTask] = useState({});
  const[agent,setAgent]=useState({});
  const [selectedAgent, setSelectedAgent] = useState([]);
  const[resource,setResource]=useState({});
  const [selectedresource, setSelectedResource] = useState([]);

  // const [resourceQuantity, setResourceQuantity] = useState("");

  // const handleResourceQuantityChange = (event) => {
  //   const value = event.target.value;
  //   // Allow only positive integers
  //   if (/^\d*$/.test(value)) {
  //     setResourceQuantity(value);
  //   }
  // };


  // useEffect(() => {
  //   // Fetch task details by ID
  //   const fetchTaskDetails = async () => {
  //     try {
  //       const taskDetails = await fetchTaskById(taskId);
  //       setTask(taskDetails.data);
  //       // console.log(taskDetails.data)
  //       // console.log(task)
  //     } catch (error) {
  //       console.error("Error fetching task details:", error);
  //     }
     

  //   };

  //   fetchTaskDetails();

  // }, [taskId]);

  // useEffect(() => {
  //   const fetchAgentDetails = async () => {
  //     try {
  //       const agentDetails = await fetchAllAgents();
  //       setAgent(agentDetails.data);
  //       console.log(agentDetails)
  //     }
  //     catch (error) {
  //       console.error("Error fetching agent details:", error);
  //     }

  //   };

  //   fetchAgentDetails();
  // }, []);

  // useEffect(() => {
  //   const fetchResourceDetails = async () => {
  //     try {
  //       const resourceDetails = await fetchAllResources();
  //       setResource(resourceDetails.data);
  //        console.log(resource)
  //     }
  //     catch (error) {
  //       console.error("Error fetching resource details:", error);
  //     }

  //   };

  //   fetchResourceDetails();
  // }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const taskDetails = await fetchTaskById(taskId);
        const agentDetails = await fetchAllAgents();
        const resourceDetails = await fetchAllResources();
  
        setTask(taskDetails.data);
        console.log(task)
        setAgent(agentDetails.data);
        console.log(agent)
        setResource(resourceDetails.data);
        console.log(resource)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, [taskId]);
  


  // Render loading or error state if task details are being fetched

  if (!task) {
    return <p>Loading...</p>;
  }
  const handleAgentSelection = (selectedAgent) => {
    setSelectedAgent(selectedAgent);
  };
  const handleResourceSelection = (selectedResource) => {
    setSelectedResource(selectedResource);
  };

  return (
    <div className="container">
      <h1 className="text-center mb-4">Assign Agent to Task</h1>
      <div className="table-responsive">
        <table className="table table-bordered table-striped text-center">
          <tbody>
            <tr>
              <td className="fw-bold">ID</td>
              <td>{task.id}</td>
            </tr>
            <tr>
              <td className="fw-bold">Customer ID</td>
              <td>{task.customer_id}</td>
            </tr>
            <tr>
              <td className="fw-bold">Title</td>
              <td>{task.title}</td>
            </tr>
            <tr>
              <td className="fw-bold">Description</td>
              <td>{task.description}</td>
            </tr>
            <tr>
              <td className="fw-bold">Date</td>
              <td>{task.date}</td>
            </tr>
            <tr>
              <td className="fw-bold">Address</td>
              <td>{task.address}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="my-4">
        <div className="d-flex align-items-center justify-content-center">
          <p className="me-2"><b>Add Note for Agent</b></p>
          <input type="text" className="form-control" style={{ width: '400px', height: '100px' }} />
        </div>
      </div>

      {/* <div className="d-flex justify-content-center">
        <div className="btn-group me-2">
          <button type="button" className="btn btn-primary btn-lg dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ backgroundColor: '#6f22b3', color: '#fff' }}>
            Select Agent
          </button>
          <div className="dropdown-menu">
            {agent.map((agents) => (
              <a
                className="dropdown-item"
                href="#"
                key={agents.id}
                onClick={() => handleAgentSelection(agents)}
              >
                {agents.id} {agents.firstname} {agents.lastname}
              </a>
            ))}
          </div>
        </div>

        <div className="btn-group">
          <button type="button" className="btn btn-primary btn-lg dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ backgroundColor: '#6f22b3', color: '#fff' }}>
            Select Resource
          </button>
          <div className="dropdown-menu">
          {resource.map((resources) => (
              <a
                className="dropdown-item"
                href="#"
                key={resources.id}
                onClick={() => handleResourceSelection(resources)}
              >
                {resources.id} {resources.name}
              </a>
            ))}
          </div>
        </div>
      </div> */}

<div className="d-flex justify-content-center mb-4">
  <div className="btn-group me-2">
    <button type="button" className="btn btn-primary btn-lg dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ backgroundColor: '#6f22b3', color: '#fff' }}>
      Select Agent
    </button>
    <div className="dropdown-menu">
      {agent.map((agents) => (
        <a
          className="dropdown-item"
          href="#"
          key={agents.id}
          onClick={() => handleAgentSelection(agents)}
        >
          {agents.id} {agents.firstname} {agents.lastname}
        </a>
      ))}
    </div>
  </div>
</div>

<div className="d-flex justify-content-center">
  <div className="btn-group me-2">
    <button type="button" className="btn btn-primary btn-lg dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ backgroundColor: '#6f22b3', color: '#fff' }}>
      Select Resource
    </button>
    <div className="dropdown-menu">
      {resource.map((resources) => (
        <a
          className="dropdown-item"
          href="#"
          key={resources.id}
          onClick={() => handleResourceSelection(resources)}
        >
          {resources.id} {resources.name}
        </a>
      ))}
    </div>
  </div>
  <input type="text" className="form-control" style={{ width: '200px' }} placeholder="Resource Quantity" 
          // value={resourceQuantity}
          // onChange={handleResourceQuantityChange} 
          />
</div>


      <div className="mt-4 d-flex justify-content-center">
        <button className="btn btn-success btn-lg me-4">Assign</button>
        <button className="btn btn-danger btn-lg">Cancel</button>
      </div>
    </div>
  );
}

export default AssignAgent;
