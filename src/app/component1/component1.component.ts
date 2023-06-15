import { Component, ElementRef, Renderer2 } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component {
  imageUrl!: SafeHtml;
  error: any;

  constructor(
    private http: HttpClient,
    private _sanitizer: DomSanitizer,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    this.getImageUrl();
  }

  getImageUrl() {
    this.http.get('/get_bar', { responseType: 'text' }).subscribe(
      data => {
        this.imageUrl = this._sanitizer.bypassSecurityTrustHtml(data);
        setTimeout(() => {
          this.adjustSvgSize();
        }, 0);
      },
      (error: HttpErrorResponse) => {
        this.error = error;
        console.error('Er was een fout bij het ophalen van de gegevens:', error);
      }
    );
  }

  adjustSvgSize() {
    const svgElement = this.elementRef.nativeElement.querySelector('.svg-wrapper svg');
    if (svgElement) {
      svgElement.setAttribute('width', '50%');
      svgElement.setAttribute('height', 'auto');
    }
  }
}
