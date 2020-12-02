import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @Input() data: any;
  @Input() events: any;




  public username: string;
  public password: string;
  public slides: any;
  public isUsernameValid: boolean;
  public isPasswordValid: boolean;

  constructor() {
    this.isUsernameValid = true;
    this.isPasswordValid = true;
    this.slides = [
      {
        title: 'Bem-Vindo!!',
        description: '<p>Este é o <b>Radar de Oficinas,</b> Localize oficinas próximas Através da sua localização e o guiaremos até lá! </p>',
        image: '../../assets/imgs/1.png',
        color: '#2dd36f',
      },
      // {
      //   title: 'Como assim?',
      //   description: '<p> <b>Relaxa</b>, Nós seremos os responsáveis por proteger o seu suado dinheiro, até que você se sinta inteiramente satisfeito com serviço. .</p>',
      //   image: '../../assets/imgs/2.png',
      //   color: '#2dd36f',
      // },
      // {
      //   title: 'Vamos Começar?',
      //   description: '<p> <b>Relaxa</b>, Nós seremos os responsáveis por proteger o seu suado dinheiro, até que você se sinta inteiramente satisfeito com serviço. .</p>',
      //   image: '../../assets/imgs/bg-3.png',
      //   color: '#2dd36f',
      // }
    ];
  }

  ngOnInit() {
  }

  onEvent = (event: string): void => {
    if (event == 'onLogin' && !this.validate()) {
      return;
    }
    if (this.events[event]) {
      this.events[event]({
        username: this.username,
        password: this.password
      });
    }
  }

  validate(): boolean {
    this.isUsernameValid = true;
    this.isPasswordValid = true;
    if (!this.username || this.username.length == 0) {
      this.isUsernameValid = false;
    }

    if (!this.password || this.password.length == 0) {
      this.isPasswordValid = false;
    }

    return;
  }
}
