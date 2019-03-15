import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import "reflect-metadata";
import { BottomSheetErrorComponent } from '../bottom-sheet-error/bottom-sheet-error.component';
import AppErrorInterpreter from '../shared/api/app-error-interpreter';
import { EmployerService } from '../shared/api/employers.service';
import Employer from '../shared/models/Employer';
import ServeResponse from '../shared/models/ServeResponse';


@Component({
  selector: 'employer-edit',
  templateUrl: './employer-edit.component.html',
  styleUrls: ['./employer-edit.component.scss']
})
export class EmployerEditComponent implements OnInit {
  id: string;
  employer: Employer;
  mustBeUniqueError: boolean = false;
  mustBeUrlError: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employerService: EmployerService,
    private bottomSheet: MatBottomSheet,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      if (this.id) {
        this.employerService.get(this.id).subscribe((response: ServeResponse) => {
          console.log(response);
          if (response.model[0]) {
            this.employer = response.model[0];
          } else {
            this.gotoList();
          }
        });
      }
    });
  }

  gotoList() {
    this.router.navigate(['/employer-list']);
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

  remove(id: number) {
    this.employerService.remove(id).subscribe(
      result => {
        this.gotoList();
      },
      error => console.error(error)
    );
  }
}

