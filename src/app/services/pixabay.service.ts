import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Response } from '../beans/response';
import { Hit } from '../beans/hit';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';

@Injectable()
export class PixabayService {
  private API_KEY = '6940021-6a38cf1143bb8a861d563f4d0';
  private server = 'https://pixabay.com/api?key=' + this.API_KEY;
  private listPic: Observable<Response> = null;
  currentKeyword = '';

  constructor(private http: HttpClient) {}

  /**
   * Queries pixabay API with the given keywords
   * @param {string} keywords
   * @returns {Observable<Response>}
   */
  searchImages(keywords: string): Observable<Response> {
    const url = this.server + '&q=' + encodeURIComponent(keywords);
    console.log('Service called for: ', keywords);

    if (this.currentKeyword === keywords && this.listPic) {
      return this.listPic;
    } else {
      console.log('HTTP - ', url);
      this.currentKeyword = keywords;
      return this.listPic = this.http.get<Response>(url);
    }
  }

  /**
   * flatMap applies a function on each member of the observable sequence and turn the result in one observable sequence
   * Then filter the array of Hit so that it returns only 1 result matching the given id
   * @param {number} id
   * @returns {Observable<Hit>}
   */
  getImage(id: number): Observable<Hit> {
    if (this.listPic) {
      return this.listPic
        .flatMap(response => response.hits)
        .filter(hit => hit.id === id);
    }
  }
}
