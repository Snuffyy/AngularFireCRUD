import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Donor, EMPTY_DONOR} from '../../models/donor';
import {DonorService} from '../../services/donor.service';

@Component({
  selector: 'app-edit-donor',
  templateUrl: './edit-donor.component.html',
  styleUrls: ['./edit-donor.component.css']
})
export class EditDonorComponent implements OnInit {

  donor: Donor = EMPTY_DONOR;

  constructor(private activatedRoute: ActivatedRoute, private donorService: DonorService, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getDonor(params['id']).subscribe(donor => this.donor = donor);
    });
  }

  getDonor(id: string): Observable<Donor> {
    return this.donorService.getDonor(id);
  }

  update(donor: Donor) {
    this.donorService.updateDonor(this.donor, donor);
    this.toDashboard();
  }


  delete(donor: Donor) {
    this.donorService.deleteDonor(donor);
    this.toDashboard();
  }

  toDashboard() {
    this.router.navigate(['/']);
  }
}
