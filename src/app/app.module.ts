import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { NgxSpinnerModule} from 'ngx-spinner'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NavComponent } from './nav/nav.component'
import { FormsModule } from '@angular/forms'
import { BsDropdownModule, BsDropdownConfig } from 'ngx-bootstrap/dropdown'
import { HomeComponent } from './home/home.component'
import { RegisterComponent } from './register/register.component'
import {
  GrpcConsoleLoggerInterceptor,
  GRPC_CLIENT_FACTORY,
  GRPC_CONSOLE_LOGGER_ENABLED,
  GRPC_INTERCEPTORS,
} from '@ngx-grpc/core'
import { environment } from 'src/environments/environment'
import { GrpcClientSettings } from '@ngx-grpc/common'
import { GrpcWebClientFactory } from '@ngx-grpc/grpc-web-client'
import { GrpcWorkerClientFactory, GRPC_WORKER } from '@ngx-grpc/worker-client'
import {
  GRPC_ACCOUNT_CLIENT_SETTINGS,
  GRPC_AREA_CLIENT_SETTINGS,
  GRPC_DEVICE_CLIENT_SETTINGS,
  GRPC_PERSON_CLIENT_SETTINGS,
  GRPC_REPORT_CLIENT_SETTINGS,
  GRPC_USER_CLIENT_SETTINGS,
} from 'src/proto/user.pbconf'
import { MemberListComponent } from './members/member-list/member-list.component'
import { MemberDetailComponent } from './members/member-detail/member-detail.component'
import { ListsComponent } from './lists/lists.component'
import { MessagesComponent } from './messages/messages.component'
import { SharedModule } from './_modules/shared.module';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component'
import { LoadingInterceptor } from './_interceptors/loading.interceptor'
import { ErrorInterceptor } from './_interceptors/error.interceptor'
import { NgxLocalStorageModule } from 'ngx-localstorage'
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    MemberDetailComponent,
    ListsComponent,
    MessagesComponent,
    MemberCardComponent,
    MemberEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule,
    NgxSpinnerModule,
    NgxLocalStorageModule.forRoot()
  ],
  providers: [
    {
      provide: BsDropdownConfig,
      useValue: { isAnimated: true, autoClose: true },
    },
    { provide: GRPC_CLIENT_FACTORY, useClass: GrpcWebClientFactory },
    {
      provide: GRPC_USER_CLIENT_SETTINGS,
      useValue: {
        host: 'https://stvg.vn:59022',
      } as GrpcClientSettings,
    },
    {
      provide: GRPC_PERSON_CLIENT_SETTINGS,
      useValue: {
        host: 'https://stvg.vn:59022',
      } as GrpcClientSettings,
    },
    {
      provide: GRPC_DEVICE_CLIENT_SETTINGS,
      useValue: {
        host: 'https://stvg.vn:59022',
      } as GrpcClientSettings,
    },
    {
      provide: GRPC_AREA_CLIENT_SETTINGS,
      useValue: {
        host: 'https://stvg.vn:59022',
      } as GrpcClientSettings,
    },
    {
      provide: GRPC_ACCOUNT_CLIENT_SETTINGS,
      useValue: {
        host: 'https://stvg.vn:59022',
      } as GrpcClientSettings,
    },
    {
      provide: GRPC_REPORT_CLIENT_SETTINGS,
      useValue: {
        host: 'https://stvg.vn:59022',
      } as GrpcClientSettings,
    },
    {
      provide: GRPC_INTERCEPTORS,
      useClass: GrpcConsoleLoggerInterceptor,
      multi: true,
    },
    {
      provide: GRPC_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    {
      provide: GRPC_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
    {
      provide: GRPC_CONSOLE_LOGGER_ENABLED,
      useFactory: () =>
        localStorage.getItem('GRPC_CONSOLE_LOGGER_ENABLED') === 'true' ||
        !environment.production,
    },
    {
      provide: GRPC_WORKER,
      useFactory: () => new Worker('./grpc.worker', { type: 'module' }),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}


/*CONFIG BACKEND*/
/*
  VPS: https://stvg.vn:59022
  Docker: https://stvg.vn:59022
*/ 