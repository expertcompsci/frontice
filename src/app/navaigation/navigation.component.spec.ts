import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule, MatToolbarModule } from '@angular/material';
import { NavigationComponent } from './navigation.component';
import { MenuJobSearchComponent } from '../menu-job-search/menu-job-search.component'
import { MenuResumesLettersComponent } from '../menu-resumes-letters/menu-resumes-letters.component'


describe('NavaigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatToolbarModule,
        MatMenuModule
      ],
      declarations: [ 
        NavigationComponent,
        MenuJobSearchComponent,
        MenuResumesLettersComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have button', () => {
    const hostElement = fixture.nativeElement;
    expect(hostElement.querySelector('button')).toBeTruthy();
  });
  
  it('should have job search menu', () => {
    const hostElement = fixture.nativeElement;
    expect(hostElement.querySelector('app-menu-job-search')).toBeTruthy();
  });
  
  it('should have a job search menu with multiple children', () => {
    const hostElement = fixture.nativeElement;
    const jobSearchMenu: HTMLElement  = hostElement.querySelector('app-menu-job-search');
    expect(jobSearchMenu.childElementCount).toBeGreaterThan(1);
  });

  it('should have a resumes and letters menu', () => {
    const hostElement = fixture.nativeElement;
    expect(hostElement.querySelector('app-menu-resumes-letters')).toBeTruthy();
  });

  it('should have a resumes and letters menu with multiple children', () => {
    const hostElement = fixture.nativeElement;
    const jobSearchMenu: HTMLElement  = hostElement.querySelector('app-menu-resumes-letters');
    expect(jobSearchMenu.childElementCount).toBeGreaterThan(1);
  });

});
