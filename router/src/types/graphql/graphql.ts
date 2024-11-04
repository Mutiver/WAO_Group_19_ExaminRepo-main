import { GraphQLResolveInfo } from 'graphql';
import { DataSourceContext } from './context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AnalyticsReply = {
  __typename?: 'AnalyticsReply';
  numberOfTodos: Scalars['Float']['output'];
  numberOfTransactions: Scalars['Float']['output'];
};

export type CreateResponse = {
  __typename?: 'CreateResponse';
  message: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo?: Maybe<CreateResponse>;
  deleteTodoById?: Maybe<TodoActionResult>;
  updateTodoById?: Maybe<TodoActionResult>;
};


export type MutationCreateTodoArgs = {
  todo: TodoInput;
};


export type MutationDeleteTodoByIdArgs = {
  todoInfo: TodoDeleteInput;
};


export type MutationUpdateTodoByIdArgs = {
  todo: TodoUpdateInput;
};

export type Query = {
  __typename?: 'Query';
  getAccounting?: Maybe<Transactions>;
  getAnalytics?: Maybe<AnalyticsReply>;
  getTodos?: Maybe<Todos>;
};

export type Todo = {
  __typename?: 'Todo';
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isCompleted: Scalars['Boolean']['output'];
  price: Scalars['Float']['output'];
  taken?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type TodoActionResult = {
  __typename?: 'TodoActionResult';
  message: Scalars['String']['output'];
};

export type TodoDeleteInput = {
  id: Scalars['String']['input'];
  price: Scalars['Float']['input'];
};

export type TodoInput = {
  description: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  title: Scalars['String']['input'];
};

export type TodoUpdateInput = {
  description: Scalars['String']['input'];
  id: Scalars['String']['input'];
  isCompleted: Scalars['Boolean']['input'];
  price: Scalars['Float']['input'];
  taken?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type Todos = {
  __typename?: 'Todos';
  todos: Array<Maybe<Todo>>;
};

export type Transaction = {
  __typename?: 'Transaction';
  amount: Scalars['Float']['output'];
  from: Scalars['String']['output'];
  id: Scalars['String']['output'];
  to: Scalars['String']['output'];
};

export type Transactions = {
  __typename?: 'Transactions';
  Transactions: Array<Maybe<Transaction>>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AnalyticsReply: ResolverTypeWrapper<AnalyticsReply>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CreateResponse: ResolverTypeWrapper<CreateResponse>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Todo: ResolverTypeWrapper<Todo>;
  TodoActionResult: ResolverTypeWrapper<TodoActionResult>;
  TodoDeleteInput: TodoDeleteInput;
  TodoInput: TodoInput;
  TodoUpdateInput: TodoUpdateInput;
  Todos: ResolverTypeWrapper<Todos>;
  Transaction: ResolverTypeWrapper<Transaction>;
  Transactions: ResolverTypeWrapper<Transactions>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AnalyticsReply: AnalyticsReply;
  Boolean: Scalars['Boolean']['output'];
  CreateResponse: CreateResponse;
  Float: Scalars['Float']['output'];
  Mutation: {};
  Query: {};
  String: Scalars['String']['output'];
  Todo: Todo;
  TodoActionResult: TodoActionResult;
  TodoDeleteInput: TodoDeleteInput;
  TodoInput: TodoInput;
  TodoUpdateInput: TodoUpdateInput;
  Todos: Todos;
  Transaction: Transaction;
  Transactions: Transactions;
};

export type AnalyticsReplyResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['AnalyticsReply'] = ResolversParentTypes['AnalyticsReply']> = {
  numberOfTodos?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  numberOfTransactions?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['CreateResponse'] = ResolversParentTypes['CreateResponse']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createTodo?: Resolver<Maybe<ResolversTypes['CreateResponse']>, ParentType, ContextType, RequireFields<MutationCreateTodoArgs, 'todo'>>;
  deleteTodoById?: Resolver<Maybe<ResolversTypes['TodoActionResult']>, ParentType, ContextType, RequireFields<MutationDeleteTodoByIdArgs, 'todoInfo'>>;
  updateTodoById?: Resolver<Maybe<ResolversTypes['TodoActionResult']>, ParentType, ContextType, RequireFields<MutationUpdateTodoByIdArgs, 'todo'>>;
};

export type QueryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getAccounting?: Resolver<Maybe<ResolversTypes['Transactions']>, ParentType, ContextType>;
  getAnalytics?: Resolver<Maybe<ResolversTypes['AnalyticsReply']>, ParentType, ContextType>;
  getTodos?: Resolver<Maybe<ResolversTypes['Todos']>, ParentType, ContextType>;
};

export type TodoResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Todo'] = ResolversParentTypes['Todo']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isCompleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  taken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TodoActionResultResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['TodoActionResult'] = ResolversParentTypes['TodoActionResult']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TodosResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Todos'] = ResolversParentTypes['Todos']> = {
  todos?: Resolver<Array<Maybe<ResolversTypes['Todo']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransactionResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Transaction'] = ResolversParentTypes['Transaction']> = {
  amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransactionsResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Transactions'] = ResolversParentTypes['Transactions']> = {
  Transactions?: Resolver<Array<Maybe<ResolversTypes['Transaction']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = DataSourceContext> = {
  AnalyticsReply?: AnalyticsReplyResolvers<ContextType>;
  CreateResponse?: CreateResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Todo?: TodoResolvers<ContextType>;
  TodoActionResult?: TodoActionResultResolvers<ContextType>;
  Todos?: TodosResolvers<ContextType>;
  Transaction?: TransactionResolvers<ContextType>;
  Transactions?: TransactionsResolvers<ContextType>;
};

