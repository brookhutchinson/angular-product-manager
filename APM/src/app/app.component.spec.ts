// angular
import { TestBed, ComponentFixture } from '@angular/core/testing';

// components
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let h1: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    h1 = fixture.nativeElement.querySelector('h1');
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Angular Product Manager'`, () => {
    expect(component.title).toEqual('Angular Product Manager');
  });

  it('should not have a null title', () => {
    expect(component.title).not.toBeNull();
  });

  it('should render title in a h1 tag', () => {
    expect(h1.textContent).toContain(component.title);
  });
});
