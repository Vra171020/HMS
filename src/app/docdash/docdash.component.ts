import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-docdash',
  templateUrl: './docdash.component.html',
  styleUrls: ['./docdash.component.css'],
})
export class DocdashComponent {
  patients: Patient[] = [];

  constructor(private patientService: PatientService, private router: Router, private docAuth:DocauthService) {}

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients() {
    this.patientService.getPatientList().subscribe((data) => {
      this.patients = data;
    });
  }

  update(id: number) {
    this.router.navigate(['updatePatient', id]);
  }

  delete(id:number){
    this.patientService.deletePatient(id).subscribe(data=>{
      console.log(data);
      this.getPatients();
    })
    
  }
  view(id:number){
    this.router.navigate(['viewpatient', id]);
  }

  logout(){
    this.docAuth.logout();
    this.router.navigate(['/home']);
  }
}
