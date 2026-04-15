import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IconDirective, IconService } from '@ant-design/icons-angular';
import { LogoutOutline, MenuUnfoldOutline } from '@ant-design/icons-angular/icons';

@Component({
  selector: 'app-navbar',
  imports: [IconDirective],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  private iconService = inject(IconService);
  user: any;
  constructor(private router: Router) {
    this.iconService.addIcon(...[LogoutOutline, MenuUnfoldOutline]);
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user') || 'null') || JSON.parse(sessionStorage.getItem('user') || 'null');
  }

  handlelogout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
