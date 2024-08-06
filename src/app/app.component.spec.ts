import { TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));
=======
<<<<<<< HEAD
=======
import { RouterModule } from '@angular/router';
>>>>>>> 3ba36a2 (initial commit)
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
      imports: [AppComponent],
=======
      imports: [
        RouterModule.forRoot([])
      ],
      declarations: [
        AppComponent
      ],
>>>>>>> 3ba36a2 (initial commit)
    }).compileComponents();
  });
>>>>>>> 1a638437eca69f8c69b80856a63b3aaf442f6ced

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< HEAD
  it(`should have as title 'battery_monitoring'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('battery_monitoring');
=======
<<<<<<< HEAD
  it(`should have the 'cocsap' title`, () => {
=======
  it(`should have as title 'cocsap'`, () => {
>>>>>>> 3ba36a2 (initial commit)
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('cocsap');
>>>>>>> 1a638437eca69f8c69b80856a63b3aaf442f6ced
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
<<<<<<< HEAD
    expect(compiled.querySelector('.content span')?.textContent).toContain('battery_monitoring app is running!');
=======
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, cocsap');
>>>>>>> 1a638437eca69f8c69b80856a63b3aaf442f6ced
  });
});
