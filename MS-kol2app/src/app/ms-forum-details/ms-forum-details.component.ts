import { Component, OnInit } from '@angular/core';
import {MS19062020Service} from '../services/ms-19-06-2020.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-ms-forum-details',
  templateUrl: './ms-forum-details.component.html',
  styleUrls: ['./ms-forum-details.component.css']
})
export class MSForumDetailsComponent implements OnInit {


  constructor(private postService: MS19062020Service, private activatedRoute: ActivatedRoute) { }

  public $post: any;
  public id: number;
  public image = '';
  public text: string;
  public title: string;

  ngOnInit(): void {
    let id: string;
    this.activatedRoute.paramMap.subscribe(params => {
      id = params.get('id');
    });
    if (id){
      this.postService.getById(id).subscribe(response => {
        this.image = response.image;
        this.text = response.text;
        this.title = response.title;
      });
    } else {
      this.id = 1;
    }
  }

}
