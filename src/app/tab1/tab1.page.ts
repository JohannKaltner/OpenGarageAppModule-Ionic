import { Component } from "@angular/core";
import { RemoteService } from "../providers/remote-service.service";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  OficinasData: any;
  url: string;
  page_number = 1;

  constructor(public apiService: RemoteService) {
    this.OficinasData = [];
  }
  ngOnInit() {
    this.getPagination(false, "");
  }

  ionViewWillEnter() {
    this.getPagination(false, "");
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

  getPagination(isFirstLoad, event) {

    this.apiService.getListPaginate(this.page_number)
      .subscribe((data: any) => {
        for (let i = 0; i < data.length; i++) {
          this.OficinasData.push(data[i]);
        }
        if (isFirstLoad)
          event.target.complete();
        this.page_number++;
      }, error => {
        console.log(error);
      })
  }
  
  doInfinite(event) {
    this.getPagination(true, event);
  }

}
