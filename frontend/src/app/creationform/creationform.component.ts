import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {API_URL} from '../env';
import { Thing } from '../things/thing.model';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-creationform',
  templateUrl: './creationform.component.html',
  styleUrls: ['./creationform.component.css']
})
export class CreationformComponent implements OnInit {

  constructor(private http: HttpClient) { }

  private static _handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete request.');
  }

  ngOnInit() {
  }

    // POST
  saveEmployee(employeeForm: NgForm): Observable<any> {
    console.log(employeeForm.value);
    return this.http
      .post(`${API_URL}/things`, JSON.stringify(employeeForm.value), {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
      .catch(CreationformComponent._handleError);
  }

}
