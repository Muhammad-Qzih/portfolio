import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  navItems = [
    { label: 'Home', icon: 'fa-solid fa-house fa-fw', link: '/home' },
    { label: 'Projects', icon: 'fa-solid fa-briefcase fa-fw', link: '/projects' },
    { label: 'Education', icon: 'fa-solid fa-graduation-cap fa-fw', link: '/education' },
    { label: 'Skills', icon: 'fa-solid fa-tools fa-fw', link: '/skills' },
    { label: 'Contact', icon: 'fa-solid fa-envelope fa-fw', link: '/contact' }
  ];
}
