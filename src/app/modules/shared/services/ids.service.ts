import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Parameters } from '../models/parameters.model';

@Injectable({
  providedIn: 'root'
})
export class IdService {
  constructor(private activeRoute: ActivatedRoute) { }

  get(reference: Parameters): Subscription {
    return this.activeRoute.params.subscribe(params => reference.currentId = params.id);
  }
}
