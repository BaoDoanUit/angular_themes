/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { GrpcCallType } from '@ngx-grpc/common';
import { GrpcWorkerServiceClientDef } from '@ngx-grpc/worker';
import * as thisProto from './user.pb';

/**
 * Client definition for use in worker
 */
export const GrpcWorkerUserClientDef: GrpcWorkerServiceClientDef = {
  serviceId: 'user.User',
  methods: {
    '/user.User/logIn': {
      type: GrpcCallType.unary,
      reqclss: thisProto.UserInfo,
      resclss: thisProto.UserReply
    }
  }
};

/**
 * Client definition for use in worker
 */
export const GrpcWorkerDeviceClientDef: GrpcWorkerServiceClientDef = {
  serviceId: 'user.Device',
  methods: {
    '/user.Device/getListInfo': {
      type: GrpcCallType.unary,
      reqclss: thisProto.DeviceRequest,
      resclss: thisProto.DeviceReply
    },
    '/user.Device/addDevice': {
      type: GrpcCallType.unary,
      reqclss: thisProto.DeviceInfo,
      resclss: thisProto.DeviceReply
    },
    '/user.Device/updateDevice': {
      type: GrpcCallType.unary,
      reqclss: thisProto.DeviceInfo,
      resclss: thisProto.DeviceReply
    }
  }
};

/**
 * Client definition for use in worker
 */
export const GrpcWorkerPersonClientDef: GrpcWorkerServiceClientDef = {
  serviceId: 'user.Person',
  methods: {
    '/user.Person/getListPerson': {
      type: GrpcCallType.unary,
      reqclss: thisProto.PersonRequest,
      resclss: thisProto.PersonReply
    },
    '/user.Person/addPerson': {
      type: GrpcCallType.unary,
      reqclss: thisProto.PersonInfo,
      resclss: thisProto.PersonReply
    },
    '/user.Person/updatePerson': {
      type: GrpcCallType.unary,
      reqclss: thisProto.PersonInfo,
      resclss: thisProto.PersonReply
    },
    '/user.Person/deletePerson': {
      type: GrpcCallType.unary,
      reqclss: thisProto.PersonInfo,
      resclss: thisProto.PersonReply
    }
  }
};

/**
 * Client definition for use in worker
 */
export const GrpcWorkerFaceClientDef: GrpcWorkerServiceClientDef = {
  serviceId: 'user.Face',
  methods: {
    '/user.Face/getListFace': {
      type: GrpcCallType.unary,
      reqclss: thisProto.FaceRequest,
      resclss: thisProto.FaceReply
    },
    '/user.Face/addFace': {
      type: GrpcCallType.unary,
      reqclss: thisProto.FaceRequest,
      resclss: thisProto.FaceReply
    },
    '/user.Face/deleteFace': {
      type: GrpcCallType.unary,
      reqclss: thisProto.FaceRequest,
      resclss: thisProto.FaceReply
    }
  }
};

/**
 * Client definition for use in worker
 */
export const GrpcWorkerAreaClientDef: GrpcWorkerServiceClientDef = {
  serviceId: 'user.Area',
  methods: {
    '/user.Area/getListArea': {
      type: GrpcCallType.unary,
      reqclss: thisProto.AreaRequest,
      resclss: thisProto.AreaReply
    },
    '/user.Area/addArea': {
      type: GrpcCallType.unary,
      reqclss: thisProto.AreaInfo,
      resclss: thisProto.AreaReply
    },
    '/user.Area/updateArea': {
      type: GrpcCallType.unary,
      reqclss: thisProto.AreaInfo,
      resclss: thisProto.AreaReply
    },
    '/user.Area/deleteArea': {
      type: GrpcCallType.unary,
      reqclss: thisProto.AreaInfo,
      resclss: thisProto.AreaReply
    },
    '/user.Area/existArea': {
      type: GrpcCallType.unary,
      reqclss: thisProto.AreaInfo,
      resclss: thisProto.AreaReply
    }
  }
};

/**
 * Client definition for use in worker
 */
export const GrpcWorkerReportClientDef: GrpcWorkerServiceClientDef = {
  serviceId: 'user.Report',
  methods: {
    '/user.Report/getReportTemperature': {
      type: GrpcCallType.unary,
      reqclss: thisProto.ReportRequest,
      resclss: thisProto.ReportTemperatureReply
    },
    '/user.Report/getStatisticsTemperature': {
      type: GrpcCallType.unary,
      reqclss: thisProto.ReportRequest,
      resclss: thisProto.ReportStatisticReply
    },
    '/user.Report/attendanceInOut': {
      type: GrpcCallType.unary,
      reqclss: thisProto.ReportRequest,
      resclss: thisProto.ReportAttendaceInOutReply
    },
    '/user.Report/reportTempMinMax': {
      type: GrpcCallType.unary,
      reqclss: thisProto.ReportRequest,
      resclss: thisProto.ReportTempMinMaxReply
    }
  }
};
