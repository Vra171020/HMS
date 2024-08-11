import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent {

  patient:Patient=new Patient();

  constructor(private patientService:PatientService, private router:Router){}

  savePatient(){
    this.patientService.createPatient(this.patient).subscribe(data=>{
      console.log(data);
      this.gotoPatientList();
    })

  }

  onSubmit(){
    this.savePatient();
  }

  gotoPatientList(){
    this.router.navigate(['/docdash']);
  }

}
