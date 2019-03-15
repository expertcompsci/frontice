import { Component, ViewChild, OnInit } from '@angular/core';
import { LetterService } from '../shared/api/letters.service';
import Letter from '../shared/models/Letter';
import { environment } from '../../environments/environment';
import * as moment from 'moment';
import ServeResponse from '../shared/models/ServeResponse';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { from } from 'rxjs';
import { Router } from '@angular/router';

interface LetterRow {
  id: number;
  revisionCount: number;
  description: string;
  extension: string;
  link: string;
};

@Component({
  selector: 'app-letter-list',
  templateUrl: './letter-list.component.html',
  styleUrls: ['./letter-list.component.scss']
})
export class LetterListComponent implements OnInit {
  @ViewChild('paginatorPos') paginator: MatPaginator;
  dataSource: MatTableDataSource<Letter>;
  displayedColumns: string[] = ['description', 'latest', 'extension', 'id'];
  displayedColumnHeaders = []; // : string[] = ['Title/Position', 'Date Posted'];
  letter: LetterRow;
  letters: any = new Array();
  full: boolean = true;

  constructor(
    private letterService: LetterService,
    private router: Router
  ) {  }
  ngOnInit() {
    this.letterService.getAll().subscribe((response: ServeResponse) => {
      const arraySource = from(response.model);
      arraySource.subscribe(letter => this.letters.push({
        "id": letter.id,
        "revisionCount": letter.revisionCount,
        "latest": letter.latest + " (" + moment(letter.latest).fromNow() + ")",
        "description": letter.description + " (" + letter.revisionCount + ")",
        "extension": letter.extension
      }));
      this.dataSource = new MatTableDataSource(this.letters);
      this.paginator.pageIndex = 0;
      this.dataSource.paginator = this.paginator;
    });
  }
  getCurrent() {
    const skip = this.paginator.pageSize * this.paginator.pageIndex;
    this.letters.filter((u, i) => i >= skip)
      .filter((u, i) => i < this.paginator.pageSize);
  }
  edit(id: number) {
    this.router.navigate(['/letter-edit/' + id]);
  }

  goTo(id: number) {
    window.open(environment.serveBaseUrl + "/view-letter/" + id);
  }
}
