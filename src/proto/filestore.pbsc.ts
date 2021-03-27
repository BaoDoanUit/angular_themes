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
import * as thisProto from './filestore.pb';
import { GRPC_MY_STORE_FILE_CLIENT_SETTINGS } from './filestore.pbconf';
/**
 * Service client implementation for storefile.MyStoreFile
 */
@Injectable({
  providedIn: 'root'
})
export class MyStoreFileClient {
  private client: GrpcClient;

  constructor(
    @Optional()
    @Inject(GRPC_MY_STORE_FILE_CLIENT_SETTINGS)
    settings: GrpcClientSettings,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('storefile.MyStoreFile', settings);
  }

  /**
   * Unary RPC for /storefile.MyStoreFile/Upload
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.UploadRely>
   */
  upload(
    requestData: thisProto.UploadRequest,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.UploadRely> {
    return this.upload$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /storefile.MyStoreFile/Upload
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.UploadRely>>
   */
  upload$eventStream(
    requestData: thisProto.UploadRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.UploadRely>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/storefile.MyStoreFile/Upload',
      requestData,
      requestMetadata,
      requestClass: thisProto.UploadRequest,
      responseClass: thisProto.UploadRely
    });
  }

  /**
   * Unary RPC for /storefile.MyStoreFile/Download
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.DownloadRely>
   */
  download(
    requestData: thisProto.DownloadRequest,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.DownloadRely> {
    return this.download$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /storefile.MyStoreFile/Download
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.DownloadRely>>
   */
  download$eventStream(
    requestData: thisProto.DownloadRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.DownloadRely>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/storefile.MyStoreFile/Download',
      requestData,
      requestMetadata,
      requestClass: thisProto.DownloadRequest,
      responseClass: thisProto.DownloadRely
    });
  }

  /**
   * Unary RPC for /storefile.MyStoreFile/UploadBase64
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.UploadRely>
   */
  uploadBase64(
    requestData: thisProto.UploadRequestBase64,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.UploadRely> {
    return this.uploadBase64$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /storefile.MyStoreFile/UploadBase64
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.UploadRely>>
   */
  uploadBase64$eventStream(
    requestData: thisProto.UploadRequestBase64,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.UploadRely>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/storefile.MyStoreFile/UploadBase64',
      requestData,
      requestMetadata,
      requestClass: thisProto.UploadRequestBase64,
      responseClass: thisProto.UploadRely
    });
  }

  /**
   * Unary RPC for /storefile.MyStoreFile/DownloadBase64
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.DownloadBase64Rely>
   */
  downloadBase64(
    requestData: thisProto.DownloadRequest,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.DownloadBase64Rely> {
    return this.downloadBase64$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /storefile.MyStoreFile/DownloadBase64
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.DownloadBase64Rely>>
   */
  downloadBase64$eventStream(
    requestData: thisProto.DownloadRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.DownloadBase64Rely>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/storefile.MyStoreFile/DownloadBase64',
      requestData,
      requestMetadata,
      requestClass: thisProto.DownloadRequest,
      responseClass: thisProto.DownloadBase64Rely
    });
  }

  /**
   * Unary RPC for /storefile.MyStoreFile/Uploads
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.MultiUploadRely>
   */
  uploads(
    requestData: thisProto.MultiUploadRequest,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.MultiUploadRely> {
    return this.uploads$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /storefile.MyStoreFile/Uploads
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.MultiUploadRely>>
   */
  uploads$eventStream(
    requestData: thisProto.MultiUploadRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.MultiUploadRely>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/storefile.MyStoreFile/Uploads',
      requestData,
      requestMetadata,
      requestClass: thisProto.MultiUploadRequest,
      responseClass: thisProto.MultiUploadRely
    });
  }

  /**
   * Unary RPC for /storefile.MyStoreFile/Downloads
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.MultiDownloadRely>
   */
  downloads(
    requestData: thisProto.MultiDownloadRequest,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.MultiDownloadRely> {
    return this.downloads$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /storefile.MyStoreFile/Downloads
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.MultiDownloadRely>>
   */
  downloads$eventStream(
    requestData: thisProto.MultiDownloadRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.MultiDownloadRely>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/storefile.MyStoreFile/Downloads',
      requestData,
      requestMetadata,
      requestClass: thisProto.MultiDownloadRequest,
      responseClass: thisProto.MultiDownloadRely
    });
  }

  /**
   * Unary RPC for /storefile.MyStoreFile/UploadBase64s
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.MultiUploadRely>
   */
  uploadBase64s(
    requestData: thisProto.MultiUploadRequestBase64,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.MultiUploadRely> {
    return this.uploadBase64s$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /storefile.MyStoreFile/UploadBase64s
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.MultiUploadRely>>
   */
  uploadBase64s$eventStream(
    requestData: thisProto.MultiUploadRequestBase64,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.MultiUploadRely>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/storefile.MyStoreFile/UploadBase64s',
      requestData,
      requestMetadata,
      requestClass: thisProto.MultiUploadRequestBase64,
      responseClass: thisProto.MultiUploadRely
    });
  }

  /**
   * Unary RPC for /storefile.MyStoreFile/DownloadBase64s
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.MultiDownloadBase64Rely>
   */
  downloadBase64s(
    requestData: thisProto.MultiDownloadRequest,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.MultiDownloadBase64Rely> {
    return this.downloadBase64s$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /storefile.MyStoreFile/DownloadBase64s
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.MultiDownloadBase64Rely>>
   */
  downloadBase64s$eventStream(
    requestData: thisProto.MultiDownloadRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.MultiDownloadBase64Rely>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/storefile.MyStoreFile/DownloadBase64s',
      requestData,
      requestMetadata,
      requestClass: thisProto.MultiDownloadRequest,
      responseClass: thisProto.MultiDownloadBase64Rely
    });
  }
}
