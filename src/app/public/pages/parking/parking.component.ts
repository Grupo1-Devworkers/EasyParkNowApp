import {Component, Input} from '@angular/core';
export interface Time{
  value: number;
  viewValue: string;
}
@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent {
  times: Time[] = [
    {value: 1, viewValue: '1 hora'},
    {value: 2, viewValue: '2 horas'},
    {value: 3, viewValue: '3 horas'},
    {value: 4, viewValue: '4 horas'}
  ]

}
