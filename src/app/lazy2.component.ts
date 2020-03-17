import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <p>
      lazy2 works!
    </p>
  `,
  styles: []
})
export class Lazy2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
