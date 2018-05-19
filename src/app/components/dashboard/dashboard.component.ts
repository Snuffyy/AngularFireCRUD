import { Component, OnInit } from '@angular/core';
import {Donor} from '../../models/donor';
import {DonorService} from '../../services/donor.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  donors: Donor[];
  total = 0;

  constructor(private donorService: DonorService) {
  }

  ngOnInit() {
    this.donorService
      .getDonors()
      .subscribe((donors) => {
        this.donors = donors;
        this.total = this.getTotal();
      });
  }

  getTotal(): number {
    return this.donors
      .map((donor) => +donor.total)
      .reduce((previous, current) => previous + current, 0);
  }

}
