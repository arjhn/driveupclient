import { BackserService } from './../backser.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  imageObj:any
  searchVal:String=''

  constructor(
    private _backser:BackserService
  ) { }

  ngOnInit(): void {
  }

  searchFun(event){
    this._backser.searchList(event.target.value).subscribe(data=>{
      this.imageObj=data['searchRes']
    })
  }
}
