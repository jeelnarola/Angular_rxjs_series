import { Component } from '@angular/core';
import { resolve } from 'path';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-promise',
  standalone: true,
  imports: [],
  templateUrl: './promise.component.html',
  styleUrl: './promise.component.css'
})
export class PromiseComponent {

        // PROMISES START

  // buyLeptop: Promise<any>; // Declare buyLeptop without initialization
  // dellavailable(){
  //   return false
  // }
//   constructor() {
//     this.buyLeptop = new Promise<any>((resolve, reject) => {
//       if (this.dellavailable()) {
//         setTimeout(() => {
//           resolve("promise is Resolve");
//         }, 3000);
//        }else{
//         setTimeout(() => {
//           reject("reject is Resolve");
//         }, 3000);
//        }
//     });

//     this.buyLeptop.then((result) => {
//       console.log(result)
//     }).catch((err) => {
//       console.log(err);

//     });
//   }

        // PROMISES END



        buyLeptop!: Promise<any>;
        data:string='Data'
        data2:string='Data'
        data3:string='Data'
        dell:any={
          brand:'Dell',
          hardisk:'2 TB',
          color:'black'
        }
        promises(){
           return this.buyLeptop=new Promise<any>((resolve,reject)=>{
            return setTimeout(() => {
              return resolve(this.dell)
            }, 3000);
          })
        }

        // EX : 1 WITH PROMISE

        fetch1(){
          this.promises()
          console.log("l");

          this.data='Fetching data...'
          this.buyLeptop.then((res:any)=>{
            this.data=JSON.stringify(res)
          })
        }

        // EX : 2 WITH ASYNC / AWAIT

        fetch2=async()=>{
          this. data2='Fetching data...'
          let data= await this.promises()
          this.data2=JSON.stringify(data)
        }

        // EX : 3 WITH API

         buyLeptop2=fetch("https://jsonplaceholder.typicode.com/posts")
         .then((res)=>res.json())

        //PROMISE WITH API
        //   fetch3=()=>{
        //     this.buyLeptop2.then(res=>{
        //       this.data3=JSON.stringify(res)
        //     })
        //  }

        //ASYNC / AWAIT WITH API

        fetch3 =async()=>{
          this.data3='Fetching data...'
          let res=await this.buyLeptop2
          this.data3=res
        }

}
