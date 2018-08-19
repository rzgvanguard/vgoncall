import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-crew',
  templateUrl: './add-crew.component.html',
  styleUrls: ['./add-crew.component.css']
})
export class AddCrewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate(['/CrewList']);
  }
}
