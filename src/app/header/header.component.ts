import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  menuType : String = 'default';
  constructor(private route : Router){}

  ngOnInit(): void {
    this.route.events.subscribe((val : any) => {
        if(val.url){
          if(localStorage.getItem('seller') && val.url.includes('seller')){
            console.warn("in seller area");
            this.menuType = "seller"
          }
          else{
            console.warn("in outside area");
            this.menuType = "default"
          }
        }
    })
  }

}
