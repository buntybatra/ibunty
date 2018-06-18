import { Component, OnInit } from '@angular/core';
import { HttpService } from '../servies/http.service'; 

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',,
  providers: [HttpService]
})
export class ProjectDetailComponent implements OnInit {

  public projectinfo: any;
  constructor ( private getProjectDetails: HttpService ) {}

  public ProjectDetails(){
  	this.getProjectDetails.projectDetailsdata().subscribe(res => this.projectinfo = res.json());
  }


}
