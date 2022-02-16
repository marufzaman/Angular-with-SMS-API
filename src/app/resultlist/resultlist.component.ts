import { Component, OnInit } from '@angular/core';
import { Result } from '../model/result';
import { ResulthandleService } from '../services/resulthandle.service';
import { EditresultComponent } from '../editresult/editresult.component';

@Component({
  selector: 'app-resultlist',
  templateUrl: './resultlist.component.html',
  styleUrls: ['./resultlist.component.css'],
})
export class ResultlistComponent implements OnInit {
  results: any;
  flag: boolean = false;
  constructor(private result: ResulthandleService) {}

  ngOnInit(): void {
    this.getAllResultList();
  }

  gotoPage() {}
  gotoAdd() {}

  getAllResultList() {
    this.result.users().subscribe((data) => (this.results = data));
  }

  deleteResult(id: any) {
    this.result.deleteResult(id).subscribe((response) => {
      alert('Deleted successfully');
      this.getAllResultList();
    });
  }
}
