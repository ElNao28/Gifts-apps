import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifts/services/gifs.service';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css']
})
export class SlidebarComponent {
  constructor(private giftService:GifsService){
  }

  get tagHistori(){
    return this.giftService.tagsHistory;
  }
  public tagSearch(tag:string){
    this.giftService.searchTag(tag);
  }
}
