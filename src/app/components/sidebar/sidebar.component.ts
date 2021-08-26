import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCalendar, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  calendarIcon: IconDefinition = faCalendar;
  usersIcon: IconDefinition = faUsers;

  constructor() { }

  ngOnInit(): void {
  }

}
