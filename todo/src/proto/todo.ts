/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "todoPackage";

export interface UserId {
  userId: string;
}

export interface TodoCreateDto {
  userId: string;
  title: string;
  description: string;
  price: number;
}

export interface Todo {
  id: string;
  taken: string;
  title: string;
  userId: string;
  description: string;
  isCompleted: boolean;
  price: number;
}

export interface Todos {
  todos: Todo[];
}

export interface TodoDeleteInfo {
  idTodo: string;
  userId: string;
}

export interface TodoUpdateDto {
  id: string;
  taken: string;
  title: string;
  userId: string;
  description: string;
  isCompleted: boolean;
  price: number;
}

export interface TodoActionResult {
  message: string;
}

function createBaseUserId(): UserId {
  return { userId: "" };
}

export const UserId = {
  encode(message: UserId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserId {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserId {
    return { userId: isSet(object.userId) ? globalThis.String(object.userId) : "" };
  },

  toJSON(message: UserId): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserId>, I>>(base?: I): UserId {
    return UserId.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserId>, I>>(object: I): UserId {
    const message = createBaseUserId();
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseTodoCreateDto(): TodoCreateDto {
  return { userId: "", title: "", description: "", price: 0 };
}

export const TodoCreateDto = {
  encode(message: TodoCreateDto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.price !== 0) {
      writer.uint32(41).double(message.price);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TodoCreateDto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTodoCreateDto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.title = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 5:
          if (tag !== 41) {
            break;
          }

          message.price = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TodoCreateDto {
    return {
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      price: isSet(object.price) ? globalThis.Number(object.price) : 0,
    };
  },

  toJSON(message: TodoCreateDto): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.price !== 0) {
      obj.price = message.price;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TodoCreateDto>, I>>(base?: I): TodoCreateDto {
    return TodoCreateDto.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TodoCreateDto>, I>>(object: I): TodoCreateDto {
    const message = createBaseTodoCreateDto();
    message.userId = object.userId ?? "";
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.price = object.price ?? 0;
    return message;
  },
};

function createBaseTodo(): Todo {
  return { id: "", taken: "", title: "", userId: "", description: "", isCompleted: false, price: 0 };
}

export const Todo = {
  encode(message: Todo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.taken !== "") {
      writer.uint32(18).string(message.taken);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.userId !== "") {
      writer.uint32(34).string(message.userId);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.isCompleted !== false) {
      writer.uint32(48).bool(message.isCompleted);
    }
    if (message.price !== 0) {
      writer.uint32(57).double(message.price);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Todo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTodo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.taken = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.title = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.description = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.isCompleted = reader.bool();
          continue;
        case 7:
          if (tag !== 57) {
            break;
          }

          message.price = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Todo {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      taken: isSet(object.taken) ? globalThis.String(object.taken) : "",
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      isCompleted: isSet(object.isCompleted) ? globalThis.Boolean(object.isCompleted) : false,
      price: isSet(object.price) ? globalThis.Number(object.price) : 0,
    };
  },

  toJSON(message: Todo): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.taken !== "") {
      obj.taken = message.taken;
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.isCompleted !== false) {
      obj.isCompleted = message.isCompleted;
    }
    if (message.price !== 0) {
      obj.price = message.price;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Todo>, I>>(base?: I): Todo {
    return Todo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Todo>, I>>(object: I): Todo {
    const message = createBaseTodo();
    message.id = object.id ?? "";
    message.taken = object.taken ?? "";
    message.title = object.title ?? "";
    message.userId = object.userId ?? "";
    message.description = object.description ?? "";
    message.isCompleted = object.isCompleted ?? false;
    message.price = object.price ?? 0;
    return message;
  },
};

function createBaseTodos(): Todos {
  return { todos: [] };
}

export const Todos = {
  encode(message: Todos, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.todos) {
      Todo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Todos {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTodos();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.todos.push(Todo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Todos {
    return { todos: globalThis.Array.isArray(object?.todos) ? object.todos.map((e: any) => Todo.fromJSON(e)) : [] };
  },

  toJSON(message: Todos): unknown {
    const obj: any = {};
    if (message.todos?.length) {
      obj.todos = message.todos.map((e) => Todo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Todos>, I>>(base?: I): Todos {
    return Todos.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Todos>, I>>(object: I): Todos {
    const message = createBaseTodos();
    message.todos = object.todos?.map((e) => Todo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTodoDeleteInfo(): TodoDeleteInfo {
  return { idTodo: "", userId: "" };
}

export const TodoDeleteInfo = {
  encode(message: TodoDeleteInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.idTodo !== "") {
      writer.uint32(10).string(message.idTodo);
    }
    if (message.userId !== "") {
      writer.uint32(18).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TodoDeleteInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTodoDeleteInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.idTodo = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TodoDeleteInfo {
    return {
      idTodo: isSet(object.idTodo) ? globalThis.String(object.idTodo) : "",
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
    };
  },

  toJSON(message: TodoDeleteInfo): unknown {
    const obj: any = {};
    if (message.idTodo !== "") {
      obj.idTodo = message.idTodo;
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TodoDeleteInfo>, I>>(base?: I): TodoDeleteInfo {
    return TodoDeleteInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TodoDeleteInfo>, I>>(object: I): TodoDeleteInfo {
    const message = createBaseTodoDeleteInfo();
    message.idTodo = object.idTodo ?? "";
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseTodoUpdateDto(): TodoUpdateDto {
  return { id: "", taken: "", title: "", userId: "", description: "", isCompleted: false, price: 0 };
}

export const TodoUpdateDto = {
  encode(message: TodoUpdateDto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.taken !== "") {
      writer.uint32(18).string(message.taken);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.userId !== "") {
      writer.uint32(34).string(message.userId);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.isCompleted !== false) {
      writer.uint32(48).bool(message.isCompleted);
    }
    if (message.price !== 0) {
      writer.uint32(57).double(message.price);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TodoUpdateDto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTodoUpdateDto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.taken = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.title = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.description = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.isCompleted = reader.bool();
          continue;
        case 7:
          if (tag !== 57) {
            break;
          }

          message.price = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TodoUpdateDto {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      taken: isSet(object.taken) ? globalThis.String(object.taken) : "",
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      isCompleted: isSet(object.isCompleted) ? globalThis.Boolean(object.isCompleted) : false,
      price: isSet(object.price) ? globalThis.Number(object.price) : 0,
    };
  },

  toJSON(message: TodoUpdateDto): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.taken !== "") {
      obj.taken = message.taken;
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.isCompleted !== false) {
      obj.isCompleted = message.isCompleted;
    }
    if (message.price !== 0) {
      obj.price = message.price;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TodoUpdateDto>, I>>(base?: I): TodoUpdateDto {
    return TodoUpdateDto.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TodoUpdateDto>, I>>(object: I): TodoUpdateDto {
    const message = createBaseTodoUpdateDto();
    message.id = object.id ?? "";
    message.taken = object.taken ?? "";
    message.title = object.title ?? "";
    message.userId = object.userId ?? "";
    message.description = object.description ?? "";
    message.isCompleted = object.isCompleted ?? false;
    message.price = object.price ?? 0;
    return message;
  },
};

function createBaseTodoActionResult(): TodoActionResult {
  return { message: "" };
}

export const TodoActionResult = {
  encode(message: TodoActionResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TodoActionResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTodoActionResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TodoActionResult {
    return { message: isSet(object.message) ? globalThis.String(object.message) : "" };
  },

  toJSON(message: TodoActionResult): unknown {
    const obj: any = {};
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TodoActionResult>, I>>(base?: I): TodoActionResult {
    return TodoActionResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TodoActionResult>, I>>(object: I): TodoActionResult {
    const message = createBaseTodoActionResult();
    message.message = object.message ?? "";
    return message;
  },
};

export interface TodoService {
  GetTodos(request: UserId): Promise<Todos>;
  CreateTodo(request: TodoCreateDto): Promise<Todo>;
  DeleteTodoById(request: TodoDeleteInfo): Promise<TodoActionResult>;
  UpdateTodoById(request: TodoUpdateDto): Promise<Todo>;
}

export const TodoServiceServiceName = "todoPackage.TodoService";
export class TodoServiceClientImpl implements TodoService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || TodoServiceServiceName;
    this.rpc = rpc;
    this.GetTodos = this.GetTodos.bind(this);
    this.CreateTodo = this.CreateTodo.bind(this);
    this.DeleteTodoById = this.DeleteTodoById.bind(this);
    this.UpdateTodoById = this.UpdateTodoById.bind(this);
  }
  GetTodos(request: UserId): Promise<Todos> {
    const data = UserId.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetTodos", data);
    return promise.then((data) => Todos.decode(_m0.Reader.create(data)));
  }

  CreateTodo(request: TodoCreateDto): Promise<Todo> {
    const data = TodoCreateDto.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateTodo", data);
    return promise.then((data) => Todo.decode(_m0.Reader.create(data)));
  }

  DeleteTodoById(request: TodoDeleteInfo): Promise<TodoActionResult> {
    const data = TodoDeleteInfo.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteTodoById", data);
    return promise.then((data) => TodoActionResult.decode(_m0.Reader.create(data)));
  }

  UpdateTodoById(request: TodoUpdateDto): Promise<Todo> {
    const data = TodoUpdateDto.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateTodoById", data);
    return promise.then((data) => Todo.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
