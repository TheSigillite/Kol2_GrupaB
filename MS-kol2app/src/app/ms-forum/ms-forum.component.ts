import { Component, OnInit } from '@angular/core';
import {MS19062020Service} from '../services/ms-19-06-2020.service';

@Component({
  selector: 'app-ms-forum',
  templateUrl: './ms-forum.component.html',
  styleUrls: ['./ms-forum.component.css']
})
export class MSForumComponent implements OnInit {

  constructor(private service: MS19062020Service) { }
  public $items: any;

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.service.getAll().subscribe(response =>{
      this.$items = response;
      console.log(this.$items);
    });
  }

}
