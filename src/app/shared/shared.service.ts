import {Injectable, EventEmitter} from '@angular/core';
import {Subject} from 'rxjs';
// @Injectable makes to available services in root level.
@Injectable({providedIn:'root'})
export class SharedService {
  //chatMessageAdded = new EventEmitter();
  //or
  chatMessageAdded = new Subject();
}