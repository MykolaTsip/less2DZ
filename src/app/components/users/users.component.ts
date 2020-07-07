import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {UserService} from '../../servises/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

 @Input()
  user: User;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  showPost(id: number): void {
    this.userService.posts(id).subscribe(value => console.log(value));

  }

  showComm(id: number): void {
    this.userService.comments(id).subscribe(value => console.log(value));

  }
}
