import { Component, ViewChild, ElementRef} from "@angular/core";
import { RemoteService } from "../providers/remote-service.service";

declare var google: any;

@Component({
  selector: "app-tabmap",
  templateUrl: "tabmap.page.html",
  styleUrls: ["tabmap.page.scss"],
})
export class TabMapPage {
  OficinasData: any;
  map:any;

  @ViewChild('map', {read: ElementRef, static: false}) mapRef:ElementRef;

  constructor(public apiService: RemoteService) {
    this.OficinasData = [];
  }
  ngOnInit() {
    this.showMap();
  }

  ionViewWillEnter() {
    // Used ionViewWillEnter as ngOnInit is not
    // called due to view persistence in Ionic
    this.showMap();
  }
  
  showMap() {
    const location = new google.maps.LatLng(-17.824858, 31.053028)
    const options = {
      center:location,
      zoom:15,
      disableDefaultUI:true
    }
    this.map =  new google.maps.Map(this.mapRef.nativeElement, options)
  }

  getAllWorkshops() {
    //Get saved list of students
    this.apiService.getList().subscribe((response) => {
      console.log(response);
      this.OficinasData = response;
    });
  }

  delete(item) {
    //Delete item in Student data
    this.apiService.deleteItem(item.id).subscribe((Response) => {
      //Update list after delete is successful
      this.getAllWorkshops();
    });
  }
}
