/*
import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import spyOn = jest.spyOn;
import {toArray} from 'rxjs/operators';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  // Test the changeTitle function
  it('should change title to other-title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.changeTitle();
    expect(app.title).toEqual('other-title');
  });


  // Test the callChangeTitle function if the title has not been changed
  it('should call the changeTitle function', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const changeTitleSpy = spyOn(app, 'changeTitle');
    app.callChangeTitleIfNeeded();
    expect(changeTitleSpy).toHaveBeenCalled();
  });


  // Test the callChangeTitle function if the title has been already changed
  it('should throw Error', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.title = 'other-title';
    const changeTitleSpy = spyOn(app, 'changeTitle');
    expect(() => {
      app.callChangeTitleIfNeeded();
    }).toThrowError('Title already changed');
  });


  // Test the content of the stringObservable array
  it('should contain an array of strings', done => {
    // Subscribe and assert pattern
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const expectedResult = ['un', 'deux', 'trois', 'quatre', 'cinq'];
    app.stringObservable$
      .pipe(toArray())
      .subscribe((digits: Array<string>) => {
        expect(JSON.stringify(digits)).toBe(JSON.stringify(expectedResult));
        // Why done() ? See : https://medium.com/angular-in-depth/how-to-test-observables-a00038c7faad
        done();
      });
  });
});

  public changeTitle(): void {
    this.title = 'other-title';
  }

  public callChangeTitleIfNeeded(): void {
    if (this.title !== 'other-title') {
      this.changeTitle();
    } else {
      throw new Error('Title already changed');
    }
 */
