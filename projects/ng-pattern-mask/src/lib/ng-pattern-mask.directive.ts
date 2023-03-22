import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[ngPatternMask]'
})
export class NgPatternMaskDirective {
  private _inputElement!: HTMLInputElement;

  @Input()
  public ngpmPattern!: string;
  @Input()
  public ngpmDigitPlaceholders!: string;
  @Input()
  public ngpmCharPlaceholders!: string;

  private options = {
    digitPlaceholders: this.ngpmDigitPlaceholders || 'dDmMyYhH09',
    charPlaceholders: this.ngpmCharPlaceholders || '_'
  }

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this._inputElement = this.el.nativeElement.hasChildNodes()
      ? this.el.nativeElement.getElementsByTagName('input')[0]
      : this.el.nativeElement;

    if (!this._inputElement) {
      throw('NgPatternMask directive must be used with an input element!');
    }
  }

  @HostListener('keyup', ['$event'])
  keyUp(event: any) {
    this.handleValueChange()
  }

  @HostListener('onkeyup', ['$event'])
  onKeyUp(event: any) {
    this.handleValueChange()
  }

  private handleValueChange() {
    this._inputElement.value = this.validate();
  }

  private validate() {
    let newValue = '';

    let clearedValue = this._inputElement.value.replace(/\W/g, '');

    for (let i = 0, j = 0; i < this.ngpmPattern.length; i++) {
      const current = clearedValue[j];
      const isDigit = !isNaN(parseInt(current));
      const isChar = clearedValue[j]?.match(/[A-Z]/i) || null;
      const matchesNumber = this.options.digitPlaceholders.indexOf(this.ngpmPattern[i]) >= 0;
      const matchesLetter = this.options.charPlaceholders.indexOf(this.ngpmPattern[i]) >= 0;
      if ((matchesNumber && isDigit) || (this.ngpmPattern && matchesLetter && isChar)) {
        newValue += clearedValue[j++];
      } else if ((!this.ngpmPattern && !isDigit && matchesNumber) || (this.ngpmPattern && ((matchesLetter && !isChar) || (matchesNumber && !isDigit)))) {
        return newValue;
      } else {
        newValue += this.ngpmPattern[i];
      }

      if (!current) {
        break;
      }
    }

    return newValue;
  }
}
