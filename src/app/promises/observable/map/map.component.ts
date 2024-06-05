import { Component } from '@angular/core';
import { log } from 'console';
import { from, interval, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
  msg1:any
  msg2:any
  msg3:any
  sub1!:Subscription
  sub2!:Subscription
  ngOnInit(): void {
    const broadCastVideo=interval(1000)
    this.sub1=broadCastVideo.pipe(
      map(data=>'video'+" " +data)
    ).subscribe(res=>{
     this.msg1=res
  })
  setTimeout(() => {
    this.sub1.unsubscribe()
  }, 10000);

  this.sub2=broadCastVideo.pipe(
    map(data=>10+data)
  ).subscribe(res=>{
   this.msg2=res
   if(res>=20){
    this.sub2.unsubscribe()
   }
  })
   const member=from([
    {id:1,name:"jeel",department:"Angular.js"},
    {id:2,name:"vivek",department:"Angular.js"},
    {id:3,name:"Vishal",department:"react.js"},
    {id:4,name:"jayHind",department:".net"},
    {id:5,name:"narola",department:"Angular.js"},
   ])
   member.pipe(map(data=>({name:data.name ,department:data.department}))).subscribe(res=>{
    this.msg3=res
   })
  }

}
