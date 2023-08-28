import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-search-box',
  template: `
  <h5>Buscar</h5>
  <input type="text"
  class="form-control"
  placeholder="Buscar gifs..."
  (keyup.enter)="searchTag()"
  #txtTagInput
  >`
})
export class SearchBoxComponent {



  constructor(private giftService: GifsService){

  }

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  searchTag():void{
    const newTag = this.tagInput.nativeElement.value;
    this.giftService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';

  }
}
