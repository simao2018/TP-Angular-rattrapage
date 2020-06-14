import { Component, OnInit, Input } from '@angular/core';
import { UserService } from "../services/user.service";
import { User } from "../Models/User";
import {NgForm} from "@angular/forms";
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title = 'login tp-angular';
  users : User[];
  err : string;
  constructor(private userService: UserService,private router:Router) { }

  ngOnInit(): void {
    console.log('Get User From Firebase');
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    })
  }

  onSubmit(form: NgForm){
    //console.log(form.value['login']);
    const login = form.value['login'];
    const pass = form.value['pass'];
    for(let i=0;i<this.users.length;i++){
      if(login == this.users[i]['login'] && pass == this.users[i]['pass']){
        console.log(this.users[i]['nom']+' is connected');
        this.router.navigate(['list']);
        break;
      }else{
        this.err = 'Invalid user';
        console.warn(this.err);
      }
    }

  }

}
