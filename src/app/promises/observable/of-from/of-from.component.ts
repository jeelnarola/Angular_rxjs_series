import { of } from 'rxjs';
import { ObservableService } from './../../../observableService/observable.service';
import { Component } from '@angular/core';
import { resolve } from 'path';

@Component({
  selector: 'app-of-from',
  standalone: true,
  imports: [],
  templateUrl: './of-from.component.html',
  styleUrl: './of-from.component.css'
})
export class OfFromComponent {
  obsMsg:any;
  promise!:Promise<any>
  constructor(private ObservableService:ObservableService){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

   const obs1=of('jeel','narola','vivek')
   obs1.subscribe(res=>{this.ObservableService.print(res,'elecontainer')})
   const obs2=of({a:'jeel',b:'vivek',c:'vishal'})
   obs2.subscribe(res=>{
    this.obsMsg=res
    console.log(this.obsMsg);

   })

   const obs3=of(['jeel','vivek','vishal'])
   obs3.subscribe((res:any)=>{
    return this.ObservableService.print(res, "Fromobse");
   })
   this.promise=new Promise(resolve=>{
    setTimeout(() => {
      return resolve("Promises Resolve...")
    }, 3000);
  })
  this.promise.then(res=>{
    console.log(res);
    this.ObservableService.print(res,'promises')
  })

  }

  // obs1.subscribe()
}
