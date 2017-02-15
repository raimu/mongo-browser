import { Injectable } from '@angular/core';
import 'pouchdb';

import { Connection } from './connection';
import { CONNECTIIONS } from './mock-connetcions';

@Injectable()
export class ConnectionService {
  private db = new PouchDB('mongo-browser');
  private idPrefix = 'connection';

  getConnections(): Promise<Connection[]> {
    let result: Connection[] = [];
    this.db.allDocs({ include_docs: true })
      .then((doc) => {
        doc.rows.forEach((document) => {
          result.push(<Connection>document.doc);
        });
      });
    return Promise.resolve(result);
  }

  create(connection: Connection): Promise<Connection> {
    connection._id = this.generateNewId();
    this.db.put(connection);
    return Promise.resolve(connection);
  }

  save(connection: Connection): Promise<PouchDB.Core.Response> {
    return this.db.put(connection);
  }

  delete(connection: Connection): Promise<PouchDB.Core.Response> {
    return this.db.remove(<PouchDB.Core.RemoveDocument>connection);
  }

  private generateNewId(): string {
    let time = new Date().getTime();
    return `${this.idPrefix}-${time}`;
  }
}
