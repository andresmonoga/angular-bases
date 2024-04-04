import { NgModule } from "@angular/core";
import { CounterComponent } from "./counter.components";




@NgModule({
  declarations :[
    CounterComponent
  ],
  exports:[
    CounterComponent
  ]
})
export class CounterModule{}
