import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CounterModule } from './counter/components/counter/counter.module';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/hero/list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
