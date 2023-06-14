import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";

function CustomerList({ onDeleteCustomer, onEditCustomer, data }) {
  return data?.map((customer) => (
    <tr key={customer.id} className="align-middle">
      <td scope="row">{customer.firstname}</td>

      <td
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title={customer.lastname}
      >
        {customer.lastname}
      </td>
      <td
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title={customer.email}
      >
        {customer.email}
      </td>
      <td
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title={customer.address}
      >
        {customer.address}
      </td>
      <td
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title={customer.phonenumber}
      >
        {customer.phonenumber}
      </td>

      <td className="text-center">
        <BiIcons.BiEditAlt
          data-toggle="tooltip"
          data-placement="top"
          title="Edit customer"
          role="button"
          size={25}
          color="#A020F0"
          onClick={() => onEditCustomer(customer)}
        />
      </td>
      <td className="text-center">
        <AiIcons.AiOutlineDelete
          data-toggle="tooltip"
          data-placement="top"
          title="Delete customer"
          role="button"
          size={25}
          color="#FF0000"
          onClick={() => onDeleteCustomer(customer.id)}
        />
      </td>
    </tr>
  ));
}
export default CustomerList;
