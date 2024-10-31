import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { LoadingIndicatorComponent } from './ui/loading-indicator/loading-indicator.component'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingInterceptor } from './interceptor/loading-interceptor';
import { FileUploadComponent } from './ui/file-upload/file-upload.component';


@NgModule({ 
    declarations: [
        AppComponent,
        LoadingIndicatorComponent,
        FileUploadComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule, MatProgressSpinnerModule,
        AppRoutingModule], providers: [{
            provide: HTTP_INTERCEPTORS,
            useClass: LoadingInterceptor,
            multi: true,
          },
          provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
