import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';

function ComplaintList({
  
  onDeleteComplaint,
  onEditComplaint,
  onHandleComplaint,
  data,
}) {
  return data?.map((complaint) => (
    <tr key={complaint.id} >
      <th scope="row">{complaint.taskid}</th>
      <td
        
        className="limit-text td-description"
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title={complaint.description}
      >
        {complaint.description}
      </td>

      <td
      className={complaint.handled ? 'bg-danger' : ''}
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title={complaint.agentid}
      >
        {complaint.agentid}
      </td>
      <td
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title={complaint.customerPhoneNumber}
      >
        {complaint.customerPhoneNumber}
      </td>
      
      <td className="text-center">
        <BiIcons.BiEditAlt
          data-toggle="tooltip"
          data-placement="top"
          title="Edit complaint"
          role="button"
          size={25}
          color="#A020F0"
          onClick={() => onEditComplaint(complaint)}
        />
      </td>
      <td className="text-center">
        <AiIcons.AiOutlineDelete
          data-toggle="tooltip"
          data-placement="top"
          title="Delete complaint"
          role="button"
          size={25}
          color="#FF0000"
          onClick={() => onDeleteComplaint(complaint.id)}
        />
      </td>
      <td className="text-center">
        <BiIcons.BiArchive
          data-toggle="tooltip"
          data-placement="top"
          title="Edit complaint"
          role="button"
          size={25}
          color="#A020F0"
          onClick={() => onHandleComplaint(complaint)}
        
        />
        </td>
      

    </tr>
  ));
}
export default ComplaintList;
