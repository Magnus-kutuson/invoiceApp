import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { BadgeComponent } from '../badge/badge.component';
import { HeadlineComponent } from '../headline/headline.component';
import { TextComponent } from '../text/text.component';


@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [HttpClientModule, CommonModule, HeaderComponent, BadgeComponent, HeadlineComponent, TextComponent], 
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})
export class InvoiceComponent implements OnInit {
  data: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getJSON().subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
  }
}