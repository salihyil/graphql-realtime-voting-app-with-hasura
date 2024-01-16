import { gql } from "@/__generated__/gql";

export const NEW_QUESTIONS_MUTATION = gql(/* GraphQL */ `
  mutation newQuestion($input: questions_insert_input!) {
    insert_questions_one(object: $input) {
      id
      title
    }
  }
`);
