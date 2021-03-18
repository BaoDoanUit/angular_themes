/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import {
  GrpcCallType,
  GrpcClient,
  GrpcClientFactory,
  GrpcClientSettings,
  GrpcEvent
} from '@ngx-grpc/common';
import {
  GRPC_CLIENT_FACTORY,
  GrpcHandler,
  takeMessages,
  throwStatusErrors
} from '@ngx-grpc/core';
import { Metadata } from 'grpc-web';
import { Observable } from 'rxjs';
import * as thisProto from './user.pb';
import {
  GRPC_USER_CLIENT_SETTINGS,
  GRPC_DEVICE_CLIENT_SETTINGS,
  GRPC_PERSON_CLIENT_SETTINGS,
  GRPC_FACE_CLIENT_SETTINGS,
  GRPC_AREA_CLIENT_SETTINGS,
  GRPC_REPORT_CLIENT_SETTINGS
} from './user.pbconf';
/**
 * Service client implementation for user.User
 */
@Injectable({
  providedIn: 'root'
})
export class UserClient {
  private client: GrpcClient;

  constructor(
    @Optional() @Inject(GRPC_USER_CLIENT_SETTINGS) settings: GrpcClientSettings,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('user.User', settings);
  }

  /**
   * Unary RPC for /user.User/logIn
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.UserReply>
   */
  logIn(
    requestData: thisProto.UserInfo,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.UserReply> {
    return this.logIn$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /user.User/logIn
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.UserReply>>
   */
  logIn$eventStream(
    requestData: thisProto.UserInfo,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.UserReply>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/user.User/logIn',
      requestData,
      requestMetadata,
      requestClass: thisProto.UserInfo,
      responseClass: thisProto.UserReply
    });
  }
}
/**
 * Service client implementation for user.Device
 */
@Injectable({
  providedIn: 'root'
})
export class DeviceClient {
  private client: GrpcClient;

  constructor(
    @Optional()
    @Inject(GRPC_DEVICE_CLIENT_SETTINGS)
    settings: GrpcClientSettings,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('user.Device', settings);
  }

  /**
   * Unary RPC for /user.Device/getListInfo
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.DeviceReply>
   */
  getListInfo(
    requestData: thisProto.DeviceRequest,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.DeviceReply> {
    return this.getListInfo$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /user.Device/getListInfo
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.DeviceReply>>
   */
  getListInfo$eventStream(
    requestData: thisProto.DeviceRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.DeviceReply>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/user.Device/getListInfo',
      requestData,
      requestMetadata,
      requestClass: thisProto.DeviceRequest,
      responseClass: thisProto.DeviceReply
    });
  }

  /**
   * Unary RPC for /user.Device/addDevice
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.DeviceReply>
   */
  addDevice(
    requestData: thisProto.DeviceInfo,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.DeviceReply> {
    return this.addDevice$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /user.Device/addDevice
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.DeviceReply>>
   */
  addDevice$eventStream(
    requestData: thisProto.DeviceInfo,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.DeviceReply>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/user.Device/addDevice',
      requestData,
      requestMetadata,
      requestClass: thisProto.DeviceInfo,
      responseClass: thisProto.DeviceReply
    });
  }

  /**
   * Unary RPC for /user.Device/updateDevice
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.DeviceReply>
   */
  updateDevice(
    requestData: thisProto.DeviceInfo,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.DeviceReply> {
    return this.updateDevice$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /user.Device/updateDevice
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.DeviceReply>>
   */
  updateDevice$eventStream(
    requestData: thisProto.DeviceInfo,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.DeviceReply>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/user.Device/updateDevice',
      requestData,
      requestMetadata,
      requestClass: thisProto.DeviceInfo,
      responseClass: thisProto.DeviceReply
    });
  }
}
/**
 * Service client implementation for user.Person
 */
@Injectable({
  providedIn: 'root'
})
export class PersonClient {
  private client: GrpcClient;

  constructor(
    @Optional()
    @Inject(GRPC_PERSON_CLIENT_SETTINGS)
    settings: GrpcClientSettings,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('user.Person', settings);
  }

  /**
   * Unary RPC for /user.Person/getListPerson
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.PersonReply>
   */
  getListPerson(
    requestData: thisProto.PersonRequest,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.PersonReply> {
    return this.getListPerson$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /user.Person/getListPerson
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.PersonReply>>
   */
  getListPerson$eventStream(
    requestData: thisProto.PersonRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.PersonReply>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/user.Person/getListPerson',
      requestData,
      requestMetadata,
      requestClass: thisProto.PersonRequest,
      responseClass: thisProto.PersonReply
    });
  }

