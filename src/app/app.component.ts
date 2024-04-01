import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit , NgZone} from '@angular/core';
//mport { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

import { GarageService } from './garage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[GarageService]
})
export class AppComponent implements OnInit {
  title = 'garageAppAng';
  cars! : any

  result: string="";


  constructor(private garageService : GarageService, private ngZone: NgZone){

  }

  startAsyncOperation() {

    this.ngZone.run(() => {
      // Votre opération asynchrone ici
      this.result = 'En cours...';

      setTimeout(() => {
        this.result = 'Opération terminée';
      }, 2000);
    });
  }

  ngOnInit() {
    console.log('on init....')
    this.garageService.getCars().subscribe((datas) => {
      this.cars = datas;})
  }

}
