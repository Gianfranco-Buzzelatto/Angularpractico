import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: Array<{ links: string, title: string }> = [
    { links: '/home', title: 'Home' },
    { links: '/productos', title: 'Productos' },
    { links: '/contacto', title: 'Contacto' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
