import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { HomeComponent } from './home/home.component';
import { DocdashComponent } from './docdash/docdash.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { AdloginComponent } from './adlogin/adlogin.component';
import { AuthguardService } from './authguard.service';
import { DocauthguardService } from './docauthguard.service';

const routes: Routes = [
  {
    path: 'admin',
    component: AdmindashComponent,
    canActivate: [AuthguardService],
  },
  {
    path: 'appointmentlist',
    component: AppointmentComponent,
    canActivate: [AuthguardService],
  },
  {
    path: 'create-appointment',
    component: CreateAppointmentComponent,
    canActivate: [AuthguardService],
  },
  { path: 'home', component: HomeComponent },
  { path: 'docdash', component: DocdashComponent , canActivate:[DocauthguardService]},
  { path: 'createPatient', component: CreatePatientComponent , canActivate:[DocauthguardService] },
  { path: 'medicinelist', component: MedicineListComponent , canActivate:[DocauthguardService] },
  { path: 'createMedicine', component: CreateMedicineComponent , canActivate:[DocauthguardService] },
  { path: 'updatePatient/:id', component: UpdatePatientComponent , canActivate:[DocauthguardService]},
  { path: 'viewpatient/:id', component: ViewPatientComponent , canActivate:[DocauthguardService] },
  { path: 'updateMedicine/:id', component: UpdateMedicineComponent , canActivate:[DocauthguardService]},
  { path: 'doclogin', component: DocloginComponent },
  { path: 'adlogin', component: AdloginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
