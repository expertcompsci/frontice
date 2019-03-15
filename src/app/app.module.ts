import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatBottomSheetModule, MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatOptionModule, MatPaginatorModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSlideToggleModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatetimepickerModule, MatNativeDatetimeModule } from '@mat-datetimepicker/core';
import { MatMomentDatetimeModule } from '@mat-datetimepicker/moment';
import { AppComponent } from './app.component';
import { AreYouSureDialogComponent } from './are-you-sure-dialog/are-you-sure-dialog.component';
import { BottomSheetErrorComponent } from './bottom-sheet-error/bottom-sheet-error.component';
import { EmployerCreateComponent } from './employer-create/employer-create.component';
import { EmployerEditComponent } from './employer-edit/employer-edit.component';
import { EmployerListComponent } from './employer-list/employer-list.component';
import { HomeFrontComponent } from './home-front/home-front.component';
import { JobadCreateComponent } from './jobad-create/jobad-create.component';
import { JobadEditComponent } from './jobad-edit/jobad-edit.component';
import { JobadListComponent } from './jobad-list/jobad-list.component';
import { LetterCreateComponent } from './letter-create/letter-create.component';
import { LetterEditComponent } from './letter-edit/letter-edit.component';
import { LetterListComponent } from './letter-list/letter-list.component';
import { MenuJobSearchComponent } from './menu-job-search/menu-job-search.component';
import { MenuResumesLettersComponent } from './menu-resumes-letters/menu-resumes-letters.component';
import { NavigationComponent } from './navaigation/navigation.component';
import { ResumeCreateComponent } from './resume-create/resume-create.component';
import { ResumeEditComponent } from './resume-edit/resume-edit.component';
import { ResumeListComponent } from './resume-list/resume-list.component';
import { EmployerService } from './shared/api/employers.service';
import { JobAdService } from './shared/api/job-ads.service';
import { LetterService } from './shared/api/letters.service';
import { ResumeService } from './shared/api/resumes.service';
import { SubmissionService } from './shared/api/submissions.service';
import { ImmediateSubmissionService } from './shared/api/immediate-submission.service'
import { SubmissionCreateComponent } from './submission-create/submission-create.component';
import { SubmissionEditComponent } from './submission-edit/submission-edit.component';
import { SubmissionListComponent } from './submission-list/submission-list.component';
import { AppRoutingModule } from './app-routing.module';
import { ImmediateSubmissionComponent } from './immediate-submission/immediate-submission.component';

@NgModule({
  declarations: [
    AppComponent,
    JobadListComponent,
    JobadEditComponent,
    JobadCreateComponent,
    NavigationComponent,
    EmployerListComponent,
    EmployerEditComponent,
    EmployerCreateComponent,
    SubmissionCreateComponent,
    SubmissionEditComponent,
    SubmissionListComponent,
    ImmediateSubmissionComponent,
    ResumeCreateComponent,
    ResumeListComponent,
    ResumeEditComponent,
    LetterCreateComponent,
    LetterListComponent,
    LetterEditComponent,
    HomeFrontComponent,
    MenuJobSearchComponent,
    MenuResumesLettersComponent,
    BottomSheetErrorComponent,
    AreYouSureDialogComponent,
    ImmediateSubmissionComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatRippleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatInputModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatBottomSheetModule,
    MatDatepickerModule,
    // use this if you want to use native javascript dates and INTL API if available
    MatNativeDatetimeModule,
    MatMomentDatetimeModule,
    MatDatetimepickerModule,
    MatDialogModule
  ],
  entryComponents: [BottomSheetErrorComponent, AreYouSureDialogComponent],
  providers: [
    MatDatetimepickerModule, 
    JobAdService, 
    EmployerService, 
    SubmissionService, 
    ResumeService, 
    LetterService, 
    ImmediateSubmissionService,
    BottomSheetErrorComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
