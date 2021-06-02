import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/observable/of';
import { images } from '../../data/image.data';

@Injectable()
export class ImageService {

  setGroupFilter$ = new Subject<any>();
  getGroupFilter = this.setGroupFilter$.asObservable();

  constructor() {}

  fetchImages(): Observable<any> {
    return Observable.of(images);
  }
}