import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrewApiService } from '../services/crew-api.service';

@Component({
  selector: 'app-add-crew',
  templateUrl: './add-crew.component.html',
  styleUrls: ['./add-crew.component.css']
})
export class AddCrewComponent implements OnInit {

  private crewId: FormControl;
  private crewEmail: FormControl;
  private crewPhoneNumber: FormControl;
  private crewExtension: FormControl;
  private firstName: FormControl;
  private lastName: FormControl;
  private crewPM: FormControl;
  private crewManager: FormControl;

  private crewForm: FormGroup;
  constructor(private router: Router, private crewService: CrewApiService) { }

  ngOnInit() {

    this.crewId = new FormControl(null, Validators.required);
    this.crewEmail = new FormControl(null, Validators.required);
    this.crewPhoneNumber = new FormControl(null, Validators.required);
    this.crewExtension = new FormControl();
    this.firstName = new FormControl(null, Validators.required);
    this.lastName = new FormControl(null, Validators.required);
    this.crewPM = new FormControl(null, Validators.required);
    this.crewManager = new FormControl(null, Validators.required);

    this.crewForm = new FormGroup( {
      crewId: this.crewId,
      crewEmail: this.crewEmail,
      crewPhoneNumber: this.crewPhoneNumber,
      crewExtension: this.crewExtension,
      firstName: this.firstName,
      lastName: this.lastName,
      crewPM: this.crewPM,
      crewManager: this.crewManager

    });
  }

  saveCrew(formValues) {
    if (this.crewForm.valid) {
      console.log(formValues);
      this.crewService.saveNewCrew(formValues);
      this.router.navigate(['/CrewList']);
    }
  }

  validateCrewId() {
    // make a call -- see if it is a valid crew id, maybe use this to populate the rest of the values
    // access to the crewId given is through this.crewId.value
    if (this.crewId.touched && !this.crewId.valid) {
      return false;
    } else {
      return true;
    }
  }

  validateCrewEmail() {
    if (this.crewEmail.touched && !this.crewEmail.valid) {
      return false;
    } else {
      return true;
    }
  }

  validateCrewPhoneNumber() {
    if (this.crewPhoneNumber.touched && !this.crewPhoneNumber.valid) {
      return false;
    } else {
      return true;
    }
  }

  validateCrewManager() {
    if (this.crewManager.touched && !this.crewManager.valid) {
      return false;
    } else {
      return true;
    }
  }

  validateCrewPM() {
    if (this.crewPM.touched && !this.crewPM.valid) {
      return false;
    } else {
      return true;
    }
  }

  cancel() {
    this.router.navigate(['/CrewList']);
  }
}
