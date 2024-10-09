import { Component } from '@angular/core';

@Component({
  selector: 'app-intelligent-data-migration',
  templateUrl: './intelligent-data-migration.component.html',
  styleUrl: './intelligent-data-migration.component.scss'
})
export class IntelligentDataMigrationComponent {
  tabs = [
    {
      title: 'Seamless Transition to SAP S/4HANA',
      content: [
        'Minimize business disruption during the migration process',
        'Ensure a smooth and efficient transition to the new SAP S/4HANA platform',
        'Leverage our expertise to plan and execute the migration with precision'
      ]
    },
    {
      title: 'Improved Data Quality and Governance',
      content: [
        'Enhance data integrity and accuracy through our structured migration process',
        'Implement robust data cleansing and validation mechanisms',
        'Establish a strong data governance framework to maintain data quality post-migration'
      ]
    },
    {
      title: 'Streamlined Business Processes',
      content: [
        'Optimize business processes with SAP S/4HANA',
        'Increase efficiency across various departments',
        'Leverage automation and integration for seamless operations'
      ]
    },
    {
      title: 'Reduced Total Cost of Ownership (TCO)',
      content: [
        'Lower infrastructure costs with streamlined processes',
        'Efficient system performance reduces operational overhead',
        'Benefit from long-term savings with SAP S/4HANA'
      ]
    },
    {
      title: 'Future-Proof Enterprise',
      content: [
        'Prepare your enterprise for future challenges with scalable architecture',
        'Adapt to evolving market demands with flexibility',
        'Ensure long-term success with SAP’s cutting-edge solutions'
      ]
    },
    {
      title: 'Competitive Advantage',
      content: [
        'Gain a competitive edge with real-time data analysis',
        'Leverage advanced business insights to make informed decisions',
        'Outperform competitors by staying ahead in technological advancements'
      ]
    }
  ];

  selectedTab: number = 0; 

  selectTab(index: number) {
    this.selectedTab = index;
  }
}
