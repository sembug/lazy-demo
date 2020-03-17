import { ComponentFactoryResolver, ViewContainerRef, Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
  <div>
    <div>Hello World! This is the {{ title }} app.</div>
    <div><button (click)='getLazy1()'>lazy 1</button></div>
    <div><button (click)='getLazy2()'>lazy 2</button></div>
  </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'lazy-comp';

  constructor(
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) {}

  async getLazy1() {
    this.viewContainerRef.clear();
    const { Lazy1Component } = await import('./lazy1.component');
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(Lazy1Component)
    );
  }

  async getLazy2() {
    this.viewContainerRef.clear();
    const { Lazy2Component } = await import('./lazy2.component');
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(Lazy2Component)
    );
  }
}