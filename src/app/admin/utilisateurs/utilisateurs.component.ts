import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../_services';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
})
export class UtilisateursComponent implements OnInit {
users: any = [];
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.getAllUser();
  }

  // tslint:disable-next-line:typedef
  getAllUser(){
    return this.userService.getAllUsers().subscribe((data) => {
      this.users = data;
      console.log(this.users);
    });
  }
}
