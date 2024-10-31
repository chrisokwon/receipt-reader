import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OcrService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  ocr(formData) : any {
    return this.http.post(`http://localhost:5000/ocr`,formData, { responseType: 'text' })
  }
}
