import { Component } from '@angular/core';
import { LoadingService } from 'src/app/services/loading-service.service';
import { OcrService } from 'src/app/services/ocr.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  result = ''

  constructor(private ocrService: OcrService, private loadingService: LoadingService) {}

  ngOnInit() {
  }
  
  onImageUpload(event : any) {
    console.log(event)
    const file: File = event.target?.files[0];
    const formData = new FormData();
    formData.append('image', file)
  
    this.loadingService.loadingOn();
    this.ocrService.ocr(formData).subscribe({
      next: (text: string) => {
        this.result = text
      },
      error: (e) => {
        alert(`error ${e}`)
      },
    })
  }
}
