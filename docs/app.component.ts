import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content).result.then(
      result => {
        console.log(`Closed with: ${result}`);
      },
      reason => {
        console.log(`Dismissed ${reason}`);
      }
    );
  }
}