  /**
   * Unary RPC for /user.Person/addPerson
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.PersonReply>
   */
  addPerson(
    requestData: thisProto.PersonInfo,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.PersonReply> {
    return this.addPerson$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /user.Person/addPerson
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.PersonReply>>
   */
  addPerson$eventStream(
    requestData: thisProto.PersonInfo,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.PersonReply>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/user.Person/addPerson',
      requestData,
      requestMetadata,
      requestClass: thisProto.PersonInfo,
      responseClass: thisProto.PersonReply
    });
  }

  /**
   * Unary RPC for /user.Person/updatePerson
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.PersonReply>
   */
  updatePerson(
    requestData: thisProto.PersonInfo,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.PersonReply> {
    return this.updatePerson$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /user.Person/updatePerson
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.PersonReply>>
   */
  updatePerson$eventStream(
    requestData: thisProto.PersonInfo,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.PersonReply>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/user.Person/updatePerson',
      requestData,
      requestMetadata,
      requestClass: thisProto.PersonInfo,
      responseClass: thisProto.PersonReply
    });
  }

  /**
   * Unary RPC for /user.Person/deletePerson
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.PersonReply>
   */
  deletePerson(
    requestData: thisProto.PersonInfo,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.PersonReply> {
    return this.deletePerson$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /user.Person/deletePerson
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.PersonReply>>
   */
  deletePerson$eventStream(
    requestData: thisProto.PersonInfo,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.PersonReply>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/user.Person/deletePerson',
      requestData,
      requestMetadata,
      requestClass: thisProto.PersonInfo,
      responseClass: thisProto.PersonReply
    });
  }
}
/**
 * Service client implementation for user.Face
 */
@Injectable({
  providedIn: 'root'
})
export class FaceClient {
  private client: GrpcClient;

  constructor(
    @Optional() @Inject(GRPC_FACE_CLIENT_SETTINGS) settings: GrpcClientSettings,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('user.Face', settings);
  }

  /**
   * Unary RPC for /user.Face/getListFace
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.FaceReply>
   */
  getListFace(
    requestData: thisProto.FaceRequest,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.FaceReply> {
    return this.getListFace$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /user.Face/getListFace
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.FaceReply>>
   */
  getListFace$eventStream(
    requestData: thisProto.FaceRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.FaceReply>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/user.Face/getListFace',
      requestData,
      requestMetadata,
      requestClass: thisProto.FaceRequest,
      responseClass: thisProto.FaceReply
    });
  }

  /**
   * Unary RPC for /user.Face/addFace
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.FaceReply>
   */
  addFace(
    requestData: thisProto.FaceRequest,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.FaceReply> {
    return this.addFace$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /user.Face/addFace
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.FaceReply>>
   */
  addFace$eventStream(
    requestData: thisProto.FaceRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.FaceReply>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/user.Face/addFace',
      requestData,
      requestMetadata,
      requestClass: thisProto.FaceRequest,
      responseClass: thisProto.FaceReply
    });
  }

  /**
   * Unary RPC for /user.Face/deleteFace
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.FaceReply>
   */
  deleteFace(
    requestData: thisProto.FaceRequest,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.FaceReply> {
    return this.deleteFace$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /user.Face/deleteFace
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.FaceReply>>
   */
  deleteFace$eventStream(
    requestData: thisProto.FaceRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.FaceReply>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/user.Face/deleteFace',
      requestData,
      requestMetadata,
      requestClass: thisProto.FaceRequest,
      responseClass: thisProto.FaceReply
    });
  }
}
/**
 * Service client implementation for user.Area
 */
@Injectable({
  providedIn: 'root'
})
export class AreaClient {
  private client: GrpcClient;

  constructor(
    @Optional() @Inject(GRPC_AREA_CLIENT_SETTINGS) settings: GrpcClientSettings,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('user.Area', settings);
  }

  /**
   * Unary RPC for /user.Area/getListArea
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.AreaReply>
   */
  getListArea(
    requestData: thisProto.AreaRequest,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.AreaReply> {
    return this.getListArea$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /user.Area/getListArea
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.AreaReply>>
   */
  getListArea$eventStream(
    requestData: thisProto.AreaRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.AreaReply>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/user.Area/getListArea',
      requestData,
      requestMetadata,
      requestClass: thisProto.AreaRequest,
      responseClass: thisProto.AreaReply
    });
  }

  /**
   * Unary RPC for /user.Area/addArea
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.AreaReply>
   */
  addArea(
    requestData: thisProto.AreaInfo,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.AreaReply> {
    return this.addArea$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /user.Area/addArea
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.AreaReply>>
   */
  addArea$eventStream(
    requestData: thisProto.AreaInfo,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.AreaReply>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/user.Area/addArea',
      requestData,
      requestMetadata,
      requestClass: thisProto.AreaInfo,
      responseClass: thisProto.AreaReply
    });
  }

