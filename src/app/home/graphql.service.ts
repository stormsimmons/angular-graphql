import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Product } from '../model/product'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GraphqlService {

  private _apollo:Apollo;

  constructor(apollo: Apollo) {

    this._apollo = apollo;
  }

    getProducts(): Observable<any> {
    return this._apollo.query({
      query: gql`{
        products{
          Name
          Description
        }
      }`});
  }

}
