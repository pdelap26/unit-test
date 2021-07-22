import {Component} from '@angular/core';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'unit-tests';
  // stringObservable$: Observable<string> = of('un', 'deux', 'trois', 'quatre', 'cinq');
}
