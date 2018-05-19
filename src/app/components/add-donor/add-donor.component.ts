import {Component, OnInit} from '@angular/core';
import {Donor} from '../../models/donor';
import {DonorService} from '../../services/donor.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-donor',
  templateUrl: './add-donor.component.html',
  styleUrls: ['./add-donor.component.css']
})
export class AddDonorComponent implements OnInit {

  donor: Donor = {};

  constructor(private donorService: DonorService, private router: Router) {
  }

  ngOnInit() {
  }

  createDonor(donor: Donor) {
    this.donorService.createDonor(donor);
    this.router.navigate(['/']);
  }

}
