import { gql } from "@apollo/client";

export const TASK_QUERY = gql`
  query {
    queryTask(query: {}) {
      id
      title
      address
      phoneNumber
      description
    }
  }
`;

export const TASK_CREATE_MUTATION = gql`
  mutation CreateTask(
    $title: String!
    $description: String!
    $address: String!
    $phoneNumber: String!
  ) {
    createTask(
      value: {
        title: $title
        description: $description
        address: $address
        phoneNumber: $phoneNumber
      }
    ) {
      id
      title
    }
  }
`;

export const TASK_UPDATE_MUTATION = gql`
  mutation UpdateTask(
    $id: String!
    $title: String!
    $description: String!
    $address: String!
    $phoneNumber: String!
  ) {
    updateTask(
      value: {
        id: $id
        title: $title
        description: $description
        address: $address
        phoneNumber: $phoneNumber
      }
    ) {
      id
      title
    }
  }
`;

export const TASK_DELETE_MUTATION = gql`
  mutation DeleteTask($id: String!) {
    deleteTask(value: { id: $id }) {
      id
    }
  }
`;

// const UPDATE_RESOURCE_MUTATION = gql
//   mutation updateResource($id: String!, $name: String!, $description: String!, $quantity: Int!) {
//     updateResource(value: { id: $id, name: $name, description: $description, quantity: $quantity }) {
//       id
//       name
//       description
//       quantity
//     }
//   }
// ;

export const CREATE_CUSTOMER_MUTATION = gql`
  mutation CreateCustomer(
    $firstName: String!
    $lastName: String!
    $address: String!
    $phone: String!
    $email: String!
  ) {
    createCustomer(
      value: {
        firstName: $firstName
        lastName: $lastName
        address: $address
        phone: $phone
        email: $email
      }
    ) {
      id
      firstName
    }
  }
`;
