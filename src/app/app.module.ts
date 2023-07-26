import { NgModule, APP_INITIALIZER ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { WeatherService } from '@app/_services';
import { HomeComponent } from './home';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor, appInitializer } from './_helpers';
import { AccountService } from './_services';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeModule } from './home/home.module';


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        AppRoutingModule,
        FormsModule,
        HomeModule
    ],
    declarations: [
        AlertComponent,
        AppComponent,
        HomeComponent,
    ],
    exports: [
      ],
      
    providers: [
        { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AccountService] },
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    
        // provider to create fake backend
        fakeBackendProvider,
        
        //Provider for the weather service
        WeatherService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

    bootstrap: [AppComponent]
})
export class AppModule { }
