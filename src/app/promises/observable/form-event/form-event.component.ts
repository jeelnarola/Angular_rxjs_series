import { Component, ElementRef, ViewChild } from '@angular/core';
import { log } from 'console';
import { fromEvent } from 'rxjs';
import { ObservableService } from '../../../observableService/observable.service';

@Component({
  selector: 'app-form-event',
  standalone: true,
  imports: [],
  templateUrl: './form-event.component.html',
  styleUrl: './form-event.component.css'
})
export class FormEventComponent {

  @ViewChild('addbtn') addbtn:ElementRef | undefined

  constructor(private observableService:ObservableService){

  }
  ngAfterViewInit(): void {
    let count=1;
    fromEvent(this.addbtn?.nativeElement,'click').subscribe(res=>{
      let value=`video ` +count++
      this.observableService.print(value,'elelement')
      this.observableService.print(value,'elelement2')
    })
  }


}
