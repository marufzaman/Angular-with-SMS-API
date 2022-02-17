import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Result } from '../model/result';
import { Resultclass } from '../model/resultclass';
import { ResulthandleService } from '../services/resulthandle.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-addresult',
  templateUrl: './addresult.component.html',
  styleUrls: ['./addresult.component.css'],
})
export class AddresultComponent implements OnInit {
  // objuser: Resultclass = new Resultclass();

  constructor(
    private result: ResulthandleService,
    private location: Location
  ) {}
  alert: boolean = false;

  ngOnInit(): void {}

  onSubmit(data: NgForm) {
    this.result.addResult(data).subscribe((response) => {
      this.showAlert();
    });
  }
  showAlert() {
    this.alert = true;
  }
  closeAlert() {
    this.alert = false;
    this.location.back();
  }
}
