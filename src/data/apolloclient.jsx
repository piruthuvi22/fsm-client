import { gql } from "@apollo/client";

export const CREATE_TASK_MUTATION = gql`
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


export const CREATE_SUPERVISOR_MUTATION = gql`
  mutation CreateSupervisor(
    $firstName: String!
    $lastName: String!
    $address: String!
    $phone: String!
    $email: String!
  ) {
    createSupervisor(
      value: {
        firstName: $firstName
        lastName: $lastName
        phone: $phone
        email: $email
      }
    ) {
      id
      firstName
    }
  }
`;



export const DELETE_TASK_MUTATION = gql` mutation CreateTask(
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
