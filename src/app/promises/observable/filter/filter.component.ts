import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { filter, from,pipe, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [NgFor],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  member:any
  memderData:any
  memderData2:any
  memderData3:any
  ex1:any
  ex2: any;
  ex3:any;
  name:string='male'
  gender:string='gender'

  ngOnInit(): void {
    this.member=[
      {id:1,name:'jeel',gender:"male"},
      {id:2,name:'jayhind',gender:"male"},
      {id:3,name:'monika',gender:"female"},
      {id:4,name:'nayan',gender:"male"},
      {id:5,name:'radhika',gender:"female"},
      {id:6,name:'dhavni',gender:"female"},
      {id:7,name:'yash',gender:"male"},
      {id:8,name:'ashavi',gender:"male"},
      {id:9,name:'kuldeep',gender:"male"},
      {id:10,name:'Ishita',gender:"male"},
    ]

      // EX 1 :-
    this.memderData=from(this.member)
    this.memderData.pipe(
      filter((member:any)=>member.name.length>=6),
      toArray()
    ).subscribe((res: any)=>{
      this.ex1=res
    })

      // EX 2 :-
      this.memderData2=from(this.member)
      this.memderData2.pipe(
        filter((member:any) => member[`${this.gender}`] ==this.name),
        toArray()
      ).subscribe((res:any)=>{
        this.ex2=res
      })

      // EX 3 :-
      this.memderData3=from(this.member)
      this.memderData3.pipe(
        filter((member:any) => member.id<=6),
        toArray()
      ).subscribe((res:any)=>{
        this.ex3=res
      })
  }
}
