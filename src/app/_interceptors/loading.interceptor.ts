import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GrpcEvent, GrpcMessage, GrpcRequest } from '@ngx-grpc/common';
import { GrpcHandler, GrpcInterceptor } from '@ngx-grpc/core';
import { BusyService } from '../_services/busy.service';
import { delay, finalize } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements GrpcInterceptor {

  constructor(private busyService: BusyService) {}
  intercept<Q extends GrpcMessage, S extends GrpcMessage>(request: GrpcRequest<Q, S>, next: GrpcHandler): Observable<GrpcEvent<S>> {
    this.busyService.busy();
    return next.handle(request).pipe(
      delay(1000),
      finalize(()=>{
        this.busyService.idle();
      })
    );
  }

}
