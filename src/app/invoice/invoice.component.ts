import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../data.service';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [HttpClientModule, CommonModule], 
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