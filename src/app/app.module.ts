import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ConnectionsComponent } from './connections/connections.component';
import { ConnectionService } from './connection.service';
import { ConnectionDetailComponent } from './connection-detail/connection-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectionsComponent,
    ConnectionDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ConnectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
