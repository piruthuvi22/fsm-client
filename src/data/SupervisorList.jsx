import { useQuery, gql } from "@apollo/client";
import * as BiEditAlt from "react-icons/bi";
import * as AiOutlineDelete from "react-icons/ai";

function SupervisorList() {
    const { loading, error, data } = useQuery(gql`
        query {
            querySupervisor(query: {}) {
                id
                firstName
                lastName
                email
                phone
            }
        }
    `);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;

    return data.querySupervisor.map((supervisor) => (
        <tr key={supervisor.id} className="align-middle">
            <th scope="row">{supervisor.id}</th>
            <td>{supervisor.firstName}</td>
            <td>{supervisor.lastName}</td>
            <td>{supervisor.email}</td>
            <td>{supervisor.phone}</td>


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
export default SupervisorList;
