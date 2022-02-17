import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ResulthandleService } from '../services/resulthandle.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editresult',
  templateUrl: './editresult.component.html',
  styleUrls: ['./editresult.component.css'],
})
export class EditresultComponent implements OnInit {
  results: any;
  str: string = '';
  constructor(
    public route: ActivatedRoute,
    private result: ResulthandleService,
    private location: Location
  ) {}
  alert: boolean = false;
  ngOnInit(): void {
    this.getData();
  }
  getData() {
    const id = this.route.snapshot.paramMap.get('id');
    this.result.getUserById(id).subscribe((data) => {
      this.results = data;
      console.log(this.results);
    });
  }
  onSubmit(data: NgForm) {
    this.result.updateResult(this.results.id, data).subscribe((response) => {
      alert('Updated successfully.');
      this.showAlert();

      console.log(response);
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
