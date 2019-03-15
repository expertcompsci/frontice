![Job Searcher](JobSearcher.png)
# frontice

The front end of a database driven application, named **Job $earcher** to help document and organize an individual's search for a job. The back end is a RESTful app called [serve](https://github.com/expertcompsci/serve).

## Why?

Sure, it's overkill for most people to learn to use a database driven app for organizing a job search. The purpose is to demonstrate a fully developed, tested and deployed application using:

* Material Design front-end
* RESTful API. See back-end app repository [serve](https://github.com/expertcompsci/serve)
* Test driven development
  * Unit tests
  * End To End tests
  * REST test client
* Browser and server side data validation
* SQL with stored procedures
* Multi-part form upload/download to/from blob type

## Some features

* Upload resumes and letter files.
* Track revisions to resumes and letters.
* Hints and validation messages guide the user experience.
* Enter, edit, make notes on and search:
  * job ads
  * employers
  * your submissions
  * resumes
  * cover letters

## Front-end Languages, Libraries, Technologies

* [TypeScript](https://www.typescriptlang.org/) version 3.1.6
* [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5
* [Angular Material](https://material.angular.io/) version 7.1.0
* [RxJS](https://rxjs-dev.firebaseapp.com/) version 6.3.3
* [Moment.js](https://momentjs.com/) version 2.23.0

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Angular CLI help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
