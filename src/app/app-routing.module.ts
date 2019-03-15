import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobadListComponent } from './jobad-list/jobad-list.component';
import { JobadCreateComponent } from './jobad-create/jobad-create.component';
import { JobadEditComponent } from './jobad-edit/jobad-edit.component';
import { EmployerListComponent } from './employer-list/employer-list.component';
import { EmployerCreateComponent } from './employer-create/employer-create.component';
import { EmployerEditComponent } from './employer-edit/employer-edit.component';
import { SubmissionListComponent } from './submission-list/submission-list.component';
import { SubmissionCreateComponent } from './submission-create/submission-create.component';
import { SubmissionEditComponent } from './submission-edit/submission-edit.component';
import { ResumeListComponent } from './resume-list/resume-list.component';
import { ResumeCreateComponent } from './resume-create/resume-create.component';
import { ResumeEditComponent } from './resume-edit/resume-edit.component';
import { LetterCreateComponent } from './letter-create/letter-create.component';
import { LetterListComponent } from './letter-list/letter-list.component';
import { LetterEditComponent } from './letter-edit/letter-edit.component';
import { HomeFrontComponent } from './home-front/home-front.component';
import { ImmediateSubmissionComponent } from './immediate-submission/immediate-submission.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home-front',
    pathMatch: 'full'
  },
  {
    path: 'jobad-list',
    component: JobadListComponent
  },
  {
    path: 'jobad-create',
    component: JobadCreateComponent
  },
  {
    path: 'jobad-edit/:id',
    component: JobadEditComponent
  },
  {
    path: 'employer-list',
    component: EmployerListComponent
  },
  {
    path: 'employer-create',
    component: EmployerCreateComponent
  },
  {
    path: 'employer-edit/:id',
    component: EmployerEditComponent
  },
  {
    path: 'submission-list',
    component: SubmissionListComponent
  },
  {
    path: 'submission-create',
    component: SubmissionCreateComponent
  },
  {
    path: 'immediate-submission',
    component: ImmediateSubmissionComponent
  },
  {
    path: 'submission-edit/:id',
    component: SubmissionEditComponent
  },
  {
    path: 'resume-list',
    component: ResumeListComponent
  },
  {
    path: 'resume-create',
    component: ResumeCreateComponent
  },
  {
    path: 'resume-edit/:id',
    component: ResumeEditComponent
  },
  {
    path: 'letter-create',
    component: LetterCreateComponent
  },
  {
    path: 'letter-list',
    component: LetterListComponent
  },
  {
    path: 'letter-edit/:id',
    component: LetterEditComponent
  },
  {
    path: 'home-front',
    component: HomeFrontComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
