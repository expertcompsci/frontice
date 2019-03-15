import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { Router } from '@angular/router';
import { BottomSheetErrorComponent } from '../bottom-sheet-error/bottom-sheet-error.component';
import AppErrorInterpreter from '../shared/api/app-error-interpreter';
import { EmployerService } from '../shared/api/employers.service';
import Employer from '../shared/models/Employer';
import ServeResponse from '../shared/models/ServeResponse';

@Component({
  selector: 'employer-create',
  templateUrl: './employer-create.component.html',
  styleUrls: ['./employer-create.component.scss']
})
export class EmployerCreateComponent implements OnInit {
  employer: Employer = new Employer();
  mustBeUniqueError: boolean = false;
  mustBeUrlError: boolean = false;

  constructor(
    private router: Router,
    private employerService: EmployerService,
    private bottomSheet: MatBottomSheet,
  ) {
  }

  ngOnInit() {
  }

  save(form: any) {
    this.mustBeUniqueError = false;
    this.mustBeUrlError = false;
    this.employerService.save(form).subscribe(
      (result: ServeResponse) => {
        let appErr = new AppErrorInterpreter(result);
        if (!appErr.isOk()) {
          if (appErr.isIntegrityViolation()) {
            this.bottomSheet.open(BottomSheetErrorComponent, {
              data: ["Employer Company Name must be unique."]
            });
          } else {
            this.bottomSheet.open(BottomSheetErrorComponent, {
              data: appErr.errorMessages
            });
          }
        } else {
          this.router.navigate(['/employer-list']);
        }
    });
  }
}
