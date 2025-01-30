import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './pages/layout/layout.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'invoiceApp';
  private readonly toastr = inject(ToastrService);

  onHandleClick() {
    this.toastr.error('Item deleted successfully!', '', {
      closeButton: true,
      positionClass: 'toast-top-center',
    });
  }
}
