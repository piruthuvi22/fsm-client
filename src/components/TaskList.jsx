import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";

function TaskList({ handleDetailsModal, onDeleteTask, onEditTask, data }) {
  return data?.map((task) => (
    <tr key={task.id} className="align-middle">
      <th scope="row">{task.customer_id}</th>
      <td className="td-title" onClick={() => handleDetailsModal(task)}>{task.title}</td>
      <td
        onClick={() => handleDetailsModal(task)}
        className="limit-text td-description"
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title={task.description}
      >
        {task.description}
      </td>

      <td
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title={task.address}
      >
        {task.address}
      </td>
      {/* <td>{task.phonenumber}</td> */}
      <td className="text-center">
        <BiIcons.BiEditAlt
          data-toggle="tooltip"
          data-placement="top"
          title="Edit task"
          role="button"
          size={25}
          color="#A020F0"
          onClick={() => onEditTask(task)}
        />
      </td>
      <td className="text-center">
        <AiIcons.AiOutlineDelete
          data-toggle="tooltip"
          data-placement="top"
          title="Delete task"
          role="button"
          size={25}
          color="#FF0000"
          onClick={() => onDeleteTask(task.id)}
        />
      </td>
    </tr>
  ));
}
export default TaskList;
