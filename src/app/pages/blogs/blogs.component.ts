import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent {
  currentPage = 1;
  itemsPerPage = 6;

  constructor() {};
   data = [
    {name: "John", email: "john@example.com", phone: "123456789", country: "USA", message: "Hello"},
    {name: "Alice", email: "alice@example.com", phone: "987654321", country: "Canada", message: "Hi there"},
    {name: "Bob", email: "bob@example.com", phone: "555555555", country: "UK", message: "Greetings"},
    {name: "Eve", email: "eve@example.com", phone: "777777777", country: "Australia", message: "Hey"},
    {name: "Mike", email: "mike@example.com", phone: "999999999", country: "Germany", message: "Hola"},
    {name: "Sarah", email: "sarah@example.com", phone: "111111111", country: "France", message: "Bonjour"},
    {name: "David", email: "david@example.com", phone: "222222222", country: "Spain", message: "Hola amigo"},
    {name: "Emily", email: "emily@example.com", phone: "333333333", country: "Italy", message: "Ciao"},
    {name: "Peter", email: "peter@example.com", phone: "444444444", country: "Japan", message: "Konnichiwa"},
    {name: "Linda", email: "linda@example.com", phone: "666666666", country: "Brazil", message: "Oi"}
];
  cards = [
    { imgSrc: '/assets/benifit-icon.jpg', title: 'Why Now is the Time for SAP S/4HANA', link: '#' },
    { imgSrc: '/assets/product_inventory_management1_360.jpg', title: 'Product Inventory Management', link: '#' },
    { imgSrc: '/assets/optimize_your_s4_hana_deployment_360.jpg', title: 'Optimize your S/4HANA Deployment', link: '#' },
    { imgSrc: '/assets/sap_managed_services_by_mckinol1_360.jpg', title: 'SAP Managed Services by McKinsol', link: '#' },
    { imgSrc: '/assets/unlockpo.jpg', title: 'Unlocking the Potential of Data Management in Government', link: '#' },
    { imgSrc: '/assets/Trends-and-Insights-in-Data-Management-1.jpg', title: '2024 in Review: Trends and Insights in Data Management', link: '#' },
    { imgSrc: '/assets/dataempooo.jpg', title: 'Empowering Data Management in Enterprises', link: '#' },
    { imgSrc: '/assets/isox_____intelligent_sales_order_express_360.jpg', title: 'Intelligent Sales Order Express', link: '#' }
  ];


  get paginatedCards() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.cards.slice(startIndex, startIndex + this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage * this.itemsPerPage < this.cards.length) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
