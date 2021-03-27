/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { GrpcMessage, RecursivePartial } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
export enum MyStatus {
  Success = 0,
  Fail = 1
}
/**
 * Message implementation for storefile.UploadRequest
 */
export class UploadRequest implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UploadRequest();
    UploadRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UploadRequest) {
    _instance.name = _instance.name || '';
    _instance.file = _instance.file || '';
    _instance.data = _instance.data || new Uint8Array();
    _instance.rule = _instance.rule || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UploadRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.file = _reader.readString();
          break;
        case 3:
          _instance.data = _reader.readBytes();
          break;
        case 4:
          _instance.rule = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    UploadRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UploadRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.file) {
      _writer.writeString(2, _instance.file);
    }
    if (_instance.data && _instance.data.length) {
      _writer.writeBytes(3, _instance.data);
    }
    if (_instance.rule) {
      _writer.writeString(4, _instance.rule);
    }
  }

  private _name?: string;
  private _file?: string;
  private _data?: Uint8Array;
  private _rule?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UploadRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UploadRequest>) {
    _value = _value || {};
    this.name = _value.name;
    this.file = _value.file;
    this.data = _value.data;
    this.rule = _value.rule;
    UploadRequest.refineValues(this);
  }
  get name(): string | undefined {
    return this._name;
  }
  set name(value: string | undefined) {
    this._name = value;
  }
  get file(): string | undefined {
    return this._file;
  }
  set file(value: string | undefined) {
    this._file = value;
  }
  get data(): Uint8Array | undefined {
    return this._data;
  }
  set data(value: Uint8Array | undefined) {
    this._data = value;
  }
  get rule(): string | undefined {
    return this._rule;
  }
  set rule(value: string | undefined) {
    this._rule = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UploadRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UploadRequest.AsObject {
    return {
      name: this.name,
      file: this.file,
      data: this.data ? this.data.subarray(0) : new Uint8Array(),
      rule: this.rule
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module UploadRequest {
  /**
   * Standard JavaScript object representation for UploadRequest
   */
  export interface AsObject {
    name?: string;
    file?: string;
    data?: Uint8Array;
    rule?: string;
  }
}

/**
 * Message implementation for storefile.ItemUploadRequest
 */
export class ItemUploadRequest implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ItemUploadRequest();
    ItemUploadRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ItemUploadRequest) {
    _instance.file = _instance.file || '';
    _instance.data = _instance.data || new Uint8Array();
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ItemUploadRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.file = _reader.readString();
          break;
        case 2:
          _instance.data = _reader.readBytes();
          break;
        default:
          _reader.skipField();
      }
    }

    ItemUploadRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ItemUploadRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.file) {
      _writer.writeString(1, _instance.file);
    }
    if (_instance.data && _instance.data.length) {
      _writer.writeBytes(2, _instance.data);
    }
  }

  private _file?: string;
  private _data?: Uint8Array;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ItemUploadRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ItemUploadRequest>) {
    _value = _value || {};
    this.file = _value.file;
    this.data = _value.data;
    ItemUploadRequest.refineValues(this);
  }
  get file(): string | undefined {
    return this._file;
  }
  set file(value: string | undefined) {
    this._file = value;
  }
  get data(): Uint8Array | undefined {
    return this._data;
  }
  set data(value: Uint8Array | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ItemUploadRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ItemUploadRequest.AsObject {
    return {
      file: this.file,
      data: this.data ? this.data.subarray(0) : new Uint8Array()
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module ItemUploadRequest {
  /**
   * Standard JavaScript object representation for ItemUploadRequest
   */
  export interface AsObject {
    file?: string;
    data?: Uint8Array;
  }
}

/**
 * Message implementation for storefile.MultiUploadRequest
 */
export class MultiUploadRequest implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new MultiUploadRequest();
    MultiUploadRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: MultiUploadRequest) {
    _instance.name = _instance.name || '';
    _instance.rule = _instance.rule || '';
    _instance.items = _instance.items || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: MultiUploadRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.rule = _reader.readString();
          break;
        case 3:
          const messageInitializer3 = new ItemUploadRequest();
          _reader.readMessage(
            messageInitializer3,
            ItemUploadRequest.deserializeBinaryFromReader
          );
          (_instance.items = _instance.items || []).push(messageInitializer3);
          break;
        default:
          _reader.skipField();
      }
    }

    MultiUploadRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: MultiUploadRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.rule) {
      _writer.writeString(2, _instance.rule);
    }
    if (_instance.items && _instance.items.length) {
      _writer.writeRepeatedMessage(
        3,
        _instance.items as any,
        ItemUploadRequest.serializeBinaryToWriter
      );
    }
  }

  private _name?: string;
  private _rule?: string;
  private _items?: ItemUploadRequest[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of MultiUploadRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<MultiUploadRequest>) {
    _value = _value || {};
    this.name = _value.name;
    this.rule = _value.rule;
    this.items = (_value.items || []).map(m => new ItemUploadRequest(m));
    MultiUploadRequest.refineValues(this);
  }
  get name(): string | undefined {
    return this._name;
  }
  set name(value: string | undefined) {
    this._name = value;
  }
  get rule(): string | undefined {
    return this._rule;
  }
  set rule(value: string | undefined) {
    this._rule = value;
  }
  get items(): ItemUploadRequest[] | undefined {
    return this._items;
  }
  set items(value: ItemUploadRequest[] | undefined) {
    this._items = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    MultiUploadRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): MultiUploadRequest.AsObject {
    return {
      name: this.name,
      rule: this.rule,
      items: (this.items || []).map(m => m.toObject())
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module MultiUploadRequest {
  /**
   * Standard JavaScript object representation for MultiUploadRequest
   */
  export interface AsObject {
    name?: string;
    rule?: string;
    items?: ItemUploadRequest.AsObject[];
  }
}

/**
 * Message implementation for storefile.UploadRequestBase64
 */
export class UploadRequestBase64 implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UploadRequestBase64();
    UploadRequestBase64.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UploadRequestBase64) {
    _instance.name = _instance.name || '';
    _instance.file = _instance.file || '';
    _instance.data = _instance.data || '';
    _instance.rule = _instance.rule || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UploadRequestBase64,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.file = _reader.readString();
          break;
        case 3:
          _instance.data = _reader.readString();
          break;
        case 4:
          _instance.rule = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    UploadRequestBase64.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UploadRequestBase64,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.file) {
      _writer.writeString(2, _instance.file);
    }
    if (_instance.data) {
      _writer.writeString(3, _instance.data);
    }
    if (_instance.rule) {
      _writer.writeString(4, _instance.rule);
    }
  }

  private _name?: string;
  private _file?: string;
  private _data?: string;
  private _rule?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UploadRequestBase64 to deeply clone from
   */
  constructor(_value?: RecursivePartial<UploadRequestBase64>) {
    _value = _value || {};
    this.name = _value.name;
    this.file = _value.file;
    this.data = _value.data;
    this.rule = _value.rule;
    UploadRequestBase64.refineValues(this);
  }
  get name(): string | undefined {
    return this._name;
  }
  set name(value: string | undefined) {
    this._name = value;
  }
  get file(): string | undefined {
    return this._file;
  }
  set file(value: string | undefined) {
    this._file = value;
  }
  get data(): string | undefined {
    return this._data;
  }
  set data(value: string | undefined) {
    this._data = value;
  }
  get rule(): string | undefined {
    return this._rule;
  }
  set rule(value: string | undefined) {
    this._rule = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UploadRequestBase64.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UploadRequestBase64.AsObject {
    return {
      name: this.name,
      file: this.file,
      data: this.data,
      rule: this.rule
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module UploadRequestBase64 {
  /**
   * Standard JavaScript object representation for UploadRequestBase64
   */
  export interface AsObject {
    name?: string;
    file?: string;
    data?: string;
    rule?: string;
  }
}

/**
 * Message implementation for storefile.ItemUploadRequestBase64
 */
export class ItemUploadRequestBase64 implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ItemUploadRequestBase64();
    ItemUploadRequestBase64.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ItemUploadRequestBase64) {
    _instance.file = _instance.file || '';
    _instance.data = _instance.data || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ItemUploadRequestBase64,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.file = _reader.readString();
          break;
        case 2:
          _instance.data = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ItemUploadRequestBase64.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ItemUploadRequestBase64,
    _writer: BinaryWriter
  ) {
    if (_instance.file) {
      _writer.writeString(1, _instance.file);
    }
    if (_instance.data) {
      _writer.writeString(2, _instance.data);
    }
  }

  private _file?: string;
  private _data?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ItemUploadRequestBase64 to deeply clone from
   */
  constructor(_value?: RecursivePartial<ItemUploadRequestBase64>) {
    _value = _value || {};
    this.file = _value.file;
    this.data = _value.data;
    ItemUploadRequestBase64.refineValues(this);
  }
  get file(): string | undefined {
    return this._file;
  }
  set file(value: string | undefined) {
    this._file = value;
  }
  get data(): string | undefined {
    return this._data;
  }
  set data(value: string | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ItemUploadRequestBase64.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ItemUploadRequestBase64.AsObject {
    return {
      file: this.file,
      data: this.data
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module ItemUploadRequestBase64 {
  /**
   * Standard JavaScript object representation for ItemUploadRequestBase64
   */
  export interface AsObject {
    file?: string;
    data?: string;
  }
}

/**
 * Message implementation for storefile.MultiUploadRequestBase64
 */
export class MultiUploadRequestBase64 implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new MultiUploadRequestBase64();
    MultiUploadRequestBase64.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: MultiUploadRequestBase64) {
    _instance.name = _instance.name || '';
    _instance.rule = _instance.rule || '';
    _instance.items = _instance.items || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: MultiUploadRequestBase64,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.rule = _reader.readString();
          break;
        case 3:
          const messageInitializer3 = new ItemUploadRequestBase64();
          _reader.readMessage(
            messageInitializer3,
            ItemUploadRequestBase64.deserializeBinaryFromReader
          );
          (_instance.items = _instance.items || []).push(messageInitializer3);
          break;
        default:
          _reader.skipField();
      }
    }

    MultiUploadRequestBase64.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: MultiUploadRequestBase64,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.rule) {
      _writer.writeString(2, _instance.rule);
    }
    if (_instance.items && _instance.items.length) {
      _writer.writeRepeatedMessage(
        3,
        _instance.items as any,
        ItemUploadRequestBase64.serializeBinaryToWriter
      );
    }
  }

  private _name?: string;
  private _rule?: string;
  private _items?: ItemUploadRequestBase64[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of MultiUploadRequestBase64 to deeply clone from
   */
  constructor(_value?: RecursivePartial<MultiUploadRequestBase64>) {
    _value = _value || {};
    this.name = _value.name;
    this.rule = _value.rule;
    this.items = (_value.items || []).map(m => new ItemUploadRequestBase64(m));
    MultiUploadRequestBase64.refineValues(this);
  }
  get name(): string | undefined {
    return this._name;
  }
  set name(value: string | undefined) {
    this._name = value;
  }
  get rule(): string | undefined {
    return this._rule;
  }
  set rule(value: string | undefined) {
    this._rule = value;
  }
  get items(): ItemUploadRequestBase64[] | undefined {
    return this._items;
  }
  set items(value: ItemUploadRequestBase64[] | undefined) {
    this._items = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    MultiUploadRequestBase64.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): MultiUploadRequestBase64.AsObject {
    return {
      name: this.name,
      rule: this.rule,
      items: (this.items || []).map(m => m.toObject())
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module MultiUploadRequestBase64 {
  /**
   * Standard JavaScript object representation for MultiUploadRequestBase64
   */
  export interface AsObject {
    name?: string;
    rule?: string;
    items?: ItemUploadRequestBase64.AsObject[];
  }
}

/**
 * Message implementation for storefile.UploadRely
 */
export class UploadRely implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UploadRely();
    UploadRely.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UploadRely) {
    _instance.status = _instance.status || 0;
    _instance.code = _instance.code || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UploadRely,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.status = _reader.readEnum();
          break;
        case 2:
          _instance.code = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    UploadRely.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: UploadRely, _writer: BinaryWriter) {
    if (_instance.status) {
      _writer.writeEnum(1, _instance.status);
    }
    if (_instance.code) {
      _writer.writeString(2, _instance.code);
    }
  }

  private _status?: MyStatus;
  private _code?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UploadRely to deeply clone from
   */
  constructor(_value?: RecursivePartial<UploadRely>) {
    _value = _value || {};
    this.status = _value.status;
    this.code = _value.code;
    UploadRely.refineValues(this);
  }
  get status(): MyStatus | undefined {
    return this._status;
  }
  set status(value: MyStatus | undefined) {
    this._status = value;
  }
  get code(): string | undefined {
    return this._code;
  }
  set code(value: string | undefined) {
    this._code = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UploadRely.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UploadRely.AsObject {
    return {
      status: this.status,
      code: this.code
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module UploadRely {
  /**
   * Standard JavaScript object representation for UploadRely
   */
  export interface AsObject {
    status?: MyStatus;
    code?: string;
  }
}

/**
 * Message implementation for storefile.ItemUploadRely
 */
export class ItemUploadRely implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ItemUploadRely();
    ItemUploadRely.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ItemUploadRely) {
    _instance.name = _instance.name || '';
    _instance.code = _instance.code || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ItemUploadRely,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.code = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ItemUploadRely.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ItemUploadRely,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.code) {
      _writer.writeString(2, _instance.code);
    }
  }

  private _name?: string;
  private _code?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ItemUploadRely to deeply clone from
   */
  constructor(_value?: RecursivePartial<ItemUploadRely>) {
    _value = _value || {};
    this.name = _value.name;
    this.code = _value.code;
    ItemUploadRely.refineValues(this);
  }
  get name(): string | undefined {
    return this._name;
  }
  set name(value: string | undefined) {
    this._name = value;
  }
  get code(): string | undefined {
    return this._code;
  }
  set code(value: string | undefined) {
    this._code = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ItemUploadRely.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ItemUploadRely.AsObject {
    return {
      name: this.name,
      code: this.code
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module ItemUploadRely {
  /**
   * Standard JavaScript object representation for ItemUploadRely
   */
  export interface AsObject {
    name?: string;
    code?: string;
  }
}

/**
 * Message implementation for storefile.MultiUploadRely
 */
export class MultiUploadRely implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new MultiUploadRely();
    MultiUploadRely.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: MultiUploadRely) {
    _instance.status = _instance.status || 0;
    _instance.items = _instance.items || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: MultiUploadRely,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.status = _reader.readEnum();
          break;
        case 2:
          const messageInitializer2 = new ItemUploadRely();
          _reader.readMessage(
            messageInitializer2,
            ItemUploadRely.deserializeBinaryFromReader
          );
          (_instance.items = _instance.items || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    MultiUploadRely.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: MultiUploadRely,
    _writer: BinaryWriter
  ) {
    if (_instance.status) {
      _writer.writeEnum(1, _instance.status);
    }
    if (_instance.items && _instance.items.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.items as any,
        ItemUploadRely.serializeBinaryToWriter
      );
    }
  }

  private _status?: MyStatus;
  private _items?: ItemUploadRely[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of MultiUploadRely to deeply clone from
   */
  constructor(_value?: RecursivePartial<MultiUploadRely>) {
    _value = _value || {};
    this.status = _value.status;
    this.items = (_value.items || []).map(m => new ItemUploadRely(m));
    MultiUploadRely.refineValues(this);
  }
  get status(): MyStatus | undefined {
    return this._status;
  }
  set status(value: MyStatus | undefined) {
    this._status = value;
  }
  get items(): ItemUploadRely[] | undefined {
    return this._items;
  }
  set items(value: ItemUploadRely[] | undefined) {
    this._items = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    MultiUploadRely.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): MultiUploadRely.AsObject {
    return {
      status: this.status,
      items: (this.items || []).map(m => m.toObject())
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module MultiUploadRely {
  /**
   * Standard JavaScript object representation for MultiUploadRely
   */
  export interface AsObject {
    status?: MyStatus;
    items?: ItemUploadRely.AsObject[];
  }
}

/**
 * Message implementation for storefile.DownloadRequest
 */
export class DownloadRequest implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DownloadRequest();
    DownloadRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DownloadRequest) {
    _instance.name = _instance.name || '';
    _instance.code = _instance.code || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DownloadRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.code = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    DownloadRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DownloadRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.code) {
      _writer.writeString(2, _instance.code);
    }
  }

  private _name?: string;
  private _code?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DownloadRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DownloadRequest>) {
    _value = _value || {};
    this.name = _value.name;
    this.code = _value.code;
    DownloadRequest.refineValues(this);
  }
  get name(): string | undefined {
    return this._name;
  }
  set name(value: string | undefined) {
    this._name = value;
  }
  get code(): string | undefined {
    return this._code;
  }
  set code(value: string | undefined) {
    this._code = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DownloadRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DownloadRequest.AsObject {
    return {
      name: this.name,
      code: this.code
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module DownloadRequest {
  /**
   * Standard JavaScript object representation for DownloadRequest
   */
  export interface AsObject {
    name?: string;
    code?: string;
  }
}

/**
 * Message implementation for storefile.MultiDownloadRequest
 */
export class MultiDownloadRequest implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new MultiDownloadRequest();
    MultiDownloadRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: MultiDownloadRequest) {
    _instance.name = _instance.name || '';
    _instance.code = _instance.code || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: MultiDownloadRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          (_instance.code = _instance.code || []).push(_reader.readString());
          break;
        default:
          _reader.skipField();
      }
    }

    MultiDownloadRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: MultiDownloadRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.code && _instance.code.length) {
      _writer.writeRepeatedString(2, _instance.code);
    }
  }

  private _name?: string;
  private _code?: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of MultiDownloadRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<MultiDownloadRequest>) {
    _value = _value || {};
    this.name = _value.name;
    this.code = (_value.code || []).slice();
    MultiDownloadRequest.refineValues(this);
  }
  get name(): string | undefined {
    return this._name;
  }
  set name(value: string | undefined) {
    this._name = value;
  }
  get code(): string[] | undefined {
    return this._code;
  }
  set code(value: string[] | undefined) {
    this._code = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    MultiDownloadRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): MultiDownloadRequest.AsObject {
    return {
      name: this.name,
      code: (this.code || []).slice()
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module MultiDownloadRequest {
  /**
   * Standard JavaScript object representation for MultiDownloadRequest
   */
  export interface AsObject {
    name?: string;
    code?: string[];
  }
}

/**
 * Message implementation for storefile.DownloadRely
 */
export class DownloadRely implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DownloadRely();
    DownloadRely.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DownloadRely) {
    _instance.status = _instance.status || 0;
    _instance.file = _instance.file || '';
    _instance.data = _instance.data || new Uint8Array();
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DownloadRely,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.status = _reader.readEnum();
          break;
        case 2:
          _instance.file = _reader.readString();
          break;
        case 3:
          _instance.data = _reader.readBytes();
          break;
        default:
          _reader.skipField();
      }
    }

    DownloadRely.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DownloadRely,
    _writer: BinaryWriter
  ) {
    if (_instance.status) {
      _writer.writeEnum(1, _instance.status);
    }
    if (_instance.file) {
      _writer.writeString(2, _instance.file);
    }
    if (_instance.data && _instance.data.length) {
      _writer.writeBytes(3, _instance.data);
    }
  }

  private _status?: MyStatus;
  private _file?: string;
  private _data?: Uint8Array;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DownloadRely to deeply clone from
   */
  constructor(_value?: RecursivePartial<DownloadRely>) {
    _value = _value || {};
    this.status = _value.status;
    this.file = _value.file;
    this.data = _value.data;
    DownloadRely.refineValues(this);
  }
  get status(): MyStatus | undefined {
    return this._status;
  }
  set status(value: MyStatus | undefined) {
    this._status = value;
  }
  get file(): string | undefined {
    return this._file;
  }
  set file(value: string | undefined) {
    this._file = value;
  }
  get data(): Uint8Array | undefined {
    return this._data;
  }
  set data(value: Uint8Array | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DownloadRely.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DownloadRely.AsObject {
    return {
      status: this.status,
      file: this.file,
      data: this.data ? this.data.subarray(0) : new Uint8Array()
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module DownloadRely {
  /**
   * Standard JavaScript object representation for DownloadRely
   */
  export interface AsObject {
    status?: MyStatus;
    file?: string;
    data?: Uint8Array;
  }
}

/**
 * Message implementation for storefile.ItemDownloadRely
 */
export class ItemDownloadRely implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ItemDownloadRely();
    ItemDownloadRely.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ItemDownloadRely) {
    _instance.file = _instance.file || '';
    _instance.data = _instance.data || new Uint8Array();
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ItemDownloadRely,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.file = _reader.readString();
          break;
        case 2:
          _instance.data = _reader.readBytes();
          break;
        default:
          _reader.skipField();
      }
    }

    ItemDownloadRely.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ItemDownloadRely,
    _writer: BinaryWriter
  ) {
    if (_instance.file) {
      _writer.writeString(1, _instance.file);
    }
    if (_instance.data && _instance.data.length) {
      _writer.writeBytes(2, _instance.data);
    }
  }

  private _file?: string;
  private _data?: Uint8Array;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ItemDownloadRely to deeply clone from
   */
  constructor(_value?: RecursivePartial<ItemDownloadRely>) {
    _value = _value || {};
    this.file = _value.file;
    this.data = _value.data;
    ItemDownloadRely.refineValues(this);
  }
  get file(): string | undefined {
    return this._file;
  }
  set file(value: string | undefined) {
    this._file = value;
  }
  get data(): Uint8Array | undefined {
    return this._data;
  }
  set data(value: Uint8Array | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ItemDownloadRely.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ItemDownloadRely.AsObject {
    return {
      file: this.file,
      data: this.data ? this.data.subarray(0) : new Uint8Array()
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module ItemDownloadRely {
  /**
   * Standard JavaScript object representation for ItemDownloadRely
   */
  export interface AsObject {
    file?: string;
    data?: Uint8Array;
  }
}

/**
 * Message implementation for storefile.MultiDownloadRely
 */
export class MultiDownloadRely implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new MultiDownloadRely();
    MultiDownloadRely.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: MultiDownloadRely) {
    _instance.status = _instance.status || 0;
    _instance.items = _instance.items || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: MultiDownloadRely,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.status = _reader.readEnum();
          break;
        case 2:
          const messageInitializer2 = new ItemDownloadRely();
          _reader.readMessage(
            messageInitializer2,
            ItemDownloadRely.deserializeBinaryFromReader
          );
          (_instance.items = _instance.items || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    MultiDownloadRely.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: MultiDownloadRely,
    _writer: BinaryWriter
  ) {
    if (_instance.status) {
      _writer.writeEnum(1, _instance.status);
    }
    if (_instance.items && _instance.items.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.items as any,
        ItemDownloadRely.serializeBinaryToWriter
      );
    }
  }

  private _status?: MyStatus;
  private _items?: ItemDownloadRely[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of MultiDownloadRely to deeply clone from
   */
  constructor(_value?: RecursivePartial<MultiDownloadRely>) {
    _value = _value || {};
    this.status = _value.status;
    this.items = (_value.items || []).map(m => new ItemDownloadRely(m));
    MultiDownloadRely.refineValues(this);
  }
  get status(): MyStatus | undefined {
    return this._status;
  }
  set status(value: MyStatus | undefined) {
    this._status = value;
  }
  get items(): ItemDownloadRely[] | undefined {
    return this._items;
  }
  set items(value: ItemDownloadRely[] | undefined) {
    this._items = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    MultiDownloadRely.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): MultiDownloadRely.AsObject {
    return {
      status: this.status,
      items: (this.items || []).map(m => m.toObject())
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module MultiDownloadRely {
  /**
   * Standard JavaScript object representation for MultiDownloadRely
   */
  export interface AsObject {
    status?: MyStatus;
    items?: ItemDownloadRely.AsObject[];
  }
}

/**
 * Message implementation for storefile.DownloadBase64Rely
 */
export class DownloadBase64Rely implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DownloadBase64Rely();
    DownloadBase64Rely.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DownloadBase64Rely) {
    _instance.status = _instance.status || 0;
    _instance.file = _instance.file || '';
    _instance.data = _instance.data || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DownloadBase64Rely,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.status = _reader.readEnum();
          break;
        case 2:
          _instance.file = _reader.readString();
          break;
        case 3:
          _instance.data = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    DownloadBase64Rely.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DownloadBase64Rely,
    _writer: BinaryWriter
  ) {
    if (_instance.status) {
      _writer.writeEnum(1, _instance.status);
    }
    if (_instance.file) {
      _writer.writeString(2, _instance.file);
    }
    if (_instance.data) {
      _writer.writeString(3, _instance.data);
    }
  }

  private _status?: MyStatus;
  private _file?: string;
  private _data?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DownloadBase64Rely to deeply clone from
   */
  constructor(_value?: RecursivePartial<DownloadBase64Rely>) {
    _value = _value || {};
    this.status = _value.status;
    this.file = _value.file;
    this.data = _value.data;
    DownloadBase64Rely.refineValues(this);
  }
  get status(): MyStatus | undefined {
    return this._status;
  }
  set status(value: MyStatus | undefined) {
    this._status = value;
  }
  get file(): string | undefined {
    return this._file;
  }
  set file(value: string | undefined) {
    this._file = value;
  }
  get data(): string | undefined {
    return this._data;
  }
  set data(value: string | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DownloadBase64Rely.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DownloadBase64Rely.AsObject {
    return {
      status: this.status,
      file: this.file,
      data: this.data
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module DownloadBase64Rely {
  /**
   * Standard JavaScript object representation for DownloadBase64Rely
   */
  export interface AsObject {
    status?: MyStatus;
    file?: string;
    data?: string;
  }
}

/**
 * Message implementation for storefile.ItemDownloadBase64Rely
 */
export class ItemDownloadBase64Rely implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ItemDownloadBase64Rely();
    ItemDownloadBase64Rely.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ItemDownloadBase64Rely) {
    _instance.file = _instance.file || '';
    _instance.data = _instance.data || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ItemDownloadBase64Rely,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.file = _reader.readString();
          break;
        case 2:
          _instance.data = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ItemDownloadBase64Rely.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ItemDownloadBase64Rely,
    _writer: BinaryWriter
  ) {
    if (_instance.file) {
      _writer.writeString(1, _instance.file);
    }
    if (_instance.data) {
      _writer.writeString(2, _instance.data);
    }
  }

  private _file?: string;
  private _data?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ItemDownloadBase64Rely to deeply clone from
   */
  constructor(_value?: RecursivePartial<ItemDownloadBase64Rely>) {
    _value = _value || {};
    this.file = _value.file;
    this.data = _value.data;
    ItemDownloadBase64Rely.refineValues(this);
  }
  get file(): string | undefined {
    return this._file;
  }
  set file(value: string | undefined) {
    this._file = value;
  }
  get data(): string | undefined {
    return this._data;
  }
  set data(value: string | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ItemDownloadBase64Rely.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ItemDownloadBase64Rely.AsObject {
    return {
      file: this.file,
      data: this.data
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module ItemDownloadBase64Rely {
  /**
   * Standard JavaScript object representation for ItemDownloadBase64Rely
   */
  export interface AsObject {
    file?: string;
    data?: string;
  }
}

/**
 * Message implementation for storefile.MultiDownloadBase64Rely
 */
export class MultiDownloadBase64Rely implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new MultiDownloadBase64Rely();
    MultiDownloadBase64Rely.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: MultiDownloadBase64Rely) {
    _instance.status = _instance.status || 0;
    _instance.items = _instance.items || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: MultiDownloadBase64Rely,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.status = _reader.readEnum();
          break;
        case 2:
          const messageInitializer2 = new ItemDownloadBase64Rely();
          _reader.readMessage(
            messageInitializer2,
            ItemDownloadBase64Rely.deserializeBinaryFromReader
          );
          (_instance.items = _instance.items || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    MultiDownloadBase64Rely.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: MultiDownloadBase64Rely,
    _writer: BinaryWriter
  ) {
    if (_instance.status) {
      _writer.writeEnum(1, _instance.status);
    }
    if (_instance.items && _instance.items.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.items as any,
        ItemDownloadBase64Rely.serializeBinaryToWriter
      );
    }
  }

  private _status?: MyStatus;
  private _items?: ItemDownloadBase64Rely[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of MultiDownloadBase64Rely to deeply clone from
   */
  constructor(_value?: RecursivePartial<MultiDownloadBase64Rely>) {
    _value = _value || {};
    this.status = _value.status;
    this.items = (_value.items || []).map(m => new ItemDownloadBase64Rely(m));
    MultiDownloadBase64Rely.refineValues(this);
  }
  get status(): MyStatus | undefined {
    return this._status;
  }
  set status(value: MyStatus | undefined) {
    this._status = value;
  }
  get items(): ItemDownloadBase64Rely[] | undefined {
    return this._items;
  }
  set items(value: ItemDownloadBase64Rely[] | undefined) {
    this._items = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    MultiDownloadBase64Rely.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): MultiDownloadBase64Rely.AsObject {
    return {
      status: this.status,
      items: (this.items || []).map(m => m.toObject())
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module MultiDownloadBase64Rely {
  /**
   * Standard JavaScript object representation for MultiDownloadBase64Rely
   */
  export interface AsObject {
    status?: MyStatus;
    items?: ItemDownloadBase64Rely.AsObject[];
  }
}
