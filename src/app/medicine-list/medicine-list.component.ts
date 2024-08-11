import { Component } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../medicine';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css'],
})
export class MedicineListComponent {
  medicinelist: Medicine[] = [];

  constructor(private medicineService: MedicineService,private router:Router) {}

  ngOnInit(): void {
    this.getMedicine();
  }
  getMedicine() {
    this.medicineService.getMedicine().subscribe((data) => {
      this.medicinelist = data;
    });
  }
  update(id:number){
    this.router.navigate(['updateMedicine',id])
  }

  delete(id:number){
    this.medicineService.deleteMedicine(id).subscribe(data=>{
      console.log(data);
      this.getMedicine();
    })

  }
}
