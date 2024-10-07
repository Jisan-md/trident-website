import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isNavbarCollapsed = true;
  activeDropdown: string | null = null;

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  toggleDropdown(dropdownName: string) {
    if (this.activeDropdown === dropdownName) {
      this.activeDropdown = null;  
    } else {
      this.activeDropdown = dropdownName;  
    }
  }
  }

