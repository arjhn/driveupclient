import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackserService {

  constructor(
    private _http:HttpClient
  ) { }

  sendImage({imge,option,tagList}){
    const formdata=new FormData()
    for(let elem of imge)
      formdata.append('file[]',elem)
    formdata.append('option',option)
    for(let tag of tagList)
      formdata.append('tag',tag)
    console.log(formdata)
    return this._http.post('http://localhost:8001/image',formdata)
  }

  searchList(val){
    return this._http.post('http://localhost:8001/search',{'searchVal':val})
  }

  getFolderList(){
    return this._http.get('http://localhost:8001/driveList')
  }
}
