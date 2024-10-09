import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-dmac',
  templateUrl: './dmac.component.html',
  styleUrl: './dmac.component.scss'
})
export class DmacComponent implements OnInit{
  ngOnInit(): void {}

  oneAtATime = true;
  isFirstOpen = true;
}
