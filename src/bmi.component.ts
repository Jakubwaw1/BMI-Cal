import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmicalc',
  templateUrl: './bmicalc.component.html',
  styleUrls: ['./bmicalc.component.css'],
})
export class BmicalcComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  cal_bmi(lbs, ins) {
    let h2 = ins * ins;
    let bmi = (lbs / h2) * 703;
    let f_bmi = Math.floor(bmi);
    let diff = bmi - f_bmi;
    diff = diff * 10;
    diff = Math.round(diff);
    if (diff == 10) {
      f_bmi += 1;
      diff = 0;
    }
    bmi = f_bmi + '.' + diff;
    return bmi;
  }
  compute() {
    var f = self.document.forms[0];
    let w = f.wt.value;
    let v = f.htf.value;
    let u = f.hti.value;
    if (!this.chkw(u)) {
      var ii = 0;
      f.hti.value = 0;
    } else {
      let it = f.hti.value * 1;
      var ii = it;
    }
    var fi = f.htf.value * 12;
    var i = f.htf.value * 12 + f.hti.value * 1.0;
    if (!this.chkw(v)) {
      alert('Podaj swój wzrost.');
      f.htf.focus();
      return;
    }
    if (!this.chkw(w)) {
      alert('Podaj swoją wagę.');
      f.wt.focus();
      return;
    }
    f.bmi.value = this.cal_bmi(w, i);
    f.bmi.focus();
  }

  chkw(w) {
    if (isNaN(parseInt(w))) {
      return false;
    } else if (w < 0) {
      return false;
    } else {
      return true;
    }
  }
}
