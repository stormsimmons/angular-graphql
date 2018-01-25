import { Component, OnInit } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Product } from '../model/product'
import { GraphqlService } from './graphql.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private _service: GraphqlService;

  products:Product[];

  constructor(service: GraphqlService) {
    this._service = service;
  }
    async ngOnInit() {
     this._service.getProducts().subscribe(res => this.products = res.data.products);
    console.log(this.products)
  }
}
