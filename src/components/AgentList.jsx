import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";

function AgentList({ handleDetailsModal, onDeleteAgent, onEditAgent, data }) {
  return data?.map((agent) => (
    <tr key={agent.id} className="align-middle">
      <td className="td-fname" onClick={() => handleDetailsModal(agent)}>{agent.firstname}</td>
      <td className="td-lname" onClick={() => handleDetailsModal(agent)}>{agent.lastname}</td>
      <td
        onClick={() => handleDetailsModal(agent)}
        className="td-email"
        data-bs-toggle="tooltip"
  data-bs-placement="bottom"
        title={agent.email}
      >
        {agent.email}
      </td>

      <td
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title={agent.phonenumber}
      >
        {agent.phonenumber}
      </td>
      <td className="text-center">
        <BiIcons.BiEditAlt
          data-toggle="tooltip"
          data-placement="top"
          title="Edit agent"
          role="button"
          size={25}
          color="#A020F0"
          onClick={() => onEditAgent(agent)}
        />
      </td>
      <td className="text-center">
        <AiIcons.AiOutlineDelete
          data-toggle="tooltip"
          data-placement="top"
          title="Delete Agent"
          role="button"
          size={25}
          color="#FF0000"
          onClick={() => onDeleteAgent(agent.id)}
        />
      </td>
    </tr>
  ));
}
export default AgentList;
