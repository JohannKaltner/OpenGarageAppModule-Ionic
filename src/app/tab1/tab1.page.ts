import { Component } from '@angular/core';
import { RemoteService } from '../providers/remote-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  OficinasData: any;

  constructor(
    public apiService: RemoteService
  ) {

    this.OficinasData = [];
  }
  ngOnInit() {
    this.getAllWorkshops();
  }

  ionViewWillEnter() {
    // Used ionViewWillEnter as ngOnInit is not 
    // called due to view persistence in Ionic
    this.getAllWorkshops();
  }

  getAllWorkshops() {
    //Get saved list of students
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.OficinasData = response;
    })
  }


  delete(item) {
    //Delete item in Student data
    this.apiService.deleteItem(item.id).subscribe(Response => {
      //Update list after delete is successful
      this.getAllWorkshops();
    });
  }


}
