import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private renderer: Renderer2, private menu: MenuController) {

  }


  @Input() title: string
  @Input() header: any


  ngOnInit() { }

  openMenu() {
    this.menu.open();
  }
}
