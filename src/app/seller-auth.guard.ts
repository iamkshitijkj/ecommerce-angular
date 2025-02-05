import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from "@angular/router";
import { SellerServiceService } from "./services/seller-service.service";
import { Observable } from "rxjs";

@Injectable({
   providedIn: "root",
})
export class sellerAuthGuard implements CanActivate {
   constructor(private sellerService: SellerServiceService, private router: Router) {}

   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(localStorage.getItem('seller')){
      return true;
    }  
    return this.sellerService.isSellerLoggedIn;
   }
}

