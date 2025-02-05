import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit{
  menuType : string = 'default';
  sellerName : string = '';
  constructor(private route : Router){}

  ngOnInit(): void {
    this.route.events.subscribe((val : any) => {
        if(val.url){
          if(localStorage.getItem('seller') && val.url.includes('seller')){
            let sellerLocalStorage = localStorage.getItem('seller');
            let sellerData = sellerLocalStorage && JSON.parse(sellerLocalStorage)[0];
            this.sellerName = sellerData.name;
            this.menuType = "seller"
          }
          else{
            console.warn("in outside area");
            this.menuType = "default"
          }
        }
    })
  }
  logout():void{
    localStorage.removeItem('seller');
    this.route.navigate(['/']);
  }
}
