import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  public behaviorSubject = new BehaviorSubject(1);
  constructor() {}
}
