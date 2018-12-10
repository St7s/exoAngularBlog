import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.less']
})
export class PostListItemComponent implements OnInit {

  @Input() post: any;

  constructor() { }

  ngOnInit() {
  }

  getLoveItsBoolColor() {
    return this.post.loveIts > 0;
  }

  moreLoveIts() {
    this.post.loveIts++;
  }

  lessLoveIts() {
    this.post.loveIts--;
  }

}
