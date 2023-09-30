import {Component, OnInit} from '@angular/core';
import {ParkingLotsListService} from "../../services/parking-lots-list.service";
import {ActivatedRoute} from "@angular/router";
import {ParkingLot} from "../../model/parking-lot";

@Component({
  selector: 'app-parking-lots-list',
  templateUrl: './parking-lots-list.component.html',
  styleUrls: ['./parking-lots-list.component.css']
})
export class ParkingLotsListComponent implements OnInit {
  carType!: string;
  parkingLots: Array<ParkingLot> = [];

  constructor(private route: ActivatedRoute, private parkingLotListService: ParkingLotsListService) { }

  ngOnInit(): void {
    this.carType = this.route.snapshot.params['carType'];
    this.parkingLotListService.getAll().subscribe((response: any) => {
      if (this.carType == "4x4truck")
        this.parkingLots=response.parkingLots.filter((parkingLot:ParkingLot) => parkingLot.accept4x4Truck=='yes');
      else this.parkingLots=response.parkingLots;
    });
  }

}
