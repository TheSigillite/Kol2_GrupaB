import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ms-forum-item',
  templateUrl: './ms-forum-item.component.html',
  styleUrls: ['./ms-forum-item.component.css']
})
export class MSForumItemComponent implements OnInit {

  constructor() { }
  @Input() image: string;
  @Input() title: string;
  @Input() text: string;
  @Input() id: number;
  ngOnInit(): void {
  }

}
