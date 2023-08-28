import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'app-lists-gifs',
  templateUrl: './lists-gifs.component.html',
  styleUrls: ['./lists-gifs.component.css']
})
export class ListsGifsComponent {
  @Input()
  public gifs:Gif[] = [];
}
