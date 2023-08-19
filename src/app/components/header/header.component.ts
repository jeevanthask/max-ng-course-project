import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Recipes',
        icon: 'pi pi-fw pi-file',
      },
      {
        label: 'Shopping List',
        icon: 'pi pi-fw pi-pencil',
      },
    ];
  }
}
