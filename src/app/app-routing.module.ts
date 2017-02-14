import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConnectionDetailComponent } from './connection-detail/connection-detail.component';
import { ConnectionsComponent } from './connections/connections.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/connections', pathMatch: 'full' },
  { path: 'connections', component: ConnectionsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
