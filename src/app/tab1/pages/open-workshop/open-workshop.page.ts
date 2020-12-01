import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RemoteService } from '../../../providers/remote-service.service';

declare var id: any;
@Component({
  selector: 'app-open-workshop',
  templateUrl: './open-workshop.page.html',
  styleUrls: ['./open-workshop.page.scss'],
})
export class OpenWorkshopPage implements OnInit {


  ValoresOficina: any;
  Oficina: any;
  sub: any;
  constructor(public apiService: RemoteService, private router: Router, private route: ActivatedRoute) { }
  goBack() {
    this.router.navigate(['']);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.Oficina = params['Oficina'];
      console.log(params.Oficina, 'opa')
      this.getWorkshop(params.Oficina)
    });
  }


  getWorkshop(Oficina) {
    //Get saved list of students
    this.apiService.getItem(Oficina).subscribe((response) => {
      this.ValoresOficina = response;
      console.log(this.ValoresOficina)
    });

  }
}
