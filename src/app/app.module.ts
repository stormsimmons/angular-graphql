import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GraphqlService } from './home/graphql.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [GraphqlService],
  bootstrap: [AppComponent]
})
export class AppModule {


  constructor(apollo: Apollo,
    httpLink: HttpLink) {

    apollo.create({
      link: httpLink.create({
        uri: 'http://localhost:4000/graphql',
      }),
      cache: new InMemoryCache()
    });
    
  }

}
