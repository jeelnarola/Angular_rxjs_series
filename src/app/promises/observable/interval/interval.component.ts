import { ObservableService } from './../../../observableService/observable.service';
import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-interval',
  standalone: true,
  imports: [],
  templateUrl: './interval.component.html',
  styleUrl: './interval.component.css'
})
export class IntervalComponent {
  osMsg:any=1;
  videoSbscription!:Subscription
  constructor(private ObservableService:ObservableService){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const broadCastVideo=interval(2000)
  this.videoSbscription =broadCastVideo.subscribe(res=>{
      console.log(++res);
    this.osMsg='video'+" "+ +res
    this.ObservableService.print(this.osMsg,"elContaier")
    if(res>=5){
      this.videoSbscription.unsubscribe()
    }
    })
  }
}
