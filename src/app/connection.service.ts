import { Injectable } from '@angular/core';

import { Connection } from './connection';
import { CONNECTIIONS } from './mock-connetcions';

@Injectable()
export class ConnectionService {

  getConnections() {
    return Promise.resolve(CONNECTIIONS);
  }
}
