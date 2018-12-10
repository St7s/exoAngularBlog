import { Component } from '@angular/core';
import { Post } from './model/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'exoAngularBlog';

  posts = [
    new Post("Post n°1", "blah blah bla blip", -3),
    new Post("Post n°2", "lorem ipsu", 2),
    new Post("Post n°3", "wazaaaaaaaaaaa", 1),
    new Post("Post n°4", "zouuuuuuu", 0)
  ]

}
