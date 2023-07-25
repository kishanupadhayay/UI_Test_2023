import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Host,
  OnDestroy,
  Output,
} from '@angular/core';

@Directive({
  selector: '[enterTheViewportNotifier]',
})
export class EnterTheViewportNotifierDirective
  implements AfterViewInit, OnDestroy
{
  private _observer!: IntersectionObserver;
  @Output() enterTheViewportNotifier = new EventEmitter();
  constructor(@Host() private _elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    this._observer = new IntersectionObserver(this._callback, options);

    this._observer.observe(this._elementRef.nativeElement);
  }

  ngOnDestroy() {
    this._observer.disconnect();
  }

  private _callback = (entries: any, observer: any) => {
    entries.forEach((entry: any) => {
      entry.isIntersecting
        ? this.enterTheViewportNotifier.emit(true)
        : this.enterTheViewportNotifier.emit(false);
    });
  };
}
