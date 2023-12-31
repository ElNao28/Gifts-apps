import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifsList:Gif[] = [];

  private _tagsHistory: string[] =[];
  private apiKey:string = 'IKz5gtQ4o4TSSJC5XOQJsZyyfFUj7kwh';
  private serviceUrl:string = 'http://api.giphy.com/v1/gifs';
  constructor(private http:HttpClient) { }

  get tagsHistory(){
    return [...this._tagsHistory];
  }

  organizeHistory(tag:string):void{
    tag = tag.toLowerCase();

    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter((oldTag)=>oldTag !== tag)
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory.slice(0,10);
  }

  searchTag(tag: string): void{
    if(tag.length === 0)return;
    this.organizeHistory(tag);

    const params = new HttpParams()
    .set('api_key',this.apiKey)
    .set('limit', '10')
    .set('q',tag)

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{params})
    .subscribe(resp =>{

      this.gifsList = resp.data;

      // console.log({gifs: this.gifsList});
    });



    // fetch('http://api.giphy.com/v1/gifs/search?api_key=IKz5gtQ4o4TSSJC5XOQJsZyyfFUj7kwh&q=valorant&limit=10')
    // .then(resp => resp.json())
    // .then(data => console.log(data));

  }
}
