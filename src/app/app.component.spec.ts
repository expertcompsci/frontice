import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavigationComponent } from './navaigation/navigation.component';
import { MenuJobSearchComponent } from './menu-job-search/menu-job-search.component';
import { MenuResumesLettersComponent } from './menu-resumes-letters/menu-resumes-letters.component';
import { AppComponent } from './app.component';
import { MatMenuModule, MatToolbarModule } from '@angular/material';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatToolbarModule,
        MatMenuModule
      ],
      declarations: [
        AppComponent,
        NavigationComponent,
        MenuJobSearchComponent,
        MenuResumesLettersComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Job $earcher'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Job $earcher');
  });

  it('should have app-navigation tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-navigation')).toBeTruthy();
  });
});
