/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { GrpcCallType } from '@ngx-grpc/common';
import { GrpcWorkerServiceClientDef } from '@ngx-grpc/worker';
import * as thisProto from './filestore.pb';

/**
 * Client definition for use in worker
 */
export const GrpcWorkerMyStoreFileClientDef: GrpcWorkerServiceClientDef = {
  serviceId: 'storefile.MyStoreFile',
  methods: {
    '/storefile.MyStoreFile/Upload': {
      type: GrpcCallType.unary,
      reqclss: thisProto.UploadRequest,
      resclss: thisProto.UploadRely
    },
    '/storefile.MyStoreFile/Download': {
      type: GrpcCallType.unary,
      reqclss: thisProto.DownloadRequest,
      resclss: thisProto.DownloadRely
    },
    '/storefile.MyStoreFile/UploadBase64': {
      type: GrpcCallType.unary,
      reqclss: thisProto.UploadRequestBase64,
      resclss: thisProto.UploadRely
    },
    '/storefile.MyStoreFile/DownloadBase64': {
      type: GrpcCallType.unary,
      reqclss: thisProto.DownloadRequest,
      resclss: thisProto.DownloadBase64Rely
    },
    '/storefile.MyStoreFile/Uploads': {
      type: GrpcCallType.unary,
      reqclss: thisProto.MultiUploadRequest,
      resclss: thisProto.MultiUploadRely
    },
    '/storefile.MyStoreFile/Downloads': {
      type: GrpcCallType.unary,
      reqclss: thisProto.MultiDownloadRequest,
      resclss: thisProto.MultiDownloadRely
    },
    '/storefile.MyStoreFile/UploadBase64s': {
      type: GrpcCallType.unary,
      reqclss: thisProto.MultiUploadRequestBase64,
      resclss: thisProto.MultiUploadRely
    },
    '/storefile.MyStoreFile/DownloadBase64s': {
      type: GrpcCallType.unary,
      reqclss: thisProto.MultiDownloadRequest,
      resclss: thisProto.MultiDownloadBase64Rely
    }
  }
};
