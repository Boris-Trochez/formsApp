import { Component } from '@angular/core';

interface menuItem {
  text: string;
  route: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `]
})

export class SidemenuComponent {

  templateMenu: menuItem[] = [
    {
      text: 'basics',
      route: './template/basics'
    },
    {
      text: 'dynamics',
      route: './template/dynamics'
    },
    {
      text: 'switches',
      route: './template/switches'
    }
  ];

  reactiveMenu: menuItem[] = [
    {
      text: 'basics',
      route: './reactive/basics'
    },
    {
      text: 'dynamics',
      route: './reactive/dynamics'
    },
    {
      text: 'switches',
      route: './reactive/switches'
    }
  ];
}
