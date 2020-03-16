import { Component, OnInit } from '@angular/core';
import { BanksService } from '../banks.service';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.scss']
})
export class BanksComponent implements OnInit {
  city: string = 'MUMBAI';
  bankData: any[] = [];
  loaderbar: boolean = false;

  pagesize: number = 10;
  pageArray: any = [];
  startRow: number = 0;
  endRow: number = 10;
  currentPage = 0;
  //cityData: any[] = [
  //  { id: 1, city: 'MUMBAI' },
  //  { id: 2, city: 'DELHI' },
  //  { id: 3, city: 'GURGAON' },
  //  { id: 4, city: 'PUNE' }
  //];


  constructor(public bankService: BanksService) { }

  ngOnInit(): void {
    this.getBankDetail()
  }

  getBankDetail() {
    this.loaderbar = true;
    this.bankService.getBankDetailByCity(this.city).subscribe(res => {
      debugger;
      this.bankData = res;
      var page = res.length / this.pagesize;
      this.pageArray = [];
      for (var i = 0; i < page; i++) {
        this.pageArray.push(i);
      }
      this.loaderbar = false;
    });
  }

  selectcity(event: any) {
    debugger;
    this.city = event;
    this.getBankDetail();

  }

  onPageChange(eve: any) {
    this.currentPage = eve;
    this.startRow =( this.currentPage*10)+1;
    this.endRow = (this.currentPage*10) + 10;
  }

}
