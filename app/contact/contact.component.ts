import { Component, OnInit } from '@angular/core';
import {HttpClientService} from './service/http-client.service';
import {AddUser} from '../add-user'; 
import { Observable } from 'rxjs';
import { GetUser } from '../get-user';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  isValidateFormSubmitted= false;
  adduser =new AddUser();
form = new FormGroup({
  email: new FormControl('',[Validators.required,Validators.email]),
  name : new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')])
});
  getUse:GetUser[];
  user:AddUser=new AddUser(); 
  submitted = false;
  //Id:Observable<GetUser[]>
  //Name:Observable<GetUser[]>
  constructor(
 
    private httpClientService:HttpClientService
  ) { }

  ngOnInit() { 
    this.getUser();
//    this.reloadData();
}
public getUser(){
  this.httpClientService.getUser()
  .subscribe((data:GetUser[])=>{
    console.log(GetUser)
    this.getUse=data;
  });
  error=>console.log("Error:"+error)
}

/*getUser(){
  this.httpClientService.getUserList()
  .subscribe(
    res=>{
      console.log(res);
      this.reloadData();
    }
  )
}
reloadData()
{
  this.domainName=this.httpClientService.getUserList();
  this.domainId=this.httpClientService.getUserList();
}*/

    
  
          newaddUser():void{
      this.submitted=false;
      this.save();
    }
save(){
  this.httpClientService.addUser(this.user)
  .subscribe(data => console.log(data),error=> console.log(error))
   this.user=new AddUser();
}

onSubmit(employeeForm:NgForm){
  this.isValidateFormSubmitted=false;
  if(employeeForm.invalid){
    return;
  }
  this.adduser= employeeForm.value;
  this.httpClientService.createUser(this.adduser);
  this.adduser= new AddUser();
  this.submitted = true; 
  employeeForm.form.reset();
  


}

    addUser():void{
      this.httpClientService.addUser(this.user)
      .subscribe(data=>{
        alert("Contact created succefully");
      });
    
  };

}
