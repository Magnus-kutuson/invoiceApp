import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedInvoiceComponent } from './selected-invoice.component';

describe('SelectedInvoiceComponent', () => {
  let component: SelectedInvoiceComponent;
  let fixture: ComponentFixture<SelectedInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedInvoiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectedInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
