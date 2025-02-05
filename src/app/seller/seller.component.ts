import { Component, OnInit } from '@angular/core';
import { SellerServiceService } from '../services/seller-service.service';
import { Router } from '@angular/router';
import { Login, SellerModel } from '../data-type';

@Component({
  selector: 'app-seller',
  standalone: false,

  templateUrl: './seller.component.html',
  styleUrl: './seller.component.css'
})
export class SellerComponent implements OnInit {
  constructor(private sellerService: SellerServiceService, private router: Router) { }
  showLogin = false;
  authError:string ='';
  ngOnInit(): void {
    this.sellerService.reloadSeller()
  }
  signUp(data: SellerModel): void {
    this.sellerService.userSignUp(data)
  }
  login(data: Login): void {
    this.authError='';
    this.sellerService.userLogin(data);
    this.sellerService.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError="Email or Password is incorrect";
      }
    })
  }
  OpenLogin(){
    this.showLogin = !this.showLogin ;
  }
}
