import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isNavbarCollapsed = true; // To track if the navbar is collapsed
  activeDropdown: string | null = null; // To track which dropdown is active

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed; // Toggle navbar state
  }

  toggleDropdown(dropdown: string) {
    this.activeDropdown = this.activeDropdown === dropdown ? null : dropdown; // Toggle dropdown state
  }
  }

