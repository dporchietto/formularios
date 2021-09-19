import { Injectable } from '@angular/core';
import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs/Observable";

interface Course {
  description: string;
  courseListIcon:string;
  iconUrl:string;
  longDescription:string;
  url:string;
}

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }
}





@Component({
  selector: 'app-root',
  template: `
      <ul *ngIf="courses$ | async as courses else noData">
          <li *ngFor="let course of courses">
              {{course.description}}
          </li> 
      </ul>
      <ng-template #noData>No Data Available</ng-template>
  `})
export class AppComponent implements OnInit {
    courses$: Observable<Course[]>;

    constructor(private http:HttpClient) {
    }

    ngOnInit() {
        this.courses$ = this.http
            .get<Course[]>("/courses.json")
            .map(data => _.values(data))
            .do(console.log);
    }
}
