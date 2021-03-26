import { Injectable } from '@angular/core'
import { Observable, throwError } from 'rxjs'
import { GrpcHandler, GrpcInterceptor } from '@ngx-grpc/core'
import {
  GrpcMessage,
  GrpcRequest,
  GrpcEvent,
  GrpcStatusEvent,
} from '@ngx-grpc/common'
import { delay, map } from 'rxjs/operators'
import { AuthService } from '../_services/auth.service'
import { ToastrService } from 'ngx-toastr'
import {
  Router,
} from '@angular/router'

@Injectable()
export class ErrorInterceptor implements GrpcInterceptor {
  constructor(
    private toastr: ToastrService,
    private authService: AuthService
  ) {}
  intercept<Q extends GrpcMessage, S extends GrpcMessage>(
    request: GrpcRequest<Q, S>,
    next: GrpcHandler,
  ): Observable<GrpcEvent<S>> {
    return next.handle(request).pipe(
      delay(1000),
      map((event: GrpcEvent<any>) => {
        if (event instanceof GrpcStatusEvent) {
          if ([16].includes(event.code)) {
            this.authService.logOut();
            this.toastr.show('You must login again.');
          }
        }
        return event
      }),
    )
  }
}
