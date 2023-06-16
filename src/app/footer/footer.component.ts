import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  month: string;

  constructor() {
    this.month = this.getCurrentMonth();
  }

  getCurrentMonth(): string {
    const monthNames = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"];
    const currentDate = new Date();
    return monthNames[currentDate.getMonth()];
  }
}
