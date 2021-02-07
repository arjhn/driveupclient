import { BackserService } from './../backser.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  form:FormGroup
  folderLi:any
  selectedOption:String
  file:any
  tagList:String[]=[]
  tagValue:String=''
  imgURL:any
  imgType:any

  constructor(
    private _back:BackserService,
    private fb:FormBuilder
  ) { 
    this.form=this.fb.group({
      imge:[null]
    })
  }

  ngOnInit(): void {
    this._back.getFolderList().subscribe(data=>{
      this.folderLi=data['ma']
      console.log(this.folderLi)
    })

  }

  uploadFile(event){
    this.file=(event.target as HTMLInputElement).files
    
    let reader = new FileReader()
    reader.readAsDataURL(this.file[0])
    reader.onload=(_event)=>{
      this.imgURL=reader.result
    }
    this.imgType=this.file[0].type
    console.log(this.imgType)
  }

  selectChange(Option){
    this.selectedOption=Option
    console.log(this.selectedOption)
  }

  folderList(){
    this._back.sendImage({'imge':this.file,'option':this.selectedOption,'tagList':this.tagList}).subscribe(data=>{
      console.log(data)
    })
  }

  liEnter(event){
    
    event.preventDefault()
    this.tagList.push(event.target.textContent)
    
    event.target.textContent=''
  }

  crossClick(val){
    this.tagList.splice(val,1)
  }

}

//  <link rel="icon" type="image/x-icon" href="favicon.ico">
