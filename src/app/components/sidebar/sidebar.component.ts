import {Component, OnInit} from '@angular/core';
import {Input} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() total: number;

  ngOnInit() {
  }

}
