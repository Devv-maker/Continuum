import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Navbar } from 'src/app/components/navbar/navbar';

@Component({
  selector: 'app-admin',
  imports: [RouterModule, Navbar],
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayout {
  
}
