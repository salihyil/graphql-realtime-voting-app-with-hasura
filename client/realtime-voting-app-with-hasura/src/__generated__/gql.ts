/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  subscription questionDetail($id: Int!) {\n    questions_by_pk(id: $id) {\n      id\n      title\n      options {\n        id\n        title\n        votes_aggregate {\n          aggregate {\n            count\n          }\n        }\n      }\n    }\n  }\n": types.QuestionDetailDocument,
    "\n  mutation newVote($input: votes_insert_input!) {\n    insert_votes_one(object: $input) {\n      option {\n        title\n      }\n    }\n  }\n": types.NewVoteDocument,
    "\n  mutation newQuestion($input: questions_insert_input!) {\n    insert_questions_one(object: $input) {\n      id\n      title\n    }\n  }\n": types.NewQuestionDocument,
    "\n  subscription getQuestions {\n    questions(order_by: { id: desc }) {\n      id\n      title\n    }\n  }\n": types.GetQuestionsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  subscription questionDetail($id: Int!) {\n    questions_by_pk(id: $id) {\n      id\n      title\n      options {\n        id\n        title\n        votes_aggregate {\n          aggregate {\n            count\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  subscription questionDetail($id: Int!) {\n    questions_by_pk(id: $id) {\n      id\n      title\n      options {\n        id\n        title\n        votes_aggregate {\n          aggregate {\n            count\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation newVote($input: votes_insert_input!) {\n    insert_votes_one(object: $input) {\n      option {\n        title\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation newVote($input: votes_insert_input!) {\n    insert_votes_one(object: $input) {\n      option {\n        title\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation newQuestion($input: questions_insert_input!) {\n    insert_questions_one(object: $input) {\n      id\n      title\n    }\n  }\n"): (typeof documents)["\n  mutation newQuestion($input: questions_insert_input!) {\n    insert_questions_one(object: $input) {\n      id\n      title\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  subscription getQuestions {\n    questions(order_by: { id: desc }) {\n      id\n      title\n    }\n  }\n"): (typeof documents)["\n  subscription getQuestions {\n    questions(order_by: { id: desc }) {\n      id\n      title\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;