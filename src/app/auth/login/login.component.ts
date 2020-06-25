import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 data:any={};
  user: any = {};
  message: string;
  constructor(private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.Getaylist();

  }

  acYears: any = {};

  Getaylist() {
    this.httpClient.get('http://106.51.136.76:8082/mycampz/v3/Aylist', {responseType: 'json'}).subscribe(
      data => { 
        console.log(data.aylist);
        this.data = data;
        this.acYears = data.aylist;
        console.log(this.acYears);
      });
  }



  login()
  {
    console.log(this.user);
    
    this.httpClient.post('http://106.51.136.76:8082/mycampz/v3/login', {username:this.user.username, password:this.user.password, fyear:this.user.fyear, scode:this.user.scode}).subscribe(
      data => {
        console.log(data);
        this.data = data;

        if(this.data.status=="error"){
        //  localStorage.setItem('ldcnt', '1');
        this.message = "Wrong login credentials";
        }else{
          
          this.router.navigate(['/app/home']);
        }

      }, error => console.error(error));


  }

}
