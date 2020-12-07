import { Component, OnInit } from '@angular/core';
import { User, Profils } from '../_models';
import {ProfilsService} from '../_services';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  users: any = [];
  private data: any;

  constructor(private profilService: ProfilsService, private router: Router,
              private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.getUsers();
  }
// tslint:disable-next-line:typedef
getUsers(){
    // @ts-ignore
  const id = +this.route.snapshot.paramMap.get('id');
  // @ts-ignore
  this.profilService.getUserBypProfil(`${id}`).subscribe( (data ) => {
      this.users = data;
      console.log(this.users);
    } );
}
  goBack(): void {
    this.location.back();
  }
}
