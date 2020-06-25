import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders, HttpHeaderResponse, HttpRequest } from '@angular/common/http';
//import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

export interface Book {
    name;
    price;
    author;
  }
// import { AppGlobals } from '../shared/app.global';


@Injectable()
export class LibraryService {

    callurl: string = 'http://117.198.96.143:8082/mycampz/v3/';
  


    constructor(private http: HttpClient) { }

    Getdashboarddata(oprtype): Observable<any> {
        //let clcd=localStorage.getItem('clcd');
        let clcd=112;
        let aycd=2;
        let postdat={clcd:clcd,aycd:aycd}
        return this.http.get(this.callurl + 'libdashboard/'+clcd+'/'+aycd+'/'+oprtype)
        .pipe(map((data: any) => {
                console.log('retres', data);
                return data.dashboard;
            }));
    }


    getBooks() {
        return this.http.get<any>('assets/books.json')
          .toPromise()
          .then(res => <Book[]>res.data)
          .then(data => { return data; });
        }


}