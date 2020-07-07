import { Component } from '@angular/core';
import {UserService} from '../../servises/user.service';
import {User} from '../../models/User';
import {Post} from '../../models/Post';
import {Comment} from '../../models/Comment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: User[];


  constructor(private userService: UserService) {
    userService.users().subscribe(value => this.user = value);
  }


}
