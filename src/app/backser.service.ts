import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackserService {

  //API_ADR:String="https://rocky-stream-36920.herokuapp.com/"
  API_ADR:String="http://localhost:8001/"

  constructor(
    private _http:HttpClient,
  ) { }

  sendImage({imge,option,tagList}){
    
    const formdata=new FormData()
   
    for(let elem of imge)
      formdata.append('file[]',elem)
    formdata.append('option',option)
   
    for(let tag of tagList)
      formdata.append('tag',tag)
    console.log(formdata)
    
    return this._http.post(this.API_ADR+'image',formdata)
  }

  searchList(val){
    return this._http.post(this.API_ADR+'search',{'searchVal':val})
  }

  getFolderList(){
    return this._http.get(this.API_ADR+'driveList')
  }
}
