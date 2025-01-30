import { Component, HostListener, ElementRef, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  isFormVisible!: boolean;

  constructor(
    private elementRef: ElementRef,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.dataService.formVisible$.subscribe((visible) => {
      this.isFormVisible = visible;
    });
  }

  discardForm(): void {
    this.dataService.toggleFormVisibility();
  }

  // saveAsDraft() {
  //   this.invoiceForm.patchValue({ status: 'draft' });
  //   this.onSubmit();
  // }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.isFormVisible) return;

    const targetElement = event.target as HTMLElement;
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);

    if (!clickedInside) {
      this.isFormVisible = false;
    }
  }
}
