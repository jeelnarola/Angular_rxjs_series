import { CommonModule } from '@angular/common';
import { ObservableService } from './../../../observableService/observable.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { interval, Subscription, pipe, map, tap, Observable } from 'rxjs';

@Component({
  selector: 'app-tap',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './tap.component.html',
  styleUrl: './tap.component.css'
})
export class TapComponent {
  ex1:any
  ex2:any
  tapname:any;
  tapcolor:any;
  source:any;
  myColor:string='';
  obsSubscribe!:Subscription
  obsSubscribe2!:Subscription
  constructor(private ObservableService:ObservableService){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.tapname=['jeel','jayhind','vishal','nayan','vivek','yash','hardik','kapur']
    this.tapcolor=['red','blue','pink','yellow','brown','green','maroon','purple']

    this.source=interval(2000)
    this.obsSubscribe=this.source.pipe(
      tap(ele=>{
        if(ele==this.tapname.length){
          this.obsSubscribe.unsubscribe()
        }
      }),
      map((ele:any)=>this.tapname[ele])
    ).subscribe((res:any)=>{
    this.ObservableService.print(res,'tap')
    })
    this.obsSubscribe2=this.source.pipe(
      tap((ele:any)=>{
        this.myColor=this.tapcolor[ele]
        if(ele==this.tapcolor.length){
          this.obsSubscribe2.unsubscribe()
        }
      }),
      map((ele:any)=>this.tapcolor[ele])
    ).subscribe((res:any)=>{
      // console.log(res);

    this.ObservableService.print(res,'tapcolor')
    })
  }
}
