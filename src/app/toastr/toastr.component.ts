import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-toastr',
  standalone: true,
  imports: [],
  templateUrl: './toastr.component.html',
  styleUrl: './toastr.component.css',
})
export class ToastrComponent {
  constructor(private toastr: ToastrService) {}

  showInfoMsg() {
    this.toastr.info('This is how Toastr works', 'Info'),
      { closeButton: true, positionClass: 'toast-top-right' };
  }

  showSuccessMsg() {
    this.toastr.success('Data Saved Successfully', 'Success Message', {closeButton:true, positionClass:'toast-top-right'});
  }

  showErrorMsg() {
    this.toastr.error('Error in sending data', 'Error Message', {
      closeButton: true,
      positionClass: 'toast-top-right',
    });
  }

  showWarningMsg() {
    this.toastr.warning('Enter a Correct Password', 'Warning Message', {
      closeButton: true,
      positionClass: 'toast-top-right',
    });
  }
}
