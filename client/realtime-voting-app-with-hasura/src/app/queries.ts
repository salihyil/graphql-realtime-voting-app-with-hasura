import { gql } from "@/__generated__/gql";

export const QUESTIONS_SUBSCRIPTION = gql(/* GraphQL */ `
  subscription getQuestions {
    questions(order_by: { id: desc }) {
      id
      title
    }
  }
`);
