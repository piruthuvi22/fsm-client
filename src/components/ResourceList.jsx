import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";

function ResourceList({ handleDetailsModal, onDeleteResource, onEditResource, data }) {
  return data?.map((resource) => (
    <tr key={resource.id} className="align-middle">
      <td className="td-name" onClick={() => handleDetailsModal(resource)}>{resource.name}</td>
      <td
        onClick={() => handleDetailsModal(resource)}
        className="limit-text td-description"
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title={resource.description}
      >
        {resource.description}
      </td>

      <td
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title={resource.quantity}
      >
        {resource.quantity}
      </td>
      <td className="text-center">
        <BiIcons.BiEditAlt
          data-toggle="tooltip"
          data-placement="top"
          title="Edit resource"
          role="button"
          size={25}
          color="#A020F0"
          onClick={() => onEditResource(resource)}
        />
      </td>
      <td className="text-center">
        <AiIcons.AiOutlineDelete
          data-toggle="tooltip"
          data-placement="top"
          title="Delete resource"
          role="button"
          size={25}
          color="#FF0000"
          onClick={() => onDeleteResource(resource.id)}
        />
      </td>
    </tr>
  ));
}
export default ResourceList;