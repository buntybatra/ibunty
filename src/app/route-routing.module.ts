import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
	{ path: '', redirectTo: '/work', pathMatch: 'full' },
	{ path: 'work', component: WorkComponent },
	{ path: 'project-detail', component: ProjectDetailComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'blog', component: BlogComponent},
	{ path: 'blog-detail', component: BlogDetailComponent },
	{ path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { };
export const routingComponents = [WorkComponent, AboutComponent, ContactComponent, ProjectDetailComponent, BlogComponent , BlogDetailComponent] ;
