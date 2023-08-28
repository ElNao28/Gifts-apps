import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ListsGifsComponent } from './components/lists-gifs/lists-gifs.component';



@NgModule({
  declarations: [
    HomeComponent,
    SearchBoxComponent,
    ListsGifsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent,
    SearchBoxComponent,
    ListsGifsComponent
  ]
})
export class GiftsModule { }
