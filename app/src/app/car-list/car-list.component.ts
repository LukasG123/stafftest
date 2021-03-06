import { Component, OnInit } from '@angular/core';
import { Car } from '../Car';
import { CarService } from '../car.service';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  constructor(private carService: CarService) { }

  public loading = true;
  public cars: Car[] = [];
  public error!: string;
  public filters!: Car;



  ngOnInit(): void {
    this.carService.getFilters()
      .pipe(
        mergeMap(filters => {
          this.filters = filters;
          return this.carService.getCarList();
        })
      )
      .subscribe((cars: Car[]) => {
        this.cars = cars;
        this.loading = false;
      },
      (error) => {
        this.error = error.message;
        this.loading = false;
      });
  }

  filterValues(type: string, value: string) {
    this.loading = true;
    this.carService.getFilteredCarList(type, value)
      .subscribe((cars: Car[]) => {
        this.cars = cars;
        this.loading = false;
      },
      (error) => {
        this.error = error.message;
        this.loading = false;
      });
  }
}
