import { useQuery, gql } from "@apollo/client";
import * as BiEditAlt from "react-icons/bi";
import * as AiOutlineDelete from "react-icons/ai";

function CustomerList() {
    const { loading, error, data } = useQuery(gql`
    query {
      queryCustomer(query: {}) {
        id
        firstName
        lastName
        email
        phone
        address
      }
    }
  `);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;

    return data.queryCustomer.map((customer) => (
        <tr key={customer.id} className="align-middle">
            <th scope="row">{customer.id}</th>
            <td>{customer.firstName}</td>
            <td>{customer.lastName}</td>
            <td>{customer.email}</td>
            <td>{customer.phone}</td>
            <td>{customer.address}</td>

            <td>
                <BiEditAlt.BiEditAlt
                    data-toggle="tooltip"
                    data-placement="top"
                    title="edit customer"
                    role="button"
                    fontSize="1.5em"
                    color="#A020F0"
                />
            </td>
            <td>
                <AiOutlineDelete.AiOutlineDelete
                    data-toggle="tooltip"
                    data-placement="top"
                    title="delete customer"
                    role="button"
                    fontSize="1.5em"
                    color="#FF0000"
                />
            </td>
        </tr>
    ));
}
export default CustomerList;
