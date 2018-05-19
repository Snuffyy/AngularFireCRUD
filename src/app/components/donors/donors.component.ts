import {Component, Input, OnInit} from '@angular/core';
import {Donor} from '../../models/donor';

@Component({
  selector: 'app-donors',
  templateUrl: './donors.component.html',
  styleUrls: ['./donors.component.css']
})
export class DonorsComponent implements OnInit {

  @Input() donors: Donor[];

  ngOnInit() {
  }
}
