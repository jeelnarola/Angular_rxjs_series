import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { from, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  standalone: true,
  imports: [NgFor],
  templateUrl: './pluck.component.html',
  styleUrl: './pluck.component.css'
})
export class PluckComponent {
  member:any
  member2:any
  data:any
  data2:any
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.member=[
      {name:"jeel",department:"Angular.js"},
      {name:"JayHind",department:".Net"},
      {name:"Meet",department:"Angular.js"},
      {name:"kamal",department:"react.js"},
    ]
    this.member2=[
      {name:"jeel",job:{title:'angular.js'}},
      {name:"JayHind",job:{title:'react.js'}},
      {name:"Meet",job:{title:'.net'}},
      {name:"kamal",job:{title:'node.js'} },
    ]

    from(this.member).pipe(
      pluck('name'),
      toArray()
    ).subscribe(res=>{
      this.data=res
    })
    from(this.member2).pipe(
      pluck('job','title'),
      toArray()
    ).subscribe(res=>{
      this.data2=res
    })
  }
}
