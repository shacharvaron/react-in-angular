import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';

const containerElementName = 'myReactComponentContainer';

@Component({
  selector: 'react-wrapper',
  template: `<span #${containerElementName}></span>`,
  styleUrls: ['./App.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ReactWrapperComponent implements OnChanges, OnDestroy, AfterViewInit {
  @ViewChild(containerElementName, {static: false}) containerRef: ElementRef;

  @Input() public counter = 10;
  @Output() public componentClick = new EventEmitter<void>();

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.render();
  }

  ngAfterViewInit() {
    this.render();
  }

  ngOnDestroy() {
    ReactDOM.unmountComponentAtNode(this.containerRef.nativeElement);
  }

  private render() {
    ReactDOM.render(<div>
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    </div>, this.containerRef.nativeElement);
  }
}
