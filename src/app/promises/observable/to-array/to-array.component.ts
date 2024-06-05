import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { from, interval, of, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  standalone: true,
  imports: [NgFor],
  templateUrl: './to-array.component.html',
  styleUrl: './to-array.component.css'
})
export class ToArrayComponent {
  // Ex 01 :-
  stor:any
   // Ex 02 :-
  user:any[]=[
    { name:'jeel',age:29},
    { name:'meet',age:13},
    { name:'vishal',age:35},
    { name:'vivek',age:49},
  ]
  fromstor:any
    // Ex 03 :-
    ofStore:any

   ngOnInit(): void {
     // Ex 01 :-
    const source=interval(1000)
    source.pipe(take(5),toArray()).subscribe(res=>{
     this.stor=res
    })
     // Ex 02 :-
    const source2=from<any>(this.user)
    source2.pipe(toArray()).subscribe(res=>{
      this.fromstor=res
      console.log(this.fromstor)
    })
    // Ex 03 :-

    const source3=of('jeel','vishal','vivek')
    source3.pipe(toArray()).subscribe(res=>{
      this.ofStore=res
      console.log(this.ofStore)
    })
  }
}
