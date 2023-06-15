import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component {
  imageUrl!: string;
  error: any;

  constructor(private http: HttpClient) {
    this.getImageUrl();
  }

  getImageUrl() {
    this.http.get('/get_pie', { responseType: 'text' }).subscribe(
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
