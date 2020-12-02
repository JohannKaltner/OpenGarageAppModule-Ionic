import { Component, Input, Renderer2, ViewChild } from "@angular/core";
import { Router } from '@angular/router';
import { RemoteService } from "../providers/remote-service.service";
import { createAnimation } from '@ionic/core'
import { IonItemSliding, IonSlides } from '@ionic/angular';

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  OficinasData: any;
  url: string;
  PageNumber = 1;
  Categoryid: any = 1;
  isOpen: any = false;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };
  selectedCategory: any = 'Carros';


  constructor(public apiService: RemoteService, private router: Router, private renderer: Renderer2) {
    this.OficinasData = [];
  }
  @ViewChild('slides', { static: true }) slides: IonSlides;

  @Input('header') header: any


  ngOnInit() {
    this.getPagination(false, "");
  }

  ionViewWillEnter() {
    this.getPagination(false, "");
  }

  next() {
    this.slides.slideNext();
  }

  back() {
    this.slides.slidePrev();
  }

  // getAllWorkshops() {
  //   //Get saved list of students
  //   this.apiService.getList().subscribe((response) => {
  //     console.log(response);
  //     this.OficinasData = response;
  //   });
  // }

  // delete(item) {
  //   //Delete item in Student data
  //   this.apiService.deleteItem(item.id).subscribe((Response) => {
  //     //Update list after delete is successful
  //     this.getAllWorkshops();
  //   });
  // }

  share(slidingItem: IonItemSliding) {
    slidingItem.open('end');
  }


  slideChanged(e: any) {
    console.log(this.slides.getActiveIndex())
    this.slides.getActiveIndex().then((index: number) => {
      if (index === 0) {
        this.selectedCategory = 'Carros';
        this.Categoryid = 1;
      } else {
        this.selectedCategory = 'Motos';
        this.Categoryid = 2;
      }
      // this.OficinasData.splice(0, this.OficinasData.length);
      this.PageNumber = 1;
      this.getPagination(false, '');
    });
  }

  // getCategory() {
  //   this.OficinasData = [];
  //   this.apiService.getByCat(this.Categoryid).subscribe((Response) => {
  //     this.OficinasData = Response;
  //   });
  // }

  getPagination(isFirstLoad, event) {
    this.apiService.getListPaginate(this.PageNumber)
      .subscribe((data: any) => {
        for (let i = 0; i < data.length; i++) {
          this.OficinasData.push(data[i]);
        }
        if (isFirstLoad) {
          event.target.complete();
          ++this.PageNumber;
        }
      }, error => {
        console.log(error);
      })
  }

  doInfinite(event) {
    this.getPagination(true, event);
  }
  Access(item) {
  }

  // lastX: any;
  // logScrolling(event) {
  //   if (event.detail.scrollTop > Math.max(0, this.lastX)) {
  //     this.renderer.setStyle(this.header, 'margin-top', `-${this.header.clientHeight}px`)
  //     this.renderer.setStyle(this.header, 'transition', `margin-top 400ms`)

  //   } else {
  //     this.renderer.setStyle(this.header, 'margin-top', '0')
  //     this.renderer.setStyle(this.header, 'transition', `margin-top 400ms`)

  //   }
  //   this.lastX = event.detail.scrollTop;

  // }

}
