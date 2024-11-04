/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "accountingPackage";

export interface UserId {
  userId: string;
}

export interface TransactionId {
  id: string;
}

export interface TransactionCreateDto {
  from: string;
  to: string;
  amount: number;
}

export interface Transaction {
  from: string;
  to: string;
  amount: number;
  id: string;
}

export interface CreateTransactionInfo {
  from: string;
  to: string;
  amount: number;
}

export interface Transactions {
  Transactions: Transaction[];
}

export interface TransactionActionResult {
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

function createBaseTransactionId(): TransactionId {
  return { id: "" };
}

export const TransactionId = {
  encode(message: TransactionId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionId {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TransactionId {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: TransactionId): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TransactionId>, I>>(base?: I): TransactionId {
    return TransactionId.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TransactionId>, I>>(object: I): TransactionId {
    const message = createBaseTransactionId();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseTransactionCreateDto(): TransactionCreateDto {
  return { from: "", to: "", amount: 0 };
}

export const TransactionCreateDto = {
  encode(message: TransactionCreateDto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.amount !== 0) {
      writer.uint32(25).double(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionCreateDto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionCreateDto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.from = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.to = reader.string();
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.amount = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TransactionCreateDto {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      to: isSet(object.to) ? globalThis.String(object.to) : "",
      amount: isSet(object.amount) ? globalThis.Number(object.amount) : 0,
    };
  },

  toJSON(message: TransactionCreateDto): unknown {
    const obj: any = {};
    if (message.from !== "") {
      obj.from = message.from;
    }
    if (message.to !== "") {
      obj.to = message.to;
    }
    if (message.amount !== 0) {
      obj.amount = message.amount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TransactionCreateDto>, I>>(base?: I): TransactionCreateDto {
    return TransactionCreateDto.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TransactionCreateDto>, I>>(object: I): TransactionCreateDto {
    const message = createBaseTransactionCreateDto();
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.amount = object.amount ?? 0;
    return message;
  },
};

function createBaseTransaction(): Transaction {
  return { from: "", to: "", amount: 0, id: "" };
}

export const Transaction = {
  encode(message: Transaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.amount !== 0) {
      writer.uint32(25).double(message.amount);
    }
    if (message.id !== "") {
      writer.uint32(34).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Transaction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.from = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.to = reader.string();
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.amount = reader.double();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Transaction {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      to: isSet(object.to) ? globalThis.String(object.to) : "",
      amount: isSet(object.amount) ? globalThis.Number(object.amount) : 0,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
    };
  },

  toJSON(message: Transaction): unknown {
    const obj: any = {};
    if (message.from !== "") {
      obj.from = message.from;
    }
    if (message.to !== "") {
      obj.to = message.to;
    }
    if (message.amount !== 0) {
      obj.amount = message.amount;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Transaction>, I>>(base?: I): Transaction {
    return Transaction.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Transaction>, I>>(object: I): Transaction {
    const message = createBaseTransaction();
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.amount = object.amount ?? 0;
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseCreateTransactionInfo(): CreateTransactionInfo {
  return { from: "", to: "", amount: 0 };
}

export const CreateTransactionInfo = {
  encode(message: CreateTransactionInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.amount !== 0) {
      writer.uint32(25).double(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTransactionInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTransactionInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.from = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.to = reader.string();
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.amount = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateTransactionInfo {
    return {
      from: isSet(object.from) ? globalThis.String(object.from) : "",
      to: isSet(object.to) ? globalThis.String(object.to) : "",
      amount: isSet(object.amount) ? globalThis.Number(object.amount) : 0,
    };
  },

  toJSON(message: CreateTransactionInfo): unknown {
    const obj: any = {};
    if (message.from !== "") {
      obj.from = message.from;
    }
    if (message.to !== "") {
      obj.to = message.to;
    }
    if (message.amount !== 0) {
      obj.amount = message.amount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateTransactionInfo>, I>>(base?: I): CreateTransactionInfo {
    return CreateTransactionInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateTransactionInfo>, I>>(object: I): CreateTransactionInfo {
    const message = createBaseCreateTransactionInfo();
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.amount = object.amount ?? 0;
    return message;
  },
};

function createBaseTransactions(): Transactions {
  return { Transactions: [] };
}

export const Transactions = {
  encode(message: Transactions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Transactions) {
      Transaction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Transactions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Transactions.push(Transaction.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Transactions {
    return {
      Transactions: globalThis.Array.isArray(object?.Transactions)
        ? object.Transactions.map((e: any) => Transaction.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Transactions): unknown {
    const obj: any = {};
    if (message.Transactions?.length) {
      obj.Transactions = message.Transactions.map((e) => Transaction.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Transactions>, I>>(base?: I): Transactions {
    return Transactions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Transactions>, I>>(object: I): Transactions {
    const message = createBaseTransactions();
    message.Transactions = object.Transactions?.map((e) => Transaction.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTransactionActionResult(): TransactionActionResult {
  return { message: "" };
}

export const TransactionActionResult = {
  encode(message: TransactionActionResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionActionResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionActionResult();
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

  fromJSON(object: any): TransactionActionResult {
    return { message: isSet(object.message) ? globalThis.String(object.message) : "" };
  },

  toJSON(message: TransactionActionResult): unknown {
    const obj: any = {};
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TransactionActionResult>, I>>(base?: I): TransactionActionResult {
    return TransactionActionResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TransactionActionResult>, I>>(object: I): TransactionActionResult {
    const message = createBaseTransactionActionResult();
    message.message = object.message ?? "";
    return message;
  },
};

export interface AccountingService {
  GetTransactionsById(request: UserId): Promise<Transactions>;
  CreateTransaction(request: CreateTransactionInfo): Promise<TransactionId>;
  DeleteTransactionById(request: TransactionId): Promise<TransactionActionResult>;
}

export const AccountingServiceServiceName = "accountingPackage.AccountingService";
export class AccountingServiceClientImpl implements AccountingService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || AccountingServiceServiceName;
    this.rpc = rpc;
    this.GetTransactionsById = this.GetTransactionsById.bind(this);
    this.CreateTransaction = this.CreateTransaction.bind(this);
    this.DeleteTransactionById = this.DeleteTransactionById.bind(this);
  }
  GetTransactionsById(request: UserId): Promise<Transactions> {
    const data = UserId.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetTransactionsById", data);
    return promise.then((data) => Transactions.decode(_m0.Reader.create(data)));
  }

  CreateTransaction(request: CreateTransactionInfo): Promise<TransactionId> {
    const data = CreateTransactionInfo.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateTransaction", data);
    return promise.then((data) => TransactionId.decode(_m0.Reader.create(data)));
  }

  DeleteTransactionById(request: TransactionId): Promise<TransactionActionResult> {
    const data = TransactionId.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteTransactionById", data);
    return promise.then((data) => TransactionActionResult.decode(_m0.Reader.create(data)));
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
