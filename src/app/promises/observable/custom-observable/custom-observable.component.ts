import { CommonModule } from '@angular/common';
import { ObservableService } from './../../../observableService/observable.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-observable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-observable.component.html',
  styleUrl: './custom-observable.component.css'
})
export class CustomObservableComponent {
  constructor (private ObservableService:ObservableService){

  }
  ngOnInit():void{
    const customObserval=Observable.create((observer: any)=>{
      setTimeout(() => {
        observer.next('Angular.Js')
      }, 1000);
      setTimeout(() => {
        observer.next('react.Js')
      }, 2000);
      setTimeout(() => {
        observer.next('node.Js')
      }, 3000);
    })
    customObserval.subscribe((res: any)=>{
      console.log(res)
      this.ObservableService.print(res,"CustomeOb")

    })
  }
}
