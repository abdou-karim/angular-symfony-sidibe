import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../_models';
import {ProfilsService, UsersService} from '../../_services';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient, HttpEventType, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
})
export class AddUserComponent implements OnInit {
// @ts-ignore
  @Input() newUser: { id: number } = {id: 0,  username: '', name: '', lastName: '', fisrtName: '', email: '', password: '', photo: ''};
  user: User = new User();
  profils: any = [];
  selectedFile: File;

  // tslint:disable-next-line:max-line-length
  constructor(private userService: UsersService, private router: Router,
              private profilService: ProfilsService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllProfils();
    this.onUpload();
  }

  // tslint:disable-next-line:typedef
  addUser(){
    this.userService.addUser(this.user).subscribe((data: {}) => {
      this.user = new User();
      this.router.navigate(['/admin']);
    });
  }
  // tslint:disable-next-line:typedef
  getAllProfils(){
    // @ts-ignore
    return this.profilService.getAllProfilsForUser().subscribe(( data) => {
      this.profils = data;
    });
  }
  // tslint:disable-next-line:typedef
  onFileSelected(event){
    this.selectedFile = (event.target.file[0] as File);
  }
  // tslint:disable-next-line:typedef
  onUpload(){
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post('http://127.0.0.1:8000/api/admin/users', fd, {
      reportProgress: true,
      observe: 'events',
    })
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
        console.log(event);
        }else if (event.type === HttpEventType.Response) {
        console.log(event)    ;
        }
      });
  }

}

