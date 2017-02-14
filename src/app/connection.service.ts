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

  create(item: Connection): Promise<Connection> {
    item._id = this.generateNewId();
    this.db.put(item);
    return Promise.resolve(item);
  }

  save(connection: Connection): Promise<PouchDB.Core.Response> {
    return this.db.put(connection);
  }

  private generateNewId(): string {
    let time = new Date().getTime();
    return `${this.idPrefix}-${time}`;
  }
}
