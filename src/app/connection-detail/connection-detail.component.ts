import { Component, Input } from '@angular/core';

import { Connection } from '../connection';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-connection-detail',
  templateUrl: './connection-detail.component.html',
  styleUrls: ['./connection-detail.component.css']
})
export class ConnectionDetailComponent {
  @Input()
  connection: Connection;

  constructor(private connectionService: ConnectionService) { }

  save() {
    this.connectionService.save(this.connection)
      .then(response => this.connection._rev = response.rev);
  }
}
