import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layoutPage',
  templateUrl: './layoutPage.component.html',
  styleUrls: ['./layoutPage.component.css'],
})
export class LayoutPageComponent implements OnInit {
  public sidebarItems = [
    { label: 'List heroes', icon: 'label', url: './list-heroes' },
    { label: 'Add heroes', icon: 'add', url: './new-hero' },
    { label: 'Search hero', icon: 'search', url: './search-hero' },
  ];

  constructor() {}

  ngOnInit() {}
}
