import {Component, Input, OnInit} from '@angular/core';
import {ProfilsService} from '../_services';
import {Router} from '@angular/router';
import { Profils } from '../_models';
@Component({
  templateUrl: './create-profil.component.html',
})
export class CreateProfilComponent implements OnInit {

  @Input() newprofil: Profils = { id: 0, libelle: '', abbr: ''};
  constructor(private profilService: ProfilsService, private router: Router) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:no-shadowed-variable typedef
  addProfil() {
    // @ts-ignore
    this.profilService.createProfil(this.newprofil).subscribe((data: {}) => {
      this.router.navigate(['/admin']);
    });
  }
}
