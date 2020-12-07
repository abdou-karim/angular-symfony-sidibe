import { Component, OnInit } from '@angular/core';
import {ProfilsService} from '../_services';
import { Profils } from '../_models';
import {Router} from '@angular/router';
import {UsersComponent} from './users.component';

@Component({
  selector: `app-profils`,
  templateUrl: './profils.component.html',

})
export class ProfilsComponent implements OnInit {
  profils: any = [];
  private data: any;
  pager = {};
  pageOfItems = [];
  constructor( private profilService: ProfilsService , private router: Router) { }

  ngOnInit(): void {
    this.getAllProfils();
  }
  // tslint:disable-next-line:typedef
  deleteUser(id: number) {
    this.profilService.delete(id)
      .subscribe(() => this.getAllProfils());
  }
// tslint:disable-next-line:typedef
getAllProfils(){
    // @ts-ignore
  return this.profilService.getAllProfils().subscribe(( data) => {
      this.profils = data;
      console.log(this.profils.offset)
      ;
    });
}


  // tslint:disable-next-line:typedef
/*  getMyUser(id: number){
    return  this.userTs.getUsers(id);
  }*/

}
