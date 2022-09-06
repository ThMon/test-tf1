import { gql } from "@apollo/client";

export const GET_PROGRAMS = gql`
  query GetPrograms {
    program {
      id
      name
      image_id
      thumnail {
        id
        url
        updated_at
        alt
      }
    }
  }
`;
