import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";
import { User } from "../Models/User";
import {Router} from "@angular/router";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  users : User[];
  constructor(private userService: UserService,private router:Router) { }

  ngOnInit(): void {
    console.log('Utilisateur firebase');
    this.userService.getUsers().subscribe(users => {
      this.users = users;
     // console.log(this.users[0]['nom']);
    })
  }

}
