import 'zone.js';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import QRCodeStyling from 'qr-code-styling';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
      <div #canvas></div>  
  `,
})
export class App implements AfterViewInit {
  name = 'Angular';

  @ViewChild('canvas', { static: true }) canvas!: ElementRef;

  ngAfterViewInit() {
    console.log(QRCodeStyling);
    if (!QRCodeStyling) {
      return;
    }
    const qrCode = new QRCodeStyling({
      width: 232,
      height: 232,
      margin: 14,
      data: 'https://localhost:4200/register?ref=9653102478',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
      dotsOptions: {
        color: '#4267b2',
        type: 'rounded',
      },
      backgroundOptions: {
        color: '#e9ebee',
      },
      imageOptions: {
        crossOrigin: 'anonymous',
        margin: 14,
      },
    });

    qrCode.append(this.canvas.nativeElement);
  }
}

bootstrapApplication(App);
