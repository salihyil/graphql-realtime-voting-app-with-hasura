/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "options" */
  delete_options?: Maybe<Options_Mutation_Response>;
  /** delete single row from the table: "options" */
  delete_options_by_pk?: Maybe<Options>;
  /** delete data from the table: "questions" */
  delete_questions?: Maybe<Questions_Mutation_Response>;
  /** delete single row from the table: "questions" */
  delete_questions_by_pk?: Maybe<Questions>;
  /** delete data from the table: "votes" */
  delete_votes?: Maybe<Votes_Mutation_Response>;
  /** delete single row from the table: "votes" */
  delete_votes_by_pk?: Maybe<Votes>;
  /** insert data into the table: "options" */
  insert_options?: Maybe<Options_Mutation_Response>;
  /** insert a single row into the table: "options" */
  insert_options_one?: Maybe<Options>;
  /** insert data into the table: "questions" */
  insert_questions?: Maybe<Questions_Mutation_Response>;
  /** insert a single row into the table: "questions" */
  insert_questions_one?: Maybe<Questions>;
  /** insert data into the table: "votes" */
  insert_votes?: Maybe<Votes_Mutation_Response>;
  /** insert a single row into the table: "votes" */
  insert_votes_one?: Maybe<Votes>;
  /** update data of the table: "options" */
  update_options?: Maybe<Options_Mutation_Response>;
  /** update single row of the table: "options" */
  update_options_by_pk?: Maybe<Options>;
  /** update multiples rows of table: "options" */
  update_options_many?: Maybe<Array<Maybe<Options_Mutation_Response>>>;
  /** update data of the table: "questions" */
  update_questions?: Maybe<Questions_Mutation_Response>;
  /** update single row of the table: "questions" */
  update_questions_by_pk?: Maybe<Questions>;
  /** update multiples rows of table: "questions" */
  update_questions_many?: Maybe<Array<Maybe<Questions_Mutation_Response>>>;
  /** update data of the table: "votes" */
  update_votes?: Maybe<Votes_Mutation_Response>;
  /** update single row of the table: "votes" */
  update_votes_by_pk?: Maybe<Votes>;
  /** update multiples rows of table: "votes" */
  update_votes_many?: Maybe<Array<Maybe<Votes_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_OptionsArgs = {
  where: Options_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Options_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_QuestionsArgs = {
  where: Questions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Questions_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_VotesArgs = {
  where: Votes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Votes_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootInsert_OptionsArgs = {
  objects: Array<Options_Insert_Input>;
  on_conflict?: InputMaybe<Options_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Options_OneArgs = {
  object: Options_Insert_Input;
  on_conflict?: InputMaybe<Options_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_QuestionsArgs = {
  objects: Array<Questions_Insert_Input>;
  on_conflict?: InputMaybe<Questions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Questions_OneArgs = {
  object: Questions_Insert_Input;
  on_conflict?: InputMaybe<Questions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_VotesArgs = {
  objects: Array<Votes_Insert_Input>;
  on_conflict?: InputMaybe<Votes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Votes_OneArgs = {
  object: Votes_Insert_Input;
  on_conflict?: InputMaybe<Votes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_OptionsArgs = {
  _inc?: InputMaybe<Options_Inc_Input>;
  _set?: InputMaybe<Options_Set_Input>;
  where: Options_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Options_By_PkArgs = {
  _inc?: InputMaybe<Options_Inc_Input>;
  _set?: InputMaybe<Options_Set_Input>;
  pk_columns: Options_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Options_ManyArgs = {
  updates: Array<Options_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_QuestionsArgs = {
  _inc?: InputMaybe<Questions_Inc_Input>;
  _set?: InputMaybe<Questions_Set_Input>;
  where: Questions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Questions_By_PkArgs = {
  _inc?: InputMaybe<Questions_Inc_Input>;
  _set?: InputMaybe<Questions_Set_Input>;
  pk_columns: Questions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Questions_ManyArgs = {
  updates: Array<Questions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_VotesArgs = {
  _inc?: InputMaybe<Votes_Inc_Input>;
  _set?: InputMaybe<Votes_Set_Input>;
  where: Votes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Votes_By_PkArgs = {
  _inc?: InputMaybe<Votes_Inc_Input>;
  _set?: InputMaybe<Votes_Set_Input>;
  pk_columns: Votes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Votes_ManyArgs = {
  updates: Array<Votes_Updates>;
};

/** columns and relationships of "options" */
export type Options = {
  __typename?: 'options';
  id: Scalars['Int']['output'];
  /** An object relationship */
  question: Questions;
  question_id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  /** An array relationship */
  votes: Array<Votes>;
  /** An aggregate relationship */
  votes_aggregate: Votes_Aggregate;
};


/** columns and relationships of "options" */
export type OptionsVotesArgs = {
  distinct_on?: InputMaybe<Array<Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Votes_Order_By>>;
  where?: InputMaybe<Votes_Bool_Exp>;
};


/** columns and relationships of "options" */
export type OptionsVotes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Votes_Order_By>>;
  where?: InputMaybe<Votes_Bool_Exp>;
};

/** aggregated selection of "options" */
export type Options_Aggregate = {
  __typename?: 'options_aggregate';
  aggregate?: Maybe<Options_Aggregate_Fields>;
  nodes: Array<Options>;
};

export type Options_Aggregate_Bool_Exp = {
  count?: InputMaybe<Options_Aggregate_Bool_Exp_Count>;
};

export type Options_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Options_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Options_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "options" */
export type Options_Aggregate_Fields = {
  __typename?: 'options_aggregate_fields';
  avg?: Maybe<Options_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Options_Max_Fields>;
  min?: Maybe<Options_Min_Fields>;
  stddev?: Maybe<Options_Stddev_Fields>;
  stddev_pop?: Maybe<Options_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Options_Stddev_Samp_Fields>;
  sum?: Maybe<Options_Sum_Fields>;
  var_pop?: Maybe<Options_Var_Pop_Fields>;
  var_samp?: Maybe<Options_Var_Samp_Fields>;
  variance?: Maybe<Options_Variance_Fields>;
};


/** aggregate fields of "options" */
export type Options_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Options_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "options" */
export type Options_Aggregate_Order_By = {
  avg?: InputMaybe<Options_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Options_Max_Order_By>;
  min?: InputMaybe<Options_Min_Order_By>;
  stddev?: InputMaybe<Options_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Options_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Options_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Options_Sum_Order_By>;
  var_pop?: InputMaybe<Options_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Options_Var_Samp_Order_By>;
  variance?: InputMaybe<Options_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "options" */
export type Options_Arr_Rel_Insert_Input = {
  data: Array<Options_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Options_On_Conflict>;
};

/** aggregate avg on columns */
export type Options_Avg_Fields = {
  __typename?: 'options_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  question_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "options" */
export type Options_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  question_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "options". All fields are combined with a logical 'AND'. */
export type Options_Bool_Exp = {
  _and?: InputMaybe<Array<Options_Bool_Exp>>;
  _not?: InputMaybe<Options_Bool_Exp>;
  _or?: InputMaybe<Array<Options_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  question?: InputMaybe<Questions_Bool_Exp>;
  question_id?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  votes?: InputMaybe<Votes_Bool_Exp>;
  votes_aggregate?: InputMaybe<Votes_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "options" */
export enum Options_Constraint {
  /** unique or primary key constraint on columns "id" */
  OptionsPkey = 'options_pkey'
}

/** input type for incrementing numeric columns in table "options" */
export type Options_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  question_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "options" */
export type Options_Insert_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  question?: InputMaybe<Questions_Obj_Rel_Insert_Input>;
  question_id?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  votes?: InputMaybe<Votes_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Options_Max_Fields = {
  __typename?: 'options_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  question_id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "options" */
export type Options_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  question_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Options_Min_Fields = {
  __typename?: 'options_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  question_id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "options" */
export type Options_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  question_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "options" */
export type Options_Mutation_Response = {
  __typename?: 'options_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Options>;
};

/** input type for inserting object relation for remote table "options" */
export type Options_Obj_Rel_Insert_Input = {
  data: Options_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Options_On_Conflict>;
};

/** on_conflict condition type for table "options" */
export type Options_On_Conflict = {
  constraint: Options_Constraint;
  update_columns?: Array<Options_Update_Column>;
  where?: InputMaybe<Options_Bool_Exp>;
};

/** Ordering options when selecting data from "options". */
export type Options_Order_By = {
  id?: InputMaybe<Order_By>;
  question?: InputMaybe<Questions_Order_By>;
  question_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  votes_aggregate?: InputMaybe<Votes_Aggregate_Order_By>;
};

/** primary key columns input for table: options */
export type Options_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "options" */
export enum Options_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  QuestionId = 'question_id',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "options" */
export type Options_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  question_id?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Options_Stddev_Fields = {
  __typename?: 'options_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  question_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "options" */
export type Options_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  question_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Options_Stddev_Pop_Fields = {
  __typename?: 'options_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  question_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "options" */
export type Options_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  question_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Options_Stddev_Samp_Fields = {
  __typename?: 'options_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  question_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "options" */
export type Options_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  question_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "options" */
export type Options_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Options_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Options_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  question_id?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Options_Sum_Fields = {
  __typename?: 'options_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  question_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "options" */
export type Options_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  question_id?: InputMaybe<Order_By>;
};

/** update columns of table "options" */
export enum Options_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  QuestionId = 'question_id',
  /** column name */
  Title = 'title'
}

export type Options_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Options_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Options_Set_Input>;
  /** filter the rows which have to be updated */
  where: Options_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Options_Var_Pop_Fields = {
  __typename?: 'options_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  question_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "options" */
export type Options_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  question_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Options_Var_Samp_Fields = {
  __typename?: 'options_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  question_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "options" */
export type Options_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  question_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Options_Variance_Fields = {
  __typename?: 'options_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  question_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "options" */
export type Options_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  question_id?: InputMaybe<Order_By>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  options: Array<Options>;
  /** An aggregate relationship */
  options_aggregate: Options_Aggregate;
  /** fetch data from the table: "options" using primary key columns */
  options_by_pk?: Maybe<Options>;
  /** fetch data from the table: "questions" */
  questions: Array<Questions>;
  /** fetch aggregated fields from the table: "questions" */
  questions_aggregate: Questions_Aggregate;
  /** fetch data from the table: "questions" using primary key columns */
  questions_by_pk?: Maybe<Questions>;
  /** An array relationship */
  votes: Array<Votes>;
  /** An aggregate relationship */
  votes_aggregate: Votes_Aggregate;
  /** fetch data from the table: "votes" using primary key columns */
  votes_by_pk?: Maybe<Votes>;
};


export type Query_RootOptionsArgs = {
  distinct_on?: InputMaybe<Array<Options_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Options_Order_By>>;
  where?: InputMaybe<Options_Bool_Exp>;
};


export type Query_RootOptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Options_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Options_Order_By>>;
  where?: InputMaybe<Options_Bool_Exp>;
};


export type Query_RootOptions_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootQuestionsArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


export type Query_RootQuestions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


export type Query_RootQuestions_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootVotesArgs = {
  distinct_on?: InputMaybe<Array<Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Votes_Order_By>>;
  where?: InputMaybe<Votes_Bool_Exp>;
};


export type Query_RootVotes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Votes_Order_By>>;
  where?: InputMaybe<Votes_Bool_Exp>;
};


export type Query_RootVotes_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** columns and relationships of "questions" */
export type Questions = {
  __typename?: 'questions';
  id: Scalars['Int']['output'];
  /** An array relationship */
  options: Array<Options>;
  /** An aggregate relationship */
  options_aggregate: Options_Aggregate;
  title: Scalars['String']['output'];
};


/** columns and relationships of "questions" */
export type QuestionsOptionsArgs = {
  distinct_on?: InputMaybe<Array<Options_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Options_Order_By>>;
  where?: InputMaybe<Options_Bool_Exp>;
};


/** columns and relationships of "questions" */
export type QuestionsOptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Options_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Options_Order_By>>;
  where?: InputMaybe<Options_Bool_Exp>;
};

/** aggregated selection of "questions" */
export type Questions_Aggregate = {
  __typename?: 'questions_aggregate';
  aggregate?: Maybe<Questions_Aggregate_Fields>;
  nodes: Array<Questions>;
};

/** aggregate fields of "questions" */
export type Questions_Aggregate_Fields = {
  __typename?: 'questions_aggregate_fields';
  avg?: Maybe<Questions_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Questions_Max_Fields>;
  min?: Maybe<Questions_Min_Fields>;
  stddev?: Maybe<Questions_Stddev_Fields>;
  stddev_pop?: Maybe<Questions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Questions_Stddev_Samp_Fields>;
  sum?: Maybe<Questions_Sum_Fields>;
  var_pop?: Maybe<Questions_Var_Pop_Fields>;
  var_samp?: Maybe<Questions_Var_Samp_Fields>;
  variance?: Maybe<Questions_Variance_Fields>;
};


/** aggregate fields of "questions" */
export type Questions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Questions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Questions_Avg_Fields = {
  __typename?: 'questions_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "questions". All fields are combined with a logical 'AND'. */
export type Questions_Bool_Exp = {
  _and?: InputMaybe<Array<Questions_Bool_Exp>>;
  _not?: InputMaybe<Questions_Bool_Exp>;
  _or?: InputMaybe<Array<Questions_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  options?: InputMaybe<Options_Bool_Exp>;
  options_aggregate?: InputMaybe<Options_Aggregate_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "questions" */
export enum Questions_Constraint {
  /** unique or primary key constraint on columns "id" */
  QuestionsPkey = 'questions_pkey'
}

/** input type for incrementing numeric columns in table "questions" */
export type Questions_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "questions" */
export type Questions_Insert_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  options?: InputMaybe<Options_Arr_Rel_Insert_Input>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Questions_Max_Fields = {
  __typename?: 'questions_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Questions_Min_Fields = {
  __typename?: 'questions_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "questions" */
export type Questions_Mutation_Response = {
  __typename?: 'questions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Questions>;
};

/** input type for inserting object relation for remote table "questions" */
export type Questions_Obj_Rel_Insert_Input = {
  data: Questions_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Questions_On_Conflict>;
};

/** on_conflict condition type for table "questions" */
export type Questions_On_Conflict = {
  constraint: Questions_Constraint;
  update_columns?: Array<Questions_Update_Column>;
  where?: InputMaybe<Questions_Bool_Exp>;
};

/** Ordering options when selecting data from "questions". */
export type Questions_Order_By = {
  id?: InputMaybe<Order_By>;
  options_aggregate?: InputMaybe<Options_Aggregate_Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: questions */
export type Questions_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "questions" */
export enum Questions_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "questions" */
export type Questions_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Questions_Stddev_Fields = {
  __typename?: 'questions_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Questions_Stddev_Pop_Fields = {
  __typename?: 'questions_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Questions_Stddev_Samp_Fields = {
  __typename?: 'questions_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "questions" */
export type Questions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Questions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Questions_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Questions_Sum_Fields = {
  __typename?: 'questions_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "questions" */
export enum Questions_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title'
}

export type Questions_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Questions_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Questions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Questions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Questions_Var_Pop_Fields = {
  __typename?: 'questions_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Questions_Var_Samp_Fields = {
  __typename?: 'questions_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Questions_Variance_Fields = {
  __typename?: 'questions_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  options: Array<Options>;
  /** An aggregate relationship */
  options_aggregate: Options_Aggregate;
  /** fetch data from the table: "options" using primary key columns */
  options_by_pk?: Maybe<Options>;
  /** fetch data from the table in a streaming manner: "options" */
  options_stream: Array<Options>;
  /** fetch data from the table: "questions" */
  questions: Array<Questions>;
  /** fetch aggregated fields from the table: "questions" */
  questions_aggregate: Questions_Aggregate;
  /** fetch data from the table: "questions" using primary key columns */
  questions_by_pk?: Maybe<Questions>;
  /** fetch data from the table in a streaming manner: "questions" */
  questions_stream: Array<Questions>;
  /** An array relationship */
  votes: Array<Votes>;
  /** An aggregate relationship */
  votes_aggregate: Votes_Aggregate;
  /** fetch data from the table: "votes" using primary key columns */
  votes_by_pk?: Maybe<Votes>;
  /** fetch data from the table in a streaming manner: "votes" */
  votes_stream: Array<Votes>;
};


export type Subscription_RootOptionsArgs = {
  distinct_on?: InputMaybe<Array<Options_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Options_Order_By>>;
  where?: InputMaybe<Options_Bool_Exp>;
};


export type Subscription_RootOptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Options_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Options_Order_By>>;
  where?: InputMaybe<Options_Bool_Exp>;
};


export type Subscription_RootOptions_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootOptions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Options_Stream_Cursor_Input>>;
  where?: InputMaybe<Options_Bool_Exp>;
};


export type Subscription_RootQuestionsArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


export type Subscription_RootQuestions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


export type Subscription_RootQuestions_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootQuestions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Questions_Stream_Cursor_Input>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


export type Subscription_RootVotesArgs = {
  distinct_on?: InputMaybe<Array<Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Votes_Order_By>>;
  where?: InputMaybe<Votes_Bool_Exp>;
};


export type Subscription_RootVotes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Votes_Order_By>>;
  where?: InputMaybe<Votes_Bool_Exp>;
};


export type Subscription_RootVotes_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootVotes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Votes_Stream_Cursor_Input>>;
  where?: InputMaybe<Votes_Bool_Exp>;
};

/** columns and relationships of "votes" */
export type Votes = {
  __typename?: 'votes';
  id: Scalars['Int']['output'];
  /** An object relationship */
  option: Options;
  option_id: Scalars['Int']['output'];
};

/** aggregated selection of "votes" */
export type Votes_Aggregate = {
  __typename?: 'votes_aggregate';
  aggregate?: Maybe<Votes_Aggregate_Fields>;
  nodes: Array<Votes>;
};

export type Votes_Aggregate_Bool_Exp = {
  count?: InputMaybe<Votes_Aggregate_Bool_Exp_Count>;
};

export type Votes_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Votes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Votes_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "votes" */
export type Votes_Aggregate_Fields = {
  __typename?: 'votes_aggregate_fields';
  avg?: Maybe<Votes_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Votes_Max_Fields>;
  min?: Maybe<Votes_Min_Fields>;
  stddev?: Maybe<Votes_Stddev_Fields>;
  stddev_pop?: Maybe<Votes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Votes_Stddev_Samp_Fields>;
  sum?: Maybe<Votes_Sum_Fields>;
  var_pop?: Maybe<Votes_Var_Pop_Fields>;
  var_samp?: Maybe<Votes_Var_Samp_Fields>;
  variance?: Maybe<Votes_Variance_Fields>;
};


/** aggregate fields of "votes" */
export type Votes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Votes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "votes" */
export type Votes_Aggregate_Order_By = {
  avg?: InputMaybe<Votes_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Votes_Max_Order_By>;
  min?: InputMaybe<Votes_Min_Order_By>;
  stddev?: InputMaybe<Votes_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Votes_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Votes_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Votes_Sum_Order_By>;
  var_pop?: InputMaybe<Votes_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Votes_Var_Samp_Order_By>;
  variance?: InputMaybe<Votes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "votes" */
export type Votes_Arr_Rel_Insert_Input = {
  data: Array<Votes_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Votes_On_Conflict>;
};

/** aggregate avg on columns */
export type Votes_Avg_Fields = {
  __typename?: 'votes_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  option_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "votes" */
export type Votes_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  option_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "votes". All fields are combined with a logical 'AND'. */
export type Votes_Bool_Exp = {
  _and?: InputMaybe<Array<Votes_Bool_Exp>>;
  _not?: InputMaybe<Votes_Bool_Exp>;
  _or?: InputMaybe<Array<Votes_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  option?: InputMaybe<Options_Bool_Exp>;
  option_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "votes" */
export enum Votes_Constraint {
  /** unique or primary key constraint on columns "id" */
  VotesPkey = 'votes_pkey'
}

/** input type for incrementing numeric columns in table "votes" */
export type Votes_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  option_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "votes" */
export type Votes_Insert_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  option?: InputMaybe<Options_Obj_Rel_Insert_Input>;
  option_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Votes_Max_Fields = {
  __typename?: 'votes_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  option_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "votes" */
export type Votes_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  option_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Votes_Min_Fields = {
  __typename?: 'votes_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  option_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "votes" */
export type Votes_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  option_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "votes" */
export type Votes_Mutation_Response = {
  __typename?: 'votes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Votes>;
};

/** on_conflict condition type for table "votes" */
export type Votes_On_Conflict = {
  constraint: Votes_Constraint;
  update_columns?: Array<Votes_Update_Column>;
  where?: InputMaybe<Votes_Bool_Exp>;
};

/** Ordering options when selecting data from "votes". */
export type Votes_Order_By = {
  id?: InputMaybe<Order_By>;
  option?: InputMaybe<Options_Order_By>;
  option_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: votes */
export type Votes_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "votes" */
export enum Votes_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  OptionId = 'option_id'
}

/** input type for updating data in table "votes" */
export type Votes_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  option_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Votes_Stddev_Fields = {
  __typename?: 'votes_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  option_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "votes" */
export type Votes_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  option_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Votes_Stddev_Pop_Fields = {
  __typename?: 'votes_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  option_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "votes" */
export type Votes_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  option_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Votes_Stddev_Samp_Fields = {
  __typename?: 'votes_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  option_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "votes" */
export type Votes_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  option_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "votes" */
export type Votes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Votes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Votes_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  option_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Votes_Sum_Fields = {
  __typename?: 'votes_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  option_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "votes" */
export type Votes_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  option_id?: InputMaybe<Order_By>;
};

/** update columns of table "votes" */
export enum Votes_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  OptionId = 'option_id'
}

export type Votes_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Votes_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Votes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Votes_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Votes_Var_Pop_Fields = {
  __typename?: 'votes_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  option_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "votes" */
export type Votes_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  option_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Votes_Var_Samp_Fields = {
  __typename?: 'votes_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  option_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "votes" */
export type Votes_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  option_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Votes_Variance_Fields = {
  __typename?: 'votes_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  option_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "votes" */
export type Votes_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  option_id?: InputMaybe<Order_By>;
};

export type QuestionDetailSubscriptionVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type QuestionDetailSubscription = { __typename?: 'subscription_root', questions_by_pk?: { __typename?: 'questions', id: number, title: string, options: Array<{ __typename?: 'options', id: number, title: string, votes_aggregate: { __typename?: 'votes_aggregate', aggregate?: { __typename?: 'votes_aggregate_fields', count: number } | null } }> } | null };

export type NewVoteMutationVariables = Exact<{
  input: Votes_Insert_Input;
}>;


export type NewVoteMutation = { __typename?: 'mutation_root', insert_votes_one?: { __typename?: 'votes', option: { __typename?: 'options', title: string } } | null };

export type NewQuestionMutationVariables = Exact<{
  input: Questions_Insert_Input;
}>;


export type NewQuestionMutation = { __typename?: 'mutation_root', insert_questions_one?: { __typename?: 'questions', id: number, title: string } | null };

export type GetQuestionsSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type GetQuestionsSubscription = { __typename?: 'subscription_root', questions: Array<{ __typename?: 'questions', id: number, title: string }> };


export const QuestionDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"questionDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"questions_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"votes_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<QuestionDetailSubscription, QuestionDetailSubscriptionVariables>;
export const NewVoteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"newVote"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"votes_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_votes_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<NewVoteMutation, NewVoteMutationVariables>;
export const NewQuestionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"newQuestion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"questions_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_questions_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<NewQuestionMutation, NewQuestionMutationVariables>;
export const GetQuestionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"getQuestions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"questions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"EnumValue","value":"desc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<GetQuestionsSubscription, GetQuestionsSubscriptionVariables>;