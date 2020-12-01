import { Component } from '@angular/core';
import { ThemeService } from '../providers/Theme/theme.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  dark = false;
  get page() {
    return {
      title: 'Usuario'
    };
  }

  constructor(private themeService: ThemeService) {}

  onToggleColorTheme(event){
    if(event.detail.checked){
      document.body.setAttribute('color-theme', 'dark');
    } else{
      document.body.setAttribute('color-theme', 'light');
    }
  }

}
