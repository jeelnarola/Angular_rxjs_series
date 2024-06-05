import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {
  el!:Element;
  constructor() { }
  print(value: any,id: any){
    this.el=document?.createElement('li')
    this.el.innerHTML=value
    document.getElementById(id)?.appendChild(this.el)
  }
}
