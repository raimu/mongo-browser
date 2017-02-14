import { Component, OnInit } from '@angular/core';

import { Connection } from '../connection';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.css']
})
export class ConnectionsComponent implements OnInit {
  connections: Connection[];

  constructor(private connectionService: ConnectionService) { }

  ngOnInit() {
    this.getConnections();
  }

  create() {
    const connection = new Connection();
    this.connectionService.create(connection);
  }

  private getConnections() {
    this.connectionService.getConnections()
      .then(connections => this.connections = connections);
  }

}
