import { Component } from '@angular/core';
import { Data } from './dataModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

    textValue=""
    list:Array<Data>=[
      {
        title: "A default Item",
        complete: false
      },
      {
        title: "A completed Default Item",
        complete: true
      }
    ]

    addTask(){
      this.list.push({
        title:this.textValue,
        complete: false
      })
    } 

    removeTask(){
      let a:number[]=[];
      this.list.forEach((element, index)=>{
        if(element.complete)
        {
          a.push(index);
        }
      });
      for(var index=a.length-1;index>=0;index--){
        this.list.splice(a[index],1);
      }
    }


    checkVal=(index:number)=>{
      this.list[index].complete=!this.list[index].complete;
    }
}
