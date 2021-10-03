import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Data } from '../dataModel';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() myData:Array<Data>=[{
    title:"",
    complete: true
  }];

  @Output() checkEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  triggerCheck(index:number){
    this.checkEvent.emit(index);
  }
}
