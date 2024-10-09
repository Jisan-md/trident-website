import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] // Corrected from styleUrl to styleUrls
})
export class HeaderComponent {
  isNavbarCollapsed = true;
  activeDropdown: string | null = null;

  // Toggles the visibility of the navbar
  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  // Toggles the dropdown menu
  toggleDropdown(dropdownName: string) {
    if (this.activeDropdown === dropdownName) {
      this.activeDropdown = null;  
    } else {
      this.activeDropdown = dropdownName;  
    }
  }

  // Closes the navbar
  closeNavbar() {
    this.isNavbarCollapsed = true;
  }
}


