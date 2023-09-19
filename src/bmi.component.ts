import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmicalc',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css'],
})
export class bmicomponent {
  title = 'bmi_cal';
  waga: number = 0;
  wzrost: number = 0;
  bmi: number = 0;

  calculateBMI() {
    this.bmi = this.waga / (this.wzrost * this.wzrost);
    return this.bmi;
  }
  if (bmi < 18)
  {
    return "niedowaga";
  }
  else if (bmi > 18 && bmi < 25)
  {
    return "waga prawidłowa";
  }
  else if (bmi > 25 && bmi < 30)
  {
    return "nadwaga";
  }
  else (bmi >30)
  {
    return "otyłość";
  }
}
