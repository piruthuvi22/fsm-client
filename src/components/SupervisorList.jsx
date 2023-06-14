import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";

function SupervisorList({ onDeleteSupervisor, onEditSupervisor, data }) {
  return data?.map((supervisor) => (
    <tr key={supervisor.id} className="align-middle">
      <td scope="row">{supervisor.firstname}</td>

      <td
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title={supervisor.lastname}
      >
        {supervisor.lastname}
      </td>
      <td
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title={supervisor.email}
      >
        {supervisor.email}
      </td>

      <td
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title={supervisor.phonenumber}
      >
        {supervisor.phonenumber}
      </td>

      <td className="text-center">
        <BiIcons.BiEditAlt
          data-toggle="tooltip"
          data-placement="top"
          title="Edit supervisor"
          role="button"
          size={25}
          color="#A020F0"
          onClick={() => onEditSupervisor(supervisor)}
        />
      </td>
      <td className="text-center">
        <AiIcons.AiOutlineDelete
          data-toggle="tooltip"
          data-placement="top"
          title="Delete supervisor"
          role="button"
          size={25}
          color="#FF0000"
          onClick={() => onDeleteSupervisor(supervisor.id)}
        />
      </td>
    </tr>
  ));
}
export default SupervisorList;
