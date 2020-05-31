import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'external-lib',
  template: `
    <p>
      External lib component works!
    </p>
  `,
  styles: []
})
export class ExternalLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
