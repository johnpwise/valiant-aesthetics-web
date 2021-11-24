import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-side-nav-item',
  templateUrl: './side-nav-item.component.html',
  styleUrls: ['./side-nav-item.component.scss']
})
export class SideNavItemComponent implements OnInit {

  @Input() title: string = '';
  @Input() url: string = '';
  @Input() icon: string = '';
  @Input() access: string = '';
  @Input() display: boolean = false;

  constructor() { }

  public ngOnInit(): void {
  }

}
