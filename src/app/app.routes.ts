import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './promises/promise/promise.component';
import { ObservableComponent } from './promises/observable/observable.component';
import { FormEventComponent } from './promises/observable/form-event/form-event.component';
import { ListComponent } from './promises/observable/list/list.component';
import { IntervalComponent } from './promises/observable/interval/interval.component';
import { OfFromComponent } from './promises/observable/of-from/of-from.component';
import { ToArrayComponent } from './promises/observable/to-array/to-array.component';
import { CustomObservableComponent } from './promises/observable/custom-observable/custom-observable.component';
import { MapComponent } from './promises/observable/map/map.component';
import { PluckComponent } from './promises/observable/pluck/pluck.component';
import { FilterComponent } from './promises/observable/filter/filter.component';

export const routes: Routes = [
  {
    path:'promise',
    component:PromiseComponent
  },
  {
    path:'observable',
    component:ObservableComponent,
    children:[
      {
        path:'',
        component:ListComponent
      },
      {
        path:'fromEvent',
        component:FormEventComponent
      },
      {
        path:'interval',
        component:IntervalComponent
      },
      {
        path:"OfFrom",
        component:OfFromComponent
      },
      {
        path:"toArray",
        component:ToArrayComponent
      },
      {
        path:"customObservable",
        component:CustomObservableComponent
      },
      {
        path:"map",
        component:MapComponent
      },
      {
        path:'pluck',
        component:PluckComponent
      },
      {
        path:"filter",
        component:FilterComponent
      }
    ]
  },
  {
    path:"**",
    component:PromiseComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
