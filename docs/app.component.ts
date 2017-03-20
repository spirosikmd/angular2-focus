import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app',
  templateUrl: 'app.html'
})
export class AppComponent {
  isFocused = true;
  sins = ['gluttony', 'greed', 'sloth', 'envy', 'wrath', 'pride', 'lust'];

  form = new FormGroup({
    sin: new FormControl(),
    name: new FormControl()
  });
}
