import { Component } from '@angular/core';
import { OcrService } from './services/ocr.service';
import { LoadingService } from './services/loading-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'receipt-reader';
  result = ''

  constructor(private ocrService: OcrService, private loadingService: LoadingService) {}

  ngOnInit() {
    // this.ocrService.ocr("hello").subscribe((response) => {
    //   alert(response);
    // });
  }
  
  onImageUpload(event : any) {
    console.log(event)
    const file: File = event.target?.files[0];
    const formData = new FormData();
    formData.append('image', file)
    this.ocrService.ocr(formData).subscribe({
      next : (text : string) => {
        this.result = text
        this.loadingService.loadingOn();
      },
      error : (e) => {
        alert(`error ${e}`)
      },
      complete : () => {
        this.loadingService.loadingOff()
      }
    })
  }

}
