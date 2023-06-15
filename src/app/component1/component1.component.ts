import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component {
  imageUrl!: string;
  error: any;

  constructor(private http: HttpClient) {
    this.getImageUrl();
  }

  getImageUrl() {
    this.http.get('/get_bar', { responseType: 'text' }).subscribe(
      data => {
        this.imageUrl = data;
      },
      (error: HttpErrorResponse) => {
        this.error = error;
        console.error('Er was een fout bij het ophalen van de gegevens:', error);
      }
    );
  }
}
