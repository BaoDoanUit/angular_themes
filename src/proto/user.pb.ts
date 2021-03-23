/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { GrpcMessage, RecursivePartial } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
export enum ResponseState {
  SUCCESS = 0,
  FAIL = 1
}
export enum DeviceState {
  ONLINE = 0,
  OFFLINE = 1
}
/**
 * Message implementation for user.Response
 */
export class Response implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Response();
    Response.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Response) {
    _instance.state = _instance.state || 0;
    _instance.message = _instance.message || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Response,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.state = _reader.readEnum();
          break;
        case 2:
          _instance.message = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    Response.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Response, _writer: BinaryWriter) {
    if (_instance.state) {
      _writer.writeEnum(1, _instance.state);
    }
    if (_instance.message) {
      _writer.writeString(2, _instance.message);
    }
  }

  private _state?: ResponseState;
  private _message?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Response to deeply clone from
   */
  constructor(_value?: RecursivePartial<Response>) {
    _value = _value || {};
    this.state = _value.state;
    this.message = _value.message;
    Response.refineValues(this);
  }
  get state(): ResponseState | undefined {
    return this._state;
  }
  set state(value: ResponseState | undefined) {
    this._state = value;
  }
  get message(): string | undefined {
    return this._message;
  }
  set message(value: string | undefined) {
    this._message = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Response.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Response.AsObject {
    return {
      state: this.state,
      message: this.message
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
export module Response {
  /**
   * Standard JavaScript object representation for Response
   */
  export interface AsObject {
    state?: ResponseState;
    message?: string;
  }
}

/**
 * Message implementation for user.UserRequest
 */
export class UserRequest implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UserRequest();
    UserRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UserRequest) {
    _instance.username = _instance.username || '';
    _instance.password = _instance.password || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UserRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.username = _reader.readString();
          break;
        case 2:
          _instance.password = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    UserRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UserRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.username) {
      _writer.writeString(1, _instance.username);
    }
    if (_instance.password) {
      _writer.writeString(2, _instance.password);
    }
  }

  private _username?: string;
  private _password?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UserRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UserRequest>) {
    _value = _value || {};
    this.username = _value.username;
    this.password = _value.password;
    UserRequest.refineValues(this);
  }
  get username(): string | undefined {
    return this._username;
  }
  set username(value: string | undefined) {
    this._username = value;
  }
  get password(): string | undefined {
    return this._password;
  }
  set password(value: string | undefined) {
    this._password = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UserRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UserRequest.AsObject {
    return {
      username: this.username,
      password: this.password
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
export module UserRequest {
  /**
   * Standard JavaScript object representation for UserRequest
   */
  export interface AsObject {
    username?: string;
    password?: string;
  }
}

/**
 * Message implementation for user.UserInfo
 */
export class UserInfo implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UserInfo();
    UserInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UserInfo) {
    _instance.id = _instance.id || 0;
    _instance.username = _instance.username || '';
    _instance.email = _instance.email || '';
    _instance.description = _instance.description || '';
    _instance.codegroup = _instance.codegroup || '';
    _instance.codeuser = _instance.codeuser || '';
    _instance.fullName = _instance.fullName || '';
    _instance.roleid = _instance.roleid || 0;
    _instance.password = _instance.password || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UserInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readInt32();
          break;
        case 2:
          _instance.username = _reader.readString();
          break;
        case 3:
          _instance.email = _reader.readString();
          break;
        case 4:
          _instance.description = _reader.readString();
          break;
        case 5:
          _instance.codegroup = _reader.readString();
          break;
        case 6:
          _instance.codeuser = _reader.readString();
          break;
        case 7:
          _instance.fullName = _reader.readString();
          break;
        case 8:
          _instance.roleid = _reader.readInt32();
          break;
        case 9:
          _instance.password = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    UserInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: UserInfo, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeInt32(1, _instance.id);
    }
    if (_instance.username) {
      _writer.writeString(2, _instance.username);
    }
    if (_instance.email) {
      _writer.writeString(3, _instance.email);
    }
    if (_instance.description) {
      _writer.writeString(4, _instance.description);
    }
    if (_instance.codegroup) {
      _writer.writeString(5, _instance.codegroup);
    }
    if (_instance.codeuser) {
      _writer.writeString(6, _instance.codeuser);
    }
    if (_instance.fullName) {
      _writer.writeString(7, _instance.fullName);
    }
    if (_instance.roleid) {
      _writer.writeInt32(8, _instance.roleid);
    }
    if (_instance.password) {
      _writer.writeString(9, _instance.password);
    }
  }

  private _id?: number;
  private _username?: string;
  private _email?: string;
  private _description?: string;
  private _codegroup?: string;
  private _codeuser?: string;
  private _fullName?: string;
  private _roleid?: number;
  private _password?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UserInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<UserInfo>) {
    _value = _value || {};
    this.id = _value.id;
    this.username = _value.username;
    this.email = _value.email;
    this.description = _value.description;
    this.codegroup = _value.codegroup;
    this.codeuser = _value.codeuser;
    this.fullName = _value.fullName;
    this.roleid = _value.roleid;
    this.password = _value.password;
    UserInfo.refineValues(this);
  }
  get id(): number | undefined {
    return this._id;
  }
  set id(value: number | undefined) {
    this._id = value;
  }
  get username(): string | undefined {
    return this._username;
  }
  set username(value: string | undefined) {
    this._username = value;
  }
  get email(): string | undefined {
    return this._email;
  }
  set email(value: string | undefined) {
    this._email = value;
  }
  get description(): string | undefined {
    return this._description;
  }
  set description(value: string | undefined) {
    this._description = value;
  }
  get codegroup(): string | undefined {
    return this._codegroup;
  }
  set codegroup(value: string | undefined) {
    this._codegroup = value;
  }
  get codeuser(): string | undefined {
    return this._codeuser;
  }
  set codeuser(value: string | undefined) {
    this._codeuser = value;
  }
  get fullName(): string | undefined {
    return this._fullName;
  }
  set fullName(value: string | undefined) {
    this._fullName = value;
  }
  get roleid(): number | undefined {
    return this._roleid;
  }
  set roleid(value: number | undefined) {
    this._roleid = value;
  }
  get password(): string | undefined {
    return this._password;
  }
  set password(value: string | undefined) {
    this._password = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UserInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UserInfo.AsObject {
    return {
      id: this.id,
      username: this.username,
      email: this.email,
      description: this.description,
      codegroup: this.codegroup,
      codeuser: this.codeuser,
      fullName: this.fullName,
      roleid: this.roleid,
      password: this.password
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
export module UserInfo {
  /**
   * Standard JavaScript object representation for UserInfo
   */
  export interface AsObject {
    id?: number;
    username?: string;
    email?: string;
    description?: string;
    codegroup?: string;
    codeuser?: string;
    fullName?: string;
    roleid?: number;
    password?: string;
  }
}

/**
 * Message implementation for user.UserReply
 */
export class UserReply implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UserReply();
    UserReply.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UserReply) {
    _instance.response = _instance.response || undefined;
    _instance.info = _instance.info || undefined;
    _instance.menus = _instance.menus || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UserReply,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.response = new Response();
          _reader.readMessage(
            _instance.response,
            Response.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.info = new UserInfo();
          _reader.readMessage(
            _instance.info,
            UserInfo.deserializeBinaryFromReader
          );
          break;
        case 3:
          const messageInitializer3 = new MenuInfo();
          _reader.readMessage(
            messageInitializer3,
            MenuInfo.deserializeBinaryFromReader
          );
          (_instance.menus = _instance.menus || []).push(messageInitializer3);
          break;
        default:
          _reader.skipField();
      }
    }

    UserReply.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: UserReply, _writer: BinaryWriter) {
    if (_instance.response) {
      _writer.writeMessage(
        1,
        _instance.response as any,
        Response.serializeBinaryToWriter
      );
    }
    if (_instance.info) {
      _writer.writeMessage(
        2,
        _instance.info as any,
        UserInfo.serializeBinaryToWriter
      );
    }
    if (_instance.menus && _instance.menus.length) {
      _writer.writeRepeatedMessage(
        3,
        _instance.menus as any,
        MenuInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _info?: UserInfo;
  private _menus?: MenuInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UserReply to deeply clone from
   */
  constructor(_value?: RecursivePartial<UserReply>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.info = _value.info ? new UserInfo(_value.info) : undefined;
    this.menus = (_value.menus || []).map(m => new MenuInfo(m));
    UserReply.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get info(): UserInfo | undefined {
    return this._info;
  }
  set info(value: UserInfo | undefined) {
    this._info = value;
  }
  get menus(): MenuInfo[] | undefined {
    return this._menus;
  }
  set menus(value: MenuInfo[] | undefined) {
    this._menus = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UserReply.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UserReply.AsObject {
    return {
      response: this.response ? this.response.toObject() : undefined,
      info: this.info ? this.info.toObject() : undefined,
      menus: (this.menus || []).map(m => m.toObject())
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
export module UserReply {
  /**
   * Standard JavaScript object representation for UserReply
   */
  export interface AsObject {
    response?: Response.AsObject;
    info?: UserInfo.AsObject;
    menus?: MenuInfo.AsObject[];
  }
}

/**
 * Message implementation for user.MenuInfo
 */
export class MenuInfo implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new MenuInfo();
    MenuInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: MenuInfo) {
    _instance.id = _instance.id || 0;
    _instance.name = _instance.name || '';
    _instance.link = _instance.link || '';
    _instance.icon = _instance.icon || '';
    _instance.index = _instance.index || 0;
    _instance.description = _instance.description || '';
    _instance.active = _instance.active || 0;
    _instance.iconMenu = _instance.iconMenu || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: MenuInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readInt32();
          break;
        case 2:
          _instance.name = _reader.readString();
          break;
        case 3:
          _instance.link = _reader.readString();
          break;
        case 4:
          _instance.icon = _reader.readString();
          break;
        case 5:
          _instance.index = _reader.readInt32();
          break;
        case 6:
          _instance.description = _reader.readString();
          break;
        case 7:
          _instance.active = _reader.readInt32();
          break;
        case 8:
          _instance.iconMenu = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    MenuInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: MenuInfo, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeInt32(1, _instance.id);
    }
    if (_instance.name) {
      _writer.writeString(2, _instance.name);
    }
    if (_instance.link) {
      _writer.writeString(3, _instance.link);
    }
    if (_instance.icon) {
      _writer.writeString(4, _instance.icon);
    }
    if (_instance.index) {
      _writer.writeInt32(5, _instance.index);
    }
    if (_instance.description) {
      _writer.writeString(6, _instance.description);
    }
    if (_instance.active) {
      _writer.writeInt32(7, _instance.active);
    }
    if (_instance.iconMenu) {
      _writer.writeString(8, _instance.iconMenu);
    }
  }

  private _id?: number;
  private _name?: string;
  private _link?: string;
  private _icon?: string;
  private _index?: number;
  private _description?: string;
  private _active?: number;
  private _iconMenu?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of MenuInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<MenuInfo>) {
    _value = _value || {};
    this.id = _value.id;
    this.name = _value.name;
    this.link = _value.link;
    this.icon = _value.icon;
    this.index = _value.index;
    this.description = _value.description;
    this.active = _value.active;
    this.iconMenu = _value.iconMenu;
    MenuInfo.refineValues(this);
  }
  get id(): number | undefined {
    return this._id;
  }
  set id(value: number | undefined) {
    this._id = value;
  }
  get name(): string | undefined {
    return this._name;
  }
  set name(value: string | undefined) {
    this._name = value;
  }
  get link(): string | undefined {
    return this._link;
  }
  set link(value: string | undefined) {
    this._link = value;
  }
  get icon(): string | undefined {
    return this._icon;
  }
  set icon(value: string | undefined) {
    this._icon = value;
  }
  get index(): number | undefined {
    return this._index;
  }
  set index(value: number | undefined) {
    this._index = value;
  }
  get description(): string | undefined {
    return this._description;
  }
  set description(value: string | undefined) {
    this._description = value;
  }
  get active(): number | undefined {
    return this._active;
  }
  set active(value: number | undefined) {
    this._active = value;
  }
  get iconMenu(): string | undefined {
    return this._iconMenu;
  }
  set iconMenu(value: string | undefined) {
    this._iconMenu = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    MenuInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): MenuInfo.AsObject {
    return {
      id: this.id,
      name: this.name,
      link: this.link,
      icon: this.icon,
      index: this.index,
      description: this.description,
      active: this.active,
      iconMenu: this.iconMenu
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
export module MenuInfo {
  /**
   * Standard JavaScript object representation for MenuInfo
   */
  export interface AsObject {
    id?: number;
    name?: string;
    link?: string;
    icon?: string;
    index?: number;
    description?: string;
    active?: number;
    iconMenu?: string;
  }
}

/**
 * Message implementation for user.DeviceRequest
 */
export class DeviceRequest implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeviceRequest();
    DeviceRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeviceRequest) {
    _instance.groupCode = _instance.groupCode || '';
    _instance.deviceCode = _instance.deviceCode || '';
    _instance.roleId = _instance.roleId || 0;
    _instance.state = _instance.state || 0;
    _instance.areaCode = _instance.areaCode || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeviceRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.groupCode = _reader.readString();
          break;
        case 2:
          _instance.deviceCode = _reader.readString();
          break;
        case 3:
          _instance.roleId = _reader.readInt32();
          break;
        case 4:
          _instance.state = _reader.readEnum();
          break;
        case 5:
          _instance.areaCode = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    DeviceRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeviceRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.groupCode) {
      _writer.writeString(1, _instance.groupCode);
    }
    if (_instance.deviceCode) {
      _writer.writeString(2, _instance.deviceCode);
    }
    if (_instance.roleId) {
      _writer.writeInt32(3, _instance.roleId);
    }
    if (_instance.state) {
      _writer.writeEnum(4, _instance.state);
    }
    if (_instance.areaCode) {
      _writer.writeString(5, _instance.areaCode);
    }
  }

  private _groupCode?: string;
  private _deviceCode?: string;
  private _roleId?: number;
  private _state?: DeviceState;
  private _areaCode?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeviceRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeviceRequest>) {
    _value = _value || {};
    this.groupCode = _value.groupCode;
    this.deviceCode = _value.deviceCode;
    this.roleId = _value.roleId;
    this.state = _value.state;
    this.areaCode = _value.areaCode;
    DeviceRequest.refineValues(this);
  }
  get groupCode(): string | undefined {
    return this._groupCode;
  }
  set groupCode(value: string | undefined) {
    this._groupCode = value;
  }
  get deviceCode(): string | undefined {
    return this._deviceCode;
  }
  set deviceCode(value: string | undefined) {
    this._deviceCode = value;
  }
  get roleId(): number | undefined {
    return this._roleId;
  }
  set roleId(value: number | undefined) {
    this._roleId = value;
  }
  get state(): DeviceState | undefined {
    return this._state;
  }
  set state(value: DeviceState | undefined) {
    this._state = value;
  }
  get areaCode(): string | undefined {
    return this._areaCode;
  }
  set areaCode(value: string | undefined) {
    this._areaCode = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeviceRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeviceRequest.AsObject {
    return {
      groupCode: this.groupCode,
      deviceCode: this.deviceCode,
      roleId: this.roleId,
      state: this.state,
      areaCode: this.areaCode
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
export module DeviceRequest {
  /**
   * Standard JavaScript object representation for DeviceRequest
   */
  export interface AsObject {
    groupCode?: string;
    deviceCode?: string;
    roleId?: number;
    state?: DeviceState;
    areaCode?: string;
  }
}

/**
 * Message implementation for user.DeviceReply
 */
export class DeviceReply implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeviceReply();
    DeviceReply.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeviceReply) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeviceReply,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.response = new Response();
          _reader.readMessage(
            _instance.response,
            Response.deserializeBinaryFromReader
          );
          break;
        case 2:
          const messageInitializer2 = new DeviceInfo();
          _reader.readMessage(
            messageInitializer2,
            DeviceInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    DeviceReply.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeviceReply,
    _writer: BinaryWriter
  ) {
    if (_instance.response) {
      _writer.writeMessage(
        1,
        _instance.response as any,
        Response.serializeBinaryToWriter
      );
    }
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.data as any,
        DeviceInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: DeviceInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeviceReply to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeviceReply>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new DeviceInfo(m));
    DeviceReply.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): DeviceInfo[] | undefined {
    return this._data;
  }
  set data(value: DeviceInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeviceReply.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeviceReply.AsObject {
    return {
      response: this.response ? this.response.toObject() : undefined,
      data: (this.data || []).map(m => m.toObject())
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
export module DeviceReply {
  /**
   * Standard JavaScript object representation for DeviceReply
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: DeviceInfo.AsObject[];
  }
}

/**
 * Message implementation for user.DeviceInfo
 */
export class DeviceInfo implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeviceInfo();
    DeviceInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeviceInfo) {
    _instance.idDevice = _instance.idDevice || 0;
    _instance.codeDevice = _instance.codeDevice || '';
    _instance.codeGroup = _instance.codeGroup || '';
    _instance.codeArea = _instance.codeArea || '';
    _instance.description = _instance.description || '';
    _instance.mac = _instance.mac || '';
    _instance.username = _instance.username || '';
    _instance.password = _instance.password || '';
    _instance.charging = _instance.charging || false;
    _instance.latitude = _instance.latitude || 0;
    _instance.longitude = _instance.longitude || 0;
    _instance.percentBattery = _instance.percentBattery || 0;
    _instance.timeBegin = _instance.timeBegin || '';
    _instance.timeEnd = _instance.timeEnd || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeviceInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.idDevice = _reader.readInt32();
          break;
        case 2:
          _instance.codeDevice = _reader.readString();
          break;
        case 3:
          _instance.codeGroup = _reader.readString();
          break;
        case 4:
          _instance.codeArea = _reader.readString();
          break;
        case 5:
          _instance.description = _reader.readString();
          break;
        case 6:
          _instance.mac = _reader.readString();
          break;
        case 7:
          _instance.username = _reader.readString();
          break;
        case 8:
          _instance.password = _reader.readString();
          break;
        case 9:
          _instance.charging = _reader.readBool();
          break;
        case 10:
          _instance.latitude = _reader.readFloat();
          break;
        case 11:
          _instance.longitude = _reader.readFloat();
          break;
        case 12:
          _instance.percentBattery = _reader.readInt32();
          break;
        case 13:
          _instance.timeBegin = _reader.readString();
          break;
        case 14:
          _instance.timeEnd = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    DeviceInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: DeviceInfo, _writer: BinaryWriter) {
    if (_instance.idDevice) {
      _writer.writeInt32(1, _instance.idDevice);
    }
    if (_instance.codeDevice) {
      _writer.writeString(2, _instance.codeDevice);
    }
    if (_instance.codeGroup) {
      _writer.writeString(3, _instance.codeGroup);
    }
    if (_instance.codeArea) {
      _writer.writeString(4, _instance.codeArea);
    }
    if (_instance.description) {
      _writer.writeString(5, _instance.description);
    }
    if (_instance.mac) {
      _writer.writeString(6, _instance.mac);
    }
    if (_instance.username) {
      _writer.writeString(7, _instance.username);
    }
    if (_instance.password) {
      _writer.writeString(8, _instance.password);
    }
    if (_instance.charging) {
      _writer.writeBool(9, _instance.charging);
    }
    if (_instance.latitude) {
      _writer.writeFloat(10, _instance.latitude);
    }
    if (_instance.longitude) {
      _writer.writeFloat(11, _instance.longitude);
    }
    if (_instance.percentBattery) {
      _writer.writeInt32(12, _instance.percentBattery);
    }
    if (_instance.timeBegin) {
      _writer.writeString(13, _instance.timeBegin);
    }
    if (_instance.timeEnd) {
      _writer.writeString(14, _instance.timeEnd);
    }
  }

  private _idDevice?: number;
  private _codeDevice?: string;
  private _codeGroup?: string;
  private _codeArea?: string;
  private _description?: string;
  private _mac?: string;
  private _username?: string;
  private _password?: string;
  private _charging?: boolean;
  private _latitude?: number;
  private _longitude?: number;
  private _percentBattery?: number;
  private _timeBegin?: string;
  private _timeEnd?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeviceInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeviceInfo>) {
    _value = _value || {};
    this.idDevice = _value.idDevice;
    this.codeDevice = _value.codeDevice;
    this.codeGroup = _value.codeGroup;
    this.codeArea = _value.codeArea;
    this.description = _value.description;
    this.mac = _value.mac;
    this.username = _value.username;
    this.password = _value.password;
    this.charging = _value.charging;
    this.latitude = _value.latitude;
    this.longitude = _value.longitude;
    this.percentBattery = _value.percentBattery;
    this.timeBegin = _value.timeBegin;
    this.timeEnd = _value.timeEnd;
    DeviceInfo.refineValues(this);
  }
  get idDevice(): number | undefined {
    return this._idDevice;
  }
  set idDevice(value: number | undefined) {
    this._idDevice = value;
  }
  get codeDevice(): string | undefined {
    return this._codeDevice;
  }
  set codeDevice(value: string | undefined) {
    this._codeDevice = value;
  }
  get codeGroup(): string | undefined {
    return this._codeGroup;
  }
  set codeGroup(value: string | undefined) {
    this._codeGroup = value;
  }
  get codeArea(): string | undefined {
    return this._codeArea;
  }
  set codeArea(value: string | undefined) {
    this._codeArea = value;
  }
  get description(): string | undefined {
    return this._description;
  }
  set description(value: string | undefined) {
    this._description = value;
  }
  get mac(): string | undefined {
    return this._mac;
  }
  set mac(value: string | undefined) {
    this._mac = value;
  }
  get username(): string | undefined {
    return this._username;
  }
  set username(value: string | undefined) {
    this._username = value;
  }
  get password(): string | undefined {
    return this._password;
  }
  set password(value: string | undefined) {
    this._password = value;
  }
  get charging(): boolean | undefined {
    return this._charging;
  }
  set charging(value: boolean | undefined) {
    this._charging = value;
  }
  get latitude(): number | undefined {
    return this._latitude;
  }
  set latitude(value: number | undefined) {
    this._latitude = value;
  }
  get longitude(): number | undefined {
    return this._longitude;
  }
  set longitude(value: number | undefined) {
    this._longitude = value;
  }
  get percentBattery(): number | undefined {
    return this._percentBattery;
  }
  set percentBattery(value: number | undefined) {
    this._percentBattery = value;
  }
  get timeBegin(): string | undefined {
    return this._timeBegin;
  }
  set timeBegin(value: string | undefined) {
    this._timeBegin = value;
  }
  get timeEnd(): string | undefined {
    return this._timeEnd;
  }
  set timeEnd(value: string | undefined) {
    this._timeEnd = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeviceInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeviceInfo.AsObject {
    return {
      idDevice: this.idDevice,
      codeDevice: this.codeDevice,
      codeGroup: this.codeGroup,
      codeArea: this.codeArea,
      description: this.description,
      mac: this.mac,
      username: this.username,
      password: this.password,
      charging: this.charging,
      latitude: this.latitude,
      longitude: this.longitude,
      percentBattery: this.percentBattery,
      timeBegin: this.timeBegin,
      timeEnd: this.timeEnd
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
export module DeviceInfo {
  /**
   * Standard JavaScript object representation for DeviceInfo
   */
  export interface AsObject {
    idDevice?: number;
    codeDevice?: string;
    codeGroup?: string;
    codeArea?: string;
    description?: string;
    mac?: string;
    username?: string;
    password?: string;
    charging?: boolean;
    latitude?: number;
    longitude?: number;
    percentBattery?: number;
    timeBegin?: string;
    timeEnd?: string;
  }
}

/**
 * Message implementation for user.PersonRequest
 */
export class PersonRequest implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new PersonRequest();
    PersonRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: PersonRequest) {
    _instance.groupCode = _instance.groupCode || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: PersonRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.groupCode = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    PersonRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: PersonRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.groupCode) {
      _writer.writeString(1, _instance.groupCode);
    }
  }

  private _groupCode?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PersonRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<PersonRequest>) {
    _value = _value || {};
    this.groupCode = _value.groupCode;
    PersonRequest.refineValues(this);
  }
  get groupCode(): string | undefined {
    return this._groupCode;
  }
  set groupCode(value: string | undefined) {
    this._groupCode = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    PersonRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): PersonRequest.AsObject {
    return {
      groupCode: this.groupCode
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
export module PersonRequest {
  /**
   * Standard JavaScript object representation for PersonRequest
   */
  export interface AsObject {
    groupCode?: string;
  }
}

/**
 * Message implementation for user.PersonReply
 */
export class PersonReply implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new PersonReply();
    PersonReply.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: PersonReply) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: PersonReply,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.response = new Response();
          _reader.readMessage(
            _instance.response,
            Response.deserializeBinaryFromReader
          );
          break;
        case 2:
          const messageInitializer2 = new PersonInfo();
          _reader.readMessage(
            messageInitializer2,
            PersonInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    PersonReply.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: PersonReply,
    _writer: BinaryWriter
  ) {
    if (_instance.response) {
      _writer.writeMessage(
        1,
        _instance.response as any,
        Response.serializeBinaryToWriter
      );
    }
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.data as any,
        PersonInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: PersonInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PersonReply to deeply clone from
   */
  constructor(_value?: RecursivePartial<PersonReply>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new PersonInfo(m));
    PersonReply.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): PersonInfo[] | undefined {
    return this._data;
  }
  set data(value: PersonInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    PersonReply.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): PersonReply.AsObject {
    return {
      response: this.response ? this.response.toObject() : undefined,
      data: (this.data || []).map(m => m.toObject())
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
export module PersonReply {
  /**
   * Standard JavaScript object representation for PersonReply
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: PersonInfo.AsObject[];
  }
}

/**
 * Message implementation for user.PersonInfo
 */
export class PersonInfo implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new PersonInfo();
    PersonInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: PersonInfo) {
    _instance.namePerson = _instance.namePerson || '';
    _instance.codePerson = _instance.codePerson || '';
    _instance.codeGroup = _instance.codeGroup || '';
    _instance.icon = _instance.icon || '';
    _instance.description = _instance.description || '';
    _instance.idPerson2 = _instance.idPerson2 || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: PersonInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.namePerson = _reader.readString();
          break;
        case 2:
          _instance.codePerson = _reader.readString();
          break;
        case 3:
          _instance.codeGroup = _reader.readString();
          break;
        case 4:
          _instance.icon = _reader.readString();
          break;
        case 5:
          _instance.description = _reader.readString();
          break;
        case 6:
          _instance.idPerson2 = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    PersonInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: PersonInfo, _writer: BinaryWriter) {
    if (_instance.namePerson) {
      _writer.writeString(1, _instance.namePerson);
    }
    if (_instance.codePerson) {
      _writer.writeString(2, _instance.codePerson);
    }
    if (_instance.codeGroup) {
      _writer.writeString(3, _instance.codeGroup);
    }
    if (_instance.icon) {
      _writer.writeString(4, _instance.icon);
    }
    if (_instance.description) {
      _writer.writeString(5, _instance.description);
    }
    if (_instance.idPerson2) {
      _writer.writeString(6, _instance.idPerson2);
    }
  }

  private _namePerson?: string;
  private _codePerson?: string;
  private _codeGroup?: string;
  private _icon?: string;
  private _description?: string;
  private _idPerson2?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PersonInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<PersonInfo>) {
    _value = _value || {};
    this.namePerson = _value.namePerson;
    this.codePerson = _value.codePerson;
    this.codeGroup = _value.codeGroup;
    this.icon = _value.icon;
    this.description = _value.description;
    this.idPerson2 = _value.idPerson2;
    PersonInfo.refineValues(this);
  }
  get namePerson(): string | undefined {
    return this._namePerson;
  }
  set namePerson(value: string | undefined) {
    this._namePerson = value;
  }
  get codePerson(): string | undefined {
    return this._codePerson;
  }
  set codePerson(value: string | undefined) {
    this._codePerson = value;
  }
  get codeGroup(): string | undefined {
    return this._codeGroup;
  }
  set codeGroup(value: string | undefined) {
    this._codeGroup = value;
  }
  get icon(): string | undefined {
    return this._icon;
  }
  set icon(value: string | undefined) {
    this._icon = value;
  }
  get description(): string | undefined {
    return this._description;
  }
  set description(value: string | undefined) {
    this._description = value;
  }
  get idPerson2(): string | undefined {
    return this._idPerson2;
  }
  set idPerson2(value: string | undefined) {
    this._idPerson2 = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    PersonInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): PersonInfo.AsObject {
    return {
      namePerson: this.namePerson,
      codePerson: this.codePerson,
      codeGroup: this.codeGroup,
      icon: this.icon,
      description: this.description,
      idPerson2: this.idPerson2
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
export module PersonInfo {
  /**
   * Standard JavaScript object representation for PersonInfo
   */
  export interface AsObject {
    namePerson?: string;
    codePerson?: string;
    codeGroup?: string;
    icon?: string;
    description?: string;
    idPerson2?: string;
  }
}

/**
 * Message implementation for user.FaceRequest
 */
export class FaceRequest implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new FaceRequest();
    FaceRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: FaceRequest) {
    _instance.codePerson = _instance.codePerson || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: FaceRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.codePerson = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    FaceRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: FaceRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.codePerson) {
      _writer.writeString(1, _instance.codePerson);
    }
  }

  private _codePerson?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of FaceRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<FaceRequest>) {
    _value = _value || {};
    this.codePerson = _value.codePerson;
    FaceRequest.refineValues(this);
  }
  get codePerson(): string | undefined {
    return this._codePerson;
  }
  set codePerson(value: string | undefined) {
    this._codePerson = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    FaceRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): FaceRequest.AsObject {
    return {
      codePerson: this.codePerson
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
export module FaceRequest {
  /**
   * Standard JavaScript object representation for FaceRequest
   */
  export interface AsObject {
    codePerson?: string;
  }
}

/**
 * Message implementation for user.FaceReply
 */
export class FaceReply implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new FaceReply();
    FaceReply.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: FaceReply) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: FaceReply,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.response = new Response();
          _reader.readMessage(
            _instance.response,
            Response.deserializeBinaryFromReader
          );
          break;
        case 2:
          const messageInitializer2 = new FaceInfo();
          _reader.readMessage(
            messageInitializer2,
            FaceInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    FaceReply.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: FaceReply, _writer: BinaryWriter) {
    if (_instance.response) {
      _writer.writeMessage(
        1,
        _instance.response as any,
        Response.serializeBinaryToWriter
      );
    }
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.data as any,
        FaceInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: FaceInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of FaceReply to deeply clone from
   */
  constructor(_value?: RecursivePartial<FaceReply>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new FaceInfo(m));
    FaceReply.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): FaceInfo[] | undefined {
    return this._data;
  }
  set data(value: FaceInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    FaceReply.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): FaceReply.AsObject {
    return {
      response: this.response ? this.response.toObject() : undefined,
      data: (this.data || []).map(m => m.toObject())
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
export module FaceReply {
  /**
   * Standard JavaScript object representation for FaceReply
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: FaceInfo.AsObject[];
  }
}

/**
 * Message implementation for user.FaceInfo
 */
export class FaceInfo implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new FaceInfo();
    FaceInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: FaceInfo) {
    _instance.idFace = _instance.idFace || 0;
    _instance.linkFile = _instance.linkFile || '';
    _instance.timeBegin = _instance.timeBegin || '';
    _instance.timeEnd = _instance.timeEnd || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: FaceInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.idFace = _reader.readInt32();
          break;
        case 2:
          _instance.linkFile = _reader.readString();
          break;
        case 3:
          _instance.timeBegin = _reader.readString();
          break;
        case 4:
          _instance.timeEnd = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    FaceInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: FaceInfo, _writer: BinaryWriter) {
    if (_instance.idFace) {
      _writer.writeInt32(1, _instance.idFace);
    }
    if (_instance.linkFile) {
      _writer.writeString(2, _instance.linkFile);
    }
    if (_instance.timeBegin) {
      _writer.writeString(3, _instance.timeBegin);
    }
    if (_instance.timeEnd) {
      _writer.writeString(4, _instance.timeEnd);
    }
  }

  private _idFace?: number;
  private _linkFile?: string;
  private _timeBegin?: string;
  private _timeEnd?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of FaceInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<FaceInfo>) {
    _value = _value || {};
    this.idFace = _value.idFace;
    this.linkFile = _value.linkFile;
    this.timeBegin = _value.timeBegin;
    this.timeEnd = _value.timeEnd;
    FaceInfo.refineValues(this);
  }
  get idFace(): number | undefined {
    return this._idFace;
  }
  set idFace(value: number | undefined) {
    this._idFace = value;
  }
  get linkFile(): string | undefined {
    return this._linkFile;
  }
  set linkFile(value: string | undefined) {
    this._linkFile = value;
  }
  get timeBegin(): string | undefined {
    return this._timeBegin;
  }
  set timeBegin(value: string | undefined) {
    this._timeBegin = value;
  }
  get timeEnd(): string | undefined {
    return this._timeEnd;
  }
  set timeEnd(value: string | undefined) {
    this._timeEnd = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    FaceInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): FaceInfo.AsObject {
    return {
      idFace: this.idFace,
      linkFile: this.linkFile,
      timeBegin: this.timeBegin,
      timeEnd: this.timeEnd
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
export module FaceInfo {
  /**
   * Standard JavaScript object representation for FaceInfo
   */
  export interface AsObject {
    idFace?: number;
    linkFile?: string;
    timeBegin?: string;
    timeEnd?: string;
  }
}

/**
 * Message implementation for user.AreaRequest
 */
export class AreaRequest implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AreaRequest();
    AreaRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AreaRequest) {
    _instance.groupCode = _instance.groupCode || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AreaRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.groupCode = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    AreaRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AreaRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.groupCode) {
      _writer.writeString(1, _instance.groupCode);
    }
  }

  private _groupCode?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AreaRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<AreaRequest>) {
    _value = _value || {};
    this.groupCode = _value.groupCode;
    AreaRequest.refineValues(this);
  }
  get groupCode(): string | undefined {
    return this._groupCode;
  }
  set groupCode(value: string | undefined) {
    this._groupCode = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AreaRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AreaRequest.AsObject {
    return {
      groupCode: this.groupCode
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
export module AreaRequest {
  /**
   * Standard JavaScript object representation for AreaRequest
   */
  export interface AsObject {
    groupCode?: string;
  }
}

/**
 * Message implementation for user.AreaReply
 */
export class AreaReply implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AreaReply();
    AreaReply.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AreaReply) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AreaReply,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.response = new Response();
          _reader.readMessage(
            _instance.response,
            Response.deserializeBinaryFromReader
          );
          break;
        case 2:
          const messageInitializer2 = new AreaInfo();
          _reader.readMessage(
            messageInitializer2,
            AreaInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    AreaReply.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: AreaReply, _writer: BinaryWriter) {
    if (_instance.response) {
      _writer.writeMessage(
        1,
        _instance.response as any,
        Response.serializeBinaryToWriter
      );
    }
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.data as any,
        AreaInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: AreaInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AreaReply to deeply clone from
   */
  constructor(_value?: RecursivePartial<AreaReply>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new AreaInfo(m));
    AreaReply.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): AreaInfo[] | undefined {
    return this._data;
  }
  set data(value: AreaInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AreaReply.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AreaReply.AsObject {
    return {
      response: this.response ? this.response.toObject() : undefined,
      data: (this.data || []).map(m => m.toObject())
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
export module AreaReply {
  /**
   * Standard JavaScript object representation for AreaReply
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: AreaInfo.AsObject[];
  }
}

/**
 * Message implementation for user.AreaInfo
 */
export class AreaInfo implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AreaInfo();
    AreaInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AreaInfo) {
    _instance.nameArea = _instance.nameArea || '';
    _instance.codeArea = _instance.codeArea || '';
    _instance.description = _instance.description || '';
    _instance.latitude = _instance.latitude || 0;
    _instance.longitude = _instance.longitude || 0;
    _instance.codeGroup = _instance.codeGroup || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AreaInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.nameArea = _reader.readString();
          break;
        case 2:
          _instance.codeArea = _reader.readString();
          break;
        case 3:
          _instance.description = _reader.readString();
          break;
        case 4:
          _instance.latitude = _reader.readFloat();
          break;
        case 5:
          _instance.longitude = _reader.readFloat();
          break;
        case 6:
          _instance.codeGroup = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    AreaInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: AreaInfo, _writer: BinaryWriter) {
    if (_instance.nameArea) {
      _writer.writeString(1, _instance.nameArea);
    }
    if (_instance.codeArea) {
      _writer.writeString(2, _instance.codeArea);
    }
    if (_instance.description) {
      _writer.writeString(3, _instance.description);
    }
    if (_instance.latitude) {
      _writer.writeFloat(4, _instance.latitude);
    }
    if (_instance.longitude) {
      _writer.writeFloat(5, _instance.longitude);
    }
    if (_instance.codeGroup) {
      _writer.writeString(6, _instance.codeGroup);
    }
  }

  private _nameArea?: string;
  private _codeArea?: string;
  private _description?: string;
  private _latitude?: number;
  private _longitude?: number;
  private _codeGroup?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AreaInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<AreaInfo>) {
    _value = _value || {};
    this.nameArea = _value.nameArea;
    this.codeArea = _value.codeArea;
    this.description = _value.description;
    this.latitude = _value.latitude;
    this.longitude = _value.longitude;
    this.codeGroup = _value.codeGroup;
    AreaInfo.refineValues(this);
  }
  get nameArea(): string | undefined {
    return this._nameArea;
  }
  set nameArea(value: string | undefined) {
    this._nameArea = value;
  }
  get codeArea(): string | undefined {
    return this._codeArea;
  }
  set codeArea(value: string | undefined) {
    this._codeArea = value;
  }
  get description(): string | undefined {
    return this._description;
  }
  set description(value: string | undefined) {
    this._description = value;
  }
  get latitude(): number | undefined {
    return this._latitude;
  }
  set latitude(value: number | undefined) {
    this._latitude = value;
  }
  get longitude(): number | undefined {
    return this._longitude;
  }
  set longitude(value: number | undefined) {
    this._longitude = value;
  }
  get codeGroup(): string | undefined {
    return this._codeGroup;
  }
  set codeGroup(value: string | undefined) {
    this._codeGroup = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AreaInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AreaInfo.AsObject {
    return {
      nameArea: this.nameArea,
      codeArea: this.codeArea,
      description: this.description,
      latitude: this.latitude,
      longitude: this.longitude,
      codeGroup: this.codeGroup
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
export module AreaInfo {
  /**
   * Standard JavaScript object representation for AreaInfo
   */
  export interface AsObject {
    nameArea?: string;
    codeArea?: string;
    description?: string;
    latitude?: number;
    longitude?: number;
    codeGroup?: string;
  }
}

/**
 * Message implementation for user.ReportRequest
 */
export class ReportRequest implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ReportRequest();
    ReportRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ReportRequest) {
    _instance.codeGroups = _instance.codeGroups || '';
    _instance.codeDevices = _instance.codeDevices || '';
    _instance.codeAreas = _instance.codeAreas || '';
    _instance.codePersons = _instance.codePersons || '';
    _instance.timeBegin = _instance.timeBegin || '';
    _instance.timeEnd = _instance.timeEnd || '';
    _instance.temperatureLow = _instance.temperatureLow || 0;
    _instance.temperatureHigh = _instance.temperatureHigh || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ReportRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.codeGroups = _reader.readString();
          break;
        case 2:
          _instance.codeDevices = _reader.readString();
          break;
        case 3:
          _instance.codeAreas = _reader.readString();
          break;
        case 4:
          _instance.codePersons = _reader.readString();
          break;
        case 5:
          _instance.timeBegin = _reader.readString();
          break;
        case 6:
          _instance.timeEnd = _reader.readString();
          break;
        case 7:
          _instance.temperatureLow = _reader.readFloat();
          break;
        case 8:
          _instance.temperatureHigh = _reader.readFloat();
          break;
        default:
          _reader.skipField();
      }
    }

    ReportRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ReportRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.codeGroups) {
      _writer.writeString(1, _instance.codeGroups);
    }
    if (_instance.codeDevices) {
      _writer.writeString(2, _instance.codeDevices);
    }
    if (_instance.codeAreas) {
      _writer.writeString(3, _instance.codeAreas);
    }
    if (_instance.codePersons) {
      _writer.writeString(4, _instance.codePersons);
    }
    if (_instance.timeBegin) {
      _writer.writeString(5, _instance.timeBegin);
    }
    if (_instance.timeEnd) {
      _writer.writeString(6, _instance.timeEnd);
    }
    if (_instance.temperatureLow) {
      _writer.writeFloat(7, _instance.temperatureLow);
    }
    if (_instance.temperatureHigh) {
      _writer.writeFloat(8, _instance.temperatureHigh);
    }
  }

  private _codeGroups?: string;
  private _codeDevices?: string;
  private _codeAreas?: string;
  private _codePersons?: string;
  private _timeBegin?: string;
  private _timeEnd?: string;
  private _temperatureLow?: number;
  private _temperatureHigh?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ReportRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ReportRequest>) {
    _value = _value || {};
    this.codeGroups = _value.codeGroups;
    this.codeDevices = _value.codeDevices;
    this.codeAreas = _value.codeAreas;
    this.codePersons = _value.codePersons;
    this.timeBegin = _value.timeBegin;
    this.timeEnd = _value.timeEnd;
    this.temperatureLow = _value.temperatureLow;
    this.temperatureHigh = _value.temperatureHigh;
    ReportRequest.refineValues(this);
  }
  get codeGroups(): string | undefined {
    return this._codeGroups;
  }
  set codeGroups(value: string | undefined) {
    this._codeGroups = value;
  }
  get codeDevices(): string | undefined {
    return this._codeDevices;
  }
  set codeDevices(value: string | undefined) {
    this._codeDevices = value;
  }
  get codeAreas(): string | undefined {
    return this._codeAreas;
  }
  set codeAreas(value: string | undefined) {
    this._codeAreas = value;
  }
  get codePersons(): string | undefined {
    return this._codePersons;
  }
  set codePersons(value: string | undefined) {
    this._codePersons = value;
  }
  get timeBegin(): string | undefined {
    return this._timeBegin;
  }
  set timeBegin(value: string | undefined) {
    this._timeBegin = value;
  }
  get timeEnd(): string | undefined {
    return this._timeEnd;
  }
  set timeEnd(value: string | undefined) {
    this._timeEnd = value;
  }
  get temperatureLow(): number | undefined {
    return this._temperatureLow;
  }
  set temperatureLow(value: number | undefined) {
    this._temperatureLow = value;
  }
  get temperatureHigh(): number | undefined {
    return this._temperatureHigh;
  }
  set temperatureHigh(value: number | undefined) {
    this._temperatureHigh = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ReportRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ReportRequest.AsObject {
    return {
      codeGroups: this.codeGroups,
      codeDevices: this.codeDevices,
      codeAreas: this.codeAreas,
      codePersons: this.codePersons,
      timeBegin: this.timeBegin,
      timeEnd: this.timeEnd,
      temperatureLow: this.temperatureLow,
      temperatureHigh: this.temperatureHigh
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
export module ReportRequest {
  /**
   * Standard JavaScript object representation for ReportRequest
   */
  export interface AsObject {
    codeGroups?: string;
    codeDevices?: string;
    codeAreas?: string;
    codePersons?: string;
    timeBegin?: string;
    timeEnd?: string;
    temperatureLow?: number;
    temperatureHigh?: number;
  }
}

/**
 * Message implementation for user.ReportTemperatureReply
 */
export class ReportTemperatureReply implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ReportTemperatureReply();
    ReportTemperatureReply.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ReportTemperatureReply) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ReportTemperatureReply,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.response = new Response();
          _reader.readMessage(
            _instance.response,
            Response.deserializeBinaryFromReader
          );
          break;
        case 2:
          const messageInitializer2 = new ReportInfo();
          _reader.readMessage(
            messageInitializer2,
            ReportInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    ReportTemperatureReply.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ReportTemperatureReply,
    _writer: BinaryWriter
  ) {
    if (_instance.response) {
      _writer.writeMessage(
        1,
        _instance.response as any,
        Response.serializeBinaryToWriter
      );
    }
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.data as any,
        ReportInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: ReportInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ReportTemperatureReply to deeply clone from
   */
  constructor(_value?: RecursivePartial<ReportTemperatureReply>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new ReportInfo(m));
    ReportTemperatureReply.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): ReportInfo[] | undefined {
    return this._data;
  }
  set data(value: ReportInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ReportTemperatureReply.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ReportTemperatureReply.AsObject {
    return {
      response: this.response ? this.response.toObject() : undefined,
      data: (this.data || []).map(m => m.toObject())
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
export module ReportTemperatureReply {
  /**
   * Standard JavaScript object representation for ReportTemperatureReply
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: ReportInfo.AsObject[];
  }
}

/**
 * Message implementation for user.ReportInfo
 */
export class ReportInfo implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ReportInfo();
    ReportInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ReportInfo) {
    _instance.codeDevice = _instance.codeDevice || '';
    _instance.linkFile = _instance.linkFile || '';
    _instance.temperature = _instance.temperature || 0;
    _instance.timePost = _instance.timePost || '';
    _instance.codeGroup = _instance.codeGroup || '';
    _instance.codeArea = _instance.codeArea || '';
    _instance.codePerson = _instance.codePerson || '';
    _instance.namePerson = _instance.namePerson || '';
    _instance.latitude = _instance.latitude || 0;
    _instance.longitude = _instance.longitude || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ReportInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.codeDevice = _reader.readString();
          break;
        case 2:
          _instance.linkFile = _reader.readString();
          break;
        case 3:
          _instance.temperature = _reader.readFloat();
          break;
        case 4:
          _instance.timePost = _reader.readString();
          break;
        case 5:
          _instance.codeGroup = _reader.readString();
          break;
        case 6:
          _instance.codeArea = _reader.readString();
          break;
        case 7:
          _instance.codePerson = _reader.readString();
          break;
        case 8:
          _instance.namePerson = _reader.readString();
          break;
        case 9:
          _instance.latitude = _reader.readFloat();
          break;
        case 10:
          _instance.longitude = _reader.readFloat();
          break;
        default:
          _reader.skipField();
      }
    }

    ReportInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: ReportInfo, _writer: BinaryWriter) {
    if (_instance.codeDevice) {
      _writer.writeString(1, _instance.codeDevice);
    }
    if (_instance.linkFile) {
      _writer.writeString(2, _instance.linkFile);
    }
    if (_instance.temperature) {
      _writer.writeFloat(3, _instance.temperature);
    }
    if (_instance.timePost) {
      _writer.writeString(4, _instance.timePost);
    }
    if (_instance.codeGroup) {
      _writer.writeString(5, _instance.codeGroup);
    }
    if (_instance.codeArea) {
      _writer.writeString(6, _instance.codeArea);
    }
    if (_instance.codePerson) {
      _writer.writeString(7, _instance.codePerson);
    }
    if (_instance.namePerson) {
      _writer.writeString(8, _instance.namePerson);
    }
    if (_instance.latitude) {
      _writer.writeFloat(9, _instance.latitude);
    }
    if (_instance.longitude) {
      _writer.writeFloat(10, _instance.longitude);
    }
  }

  private _codeDevice?: string;
  private _linkFile?: string;
  private _temperature?: number;
  private _timePost?: string;
  private _codeGroup?: string;
  private _codeArea?: string;
  private _codePerson?: string;
  private _namePerson?: string;
  private _latitude?: number;
  private _longitude?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ReportInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<ReportInfo>) {
    _value = _value || {};
    this.codeDevice = _value.codeDevice;
    this.linkFile = _value.linkFile;
    this.temperature = _value.temperature;
    this.timePost = _value.timePost;
    this.codeGroup = _value.codeGroup;
    this.codeArea = _value.codeArea;
    this.codePerson = _value.codePerson;
    this.namePerson = _value.namePerson;
    this.latitude = _value.latitude;
    this.longitude = _value.longitude;
    ReportInfo.refineValues(this);
  }
  get codeDevice(): string | undefined {
    return this._codeDevice;
  }
  set codeDevice(value: string | undefined) {
    this._codeDevice = value;
  }
  get linkFile(): string | undefined {
    return this._linkFile;
  }
  set linkFile(value: string | undefined) {
    this._linkFile = value;
  }
  get temperature(): number | undefined {
    return this._temperature;
  }
  set temperature(value: number | undefined) {
    this._temperature = value;
  }
  get timePost(): string | undefined {
    return this._timePost;
  }
  set timePost(value: string | undefined) {
    this._timePost = value;
  }
  get codeGroup(): string | undefined {
    return this._codeGroup;
  }
  set codeGroup(value: string | undefined) {
    this._codeGroup = value;
  }
  get codeArea(): string | undefined {
    return this._codeArea;
  }
  set codeArea(value: string | undefined) {
    this._codeArea = value;
  }
  get codePerson(): string | undefined {
    return this._codePerson;
  }
  set codePerson(value: string | undefined) {
    this._codePerson = value;
  }
  get namePerson(): string | undefined {
    return this._namePerson;
  }
  set namePerson(value: string | undefined) {
    this._namePerson = value;
  }
  get latitude(): number | undefined {
    return this._latitude;
  }
  set latitude(value: number | undefined) {
    this._latitude = value;
  }
  get longitude(): number | undefined {
    return this._longitude;
  }
  set longitude(value: number | undefined) {
    this._longitude = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ReportInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ReportInfo.AsObject {
    return {
      codeDevice: this.codeDevice,
      linkFile: this.linkFile,
      temperature: this.temperature,
      timePost: this.timePost,
      codeGroup: this.codeGroup,
      codeArea: this.codeArea,
      codePerson: this.codePerson,
      namePerson: this.namePerson,
      latitude: this.latitude,
      longitude: this.longitude
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
export module ReportInfo {
  /**
   * Standard JavaScript object representation for ReportInfo
   */
  export interface AsObject {
    codeDevice?: string;
    linkFile?: string;
    temperature?: number;
    timePost?: string;
    codeGroup?: string;
    codeArea?: string;
    codePerson?: string;
    namePerson?: string;
    latitude?: number;
    longitude?: number;
  }
}

/**
 * Message implementation for user.ReportStatisticReply
 */
export class ReportStatisticReply implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ReportStatisticReply();
    ReportStatisticReply.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ReportStatisticReply) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ReportStatisticReply,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.response = new Response();
          _reader.readMessage(
            _instance.response,
            Response.deserializeBinaryFromReader
          );
          break;
        case 2:
          const messageInitializer2 = new ReportInfo();
          _reader.readMessage(
            messageInitializer2,
            ReportInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    ReportStatisticReply.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ReportStatisticReply,
    _writer: BinaryWriter
  ) {
    if (_instance.response) {
      _writer.writeMessage(
        1,
        _instance.response as any,
        Response.serializeBinaryToWriter
      );
    }
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.data as any,
        ReportInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: ReportInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ReportStatisticReply to deeply clone from
   */
  constructor(_value?: RecursivePartial<ReportStatisticReply>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new ReportInfo(m));
    ReportStatisticReply.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): ReportInfo[] | undefined {
    return this._data;
  }
  set data(value: ReportInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ReportStatisticReply.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ReportStatisticReply.AsObject {
    return {
      response: this.response ? this.response.toObject() : undefined,
      data: (this.data || []).map(m => m.toObject())
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
export module ReportStatisticReply {
  /**
   * Standard JavaScript object representation for ReportStatisticReply
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: ReportInfo.AsObject[];
  }
}

/**
 * Message implementation for user.ReportAttendaceInOutReply
 */
export class ReportAttendaceInOutReply implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ReportAttendaceInOutReply();
    ReportAttendaceInOutReply.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ReportAttendaceInOutReply) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ReportAttendaceInOutReply,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.response = new Response();
          _reader.readMessage(
            _instance.response,
            Response.deserializeBinaryFromReader
          );
          break;
        case 2:
          const messageInitializer2 = new ReportInfo();
          _reader.readMessage(
            messageInitializer2,
            ReportInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    ReportAttendaceInOutReply.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ReportAttendaceInOutReply,
    _writer: BinaryWriter
  ) {
    if (_instance.response) {
      _writer.writeMessage(
        1,
        _instance.response as any,
        Response.serializeBinaryToWriter
      );
    }
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.data as any,
        ReportInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: ReportInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ReportAttendaceInOutReply to deeply clone from
   */
  constructor(_value?: RecursivePartial<ReportAttendaceInOutReply>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new ReportInfo(m));
    ReportAttendaceInOutReply.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): ReportInfo[] | undefined {
    return this._data;
  }
  set data(value: ReportInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ReportAttendaceInOutReply.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ReportAttendaceInOutReply.AsObject {
    return {
      response: this.response ? this.response.toObject() : undefined,
      data: (this.data || []).map(m => m.toObject())
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
export module ReportAttendaceInOutReply {
  /**
   * Standard JavaScript object representation for ReportAttendaceInOutReply
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: ReportInfo.AsObject[];
  }
}

/**
 * Message implementation for user.ReportTempMinMaxReply
 */
export class ReportTempMinMaxReply implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ReportTempMinMaxReply();
    ReportTempMinMaxReply.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ReportTempMinMaxReply) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ReportTempMinMaxReply,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.response = new Response();
          _reader.readMessage(
            _instance.response,
            Response.deserializeBinaryFromReader
          );
          break;
        case 2:
          const messageInitializer2 = new ReportInfo();
          _reader.readMessage(
            messageInitializer2,
            ReportInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    ReportTempMinMaxReply.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ReportTempMinMaxReply,
    _writer: BinaryWriter
  ) {
    if (_instance.response) {
      _writer.writeMessage(
        1,
        _instance.response as any,
        Response.serializeBinaryToWriter
      );
    }
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.data as any,
        ReportInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: ReportInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ReportTempMinMaxReply to deeply clone from
   */
  constructor(_value?: RecursivePartial<ReportTempMinMaxReply>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new ReportInfo(m));
    ReportTempMinMaxReply.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): ReportInfo[] | undefined {
    return this._data;
  }
  set data(value: ReportInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ReportTempMinMaxReply.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ReportTempMinMaxReply.AsObject {
    return {
      response: this.response ? this.response.toObject() : undefined,
      data: (this.data || []).map(m => m.toObject())
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
export module ReportTempMinMaxReply {
  /**
   * Standard JavaScript object representation for ReportTempMinMaxReply
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: ReportInfo.AsObject[];
  }
}