  /**
   * Unary RPC for /user.Area/updateArea
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.AreaReply>
   */
  updateArea(
    requestData: thisProto.AreaInfo,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.AreaReply> {
    return this.updateArea$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /user.Area/updateArea
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.AreaReply>>
   */
  updateArea$eventStream(
    requestData: thisProto.AreaInfo,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.AreaReply>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/user.Area/updateArea',
      requestData,
      requestMetadata,
      requestClass: thisProto.AreaInfo,
      responseClass: thisProto.AreaReply
    });
  }

  /**
   * Unary RPC for /user.Area/deleteArea
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.AreaReply>
   */
  deleteArea(
    requestData: thisProto.AreaInfo,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.AreaReply> {
    return this.deleteArea$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /user.Area/deleteArea
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.AreaReply>>
   */
  deleteArea$eventStream(
    requestData: thisProto.AreaInfo,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.AreaReply>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/user.Area/deleteArea',
      requestData,
      requestMetadata,
      requestClass: thisProto.AreaInfo,
      responseClass: thisProto.AreaReply
    });
  }

  /**
   * Unary RPC for /user.Area/existArea
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.AreaReply>
   */
  existArea(
    requestData: thisProto.AreaInfo,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.AreaReply> {
    return this.existArea$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /user.Area/existArea
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.AreaReply>>
   */
  existArea$eventStream(
    requestData: thisProto.AreaInfo,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.AreaReply>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/user.Area/existArea',
      requestData,
      requestMetadata,
      requestClass: thisProto.AreaInfo,
      responseClass: thisProto.AreaReply
    });
  }
}
/**
 * Service client implementation for user.Report
 */
@Injectable({
  providedIn: 'root'
})
export class ReportClient {
  private client: GrpcClient;

  constructor(
    @Optional()
    @Inject(GRPC_REPORT_CLIENT_SETTINGS)
    settings: GrpcClientSettings,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('user.Report', settings);
  }

  /**
   * Unary RPC for /user.Report/getReportTemperature
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ReportTemperatureReply>
   */
  getReportTemperature(
    requestData: thisProto.ReportRequest,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.ReportTemperatureReply> {
    return this.getReportTemperature$eventStream(
      requestData,
      requestMetadata
    ).pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /user.Report/getReportTemperature
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.ReportTemperatureReply>>
   */
  getReportTemperature$eventStream(
    requestData: thisProto.ReportRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.ReportTemperatureReply>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/user.Report/getReportTemperature',
      requestData,
      requestMetadata,
      requestClass: thisProto.ReportRequest,
      responseClass: thisProto.ReportTemperatureReply
    });
  }

  /**
   * Unary RPC for /user.Report/getStatisticsTemperature
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ReportStatisticReply>
   */
  getStatisticsTemperature(
    requestData: thisProto.ReportRequest,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.ReportStatisticReply> {
    return this.getStatisticsTemperature$eventStream(
      requestData,
      requestMetadata
    ).pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /user.Report/getStatisticsTemperature
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.ReportStatisticReply>>
   */
  getStatisticsTemperature$eventStream(
    requestData: thisProto.ReportRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.ReportStatisticReply>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/user.Report/getStatisticsTemperature',
      requestData,
      requestMetadata,
      requestClass: thisProto.ReportRequest,
      responseClass: thisProto.ReportStatisticReply
    });
  }

  /**
   * Unary RPC for /user.Report/attendanceInOut
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ReportAttendaceInOutReply>
   */
  attendanceInOut(
    requestData: thisProto.ReportRequest,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.ReportAttendaceInOutReply> {
    return this.attendanceInOut$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /user.Report/attendanceInOut
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.ReportAttendaceInOutReply>>
   */
  attendanceInOut$eventStream(
    requestData: thisProto.ReportRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.ReportAttendaceInOutReply>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/user.Report/attendanceInOut',
      requestData,
      requestMetadata,
      requestClass: thisProto.ReportRequest,
      responseClass: thisProto.ReportAttendaceInOutReply
    });
  }

  /**
   * Unary RPC for /user.Report/reportTempMinMax
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ReportTempMinMaxReply>
   */
  reportTempMinMax(
    requestData: thisProto.ReportRequest,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.ReportTempMinMaxReply> {
    return this.reportTempMinMax$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /user.Report/reportTempMinMax
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.ReportTempMinMaxReply>>
   */
  reportTempMinMax$eventStream(
    requestData: thisProto.ReportRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.ReportTempMinMaxReply>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/user.Report/reportTempMinMax',
      requestData,
      requestMetadata,
      requestClass: thisProto.ReportRequest,
      responseClass: thisProto.ReportTempMinMaxReply
    });
  }
}
