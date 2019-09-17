import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';

@NgModule({
  //The components, directives, and pipes that belong to this NgModule.
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  //The subset of declarations that should be visible and usable in the component templates of other NgModules.
  exports: [],
  //Other modules whose exported classes are needed by component templates declared in this NgModule.
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  //Creators of services that this NgModule contributes to the global collection of services; they become accessible in all parts of the app. 
  //(You can also specify providers at the component level, which is often preferred.)
  providers: [],
  //The main application view, called the root component, which hosts all other app views. Only the root NgModule should set the bootstrap property
  bootstrap: [AppComponent]
})
export class AppModule { }
