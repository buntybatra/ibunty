import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {any} from "codelyzer/util/function";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
})
export class ProjectDetailComponent implements OnInit {

  constructor(private http: HttpClient){
  }

  project_title = 'hello';
  public project_obj = any;

  ngOnInit(): void {
    this.http.get('https://profile.ibunty.com/project/2?_format=json').subscribe(data => {
      this.project_obj = data[0];
      console.log(data[0]);

    });
  }

}
