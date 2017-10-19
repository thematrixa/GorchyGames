import { Component, AfterViewInit } from '@angular/core'
import { trigger, state, style, animate, transition } from '@angular/animations';
import { UserService } from '../../shared/services/user.service';
import * as carouselComponentJQuery from './..//CarouselComponent/carousel.component.js';
import { OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [UserService],

})

export class CarouselComponent implements OnInit, AfterViewInit {

  number:number;
  active: number;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.number = 50000;
    this.active = 2;
  }

  ngAfterViewInit(): void {
 
  }

  // pullGamesToTheRight():void{
  //   this.active = this.active+1;
  //   document.getElementById(this.active-1+"").className = "semi-active";
 
  // }

  pullGamesToTheLeft():void{

    if(this.active==0){
    }

    if(this.active==1){
      document.getElementById(0+"").className = "active";
      document.getElementById(1+"").className = "semi-active";
      document.getElementById(2+"").className = "semi-active";
      document.getElementById(3+"").className = "none";
      document.getElementById(4+"").className = "none";
      document.getElementById(5+"").className = "none";
    }
    if(this.active==2){
      document.getElementById(0+"").className = "semi-active";
      document.getElementById(1+"").className = "active";
      document.getElementById(2+"").className = "semi-active";
      document.getElementById(3+"").className = "none";
      document.getElementById(4+"").className = "none";
      document.getElementById(5+"").className = "none";
    }
    if(this.active==3){
      document.getElementById(0+"").className = "none";
      document.getElementById(1+"").className = "semi-active";
      document.getElementById(2+"").className = "active";
      document.getElementById(3+"").className = "semi-active";
      document.getElementById(4+"").className = "none";
      document.getElementById(5+"").className = "none";
    }if(this.active==4){
      document.getElementById(0+"").className = "none";
      document.getElementById(1+"").className = "none";
      document.getElementById(2+"").className = "semi-active";
      document.getElementById(3+"").className = "active";
      document.getElementById(4+"").className = "semi-active";
      document.getElementById(5+"").className = "none";
    }
    if(this.active==5){
      document.getElementById(0+"").className = "none";
      document.getElementById(1+"").className = "none";
      document.getElementById(2+"").className = "none";
      document.getElementById(3+"").className = "semi-active";
      document.getElementById(4+"").className = "active";
      document.getElementById(5+"").className = "semi-active";
    }
    if(this.active>0){
      this.active=this.active-1;
    }
    
  }

  pullGamesToTheRight():void{
    
        if(this.active==0){
          document.getElementById(0+"").className = "semi-active";
          document.getElementById(1+"").className = "active";
          document.getElementById(2+"").className = "semi-active";
          document.getElementById(3+"").className = "none";
          document.getElementById(4+"").className = "none";
          document.getElementById(5+"").className = "none";
        }
        if(this.active==1){
          document.getElementById(0+"").className = "none";
          document.getElementById(1+"").className = "semi-active";
          document.getElementById(2+"").className = "active";
          document.getElementById(3+"").className = "semi-active";
          document.getElementById(4+"").className = "none";
          document.getElementById(5+"").className = "none";
        }if(this.active==2){
          document.getElementById(0+"").className = "none";
          document.getElementById(1+"").className = "none";
          document.getElementById(2+"").className = "semi-active";
          document.getElementById(3+"").className = "active";
          document.getElementById(4+"").className = "semi-active";
          document.getElementById(5+"").className = "none";
        }
        
        if(this.active==3){
          document.getElementById(0+"").className = "none";
          document.getElementById(1+"").className = "none";
          document.getElementById(2+"").className = "none";
          document.getElementById(3+"").className = "semi-active";
          document.getElementById(4+"").className = "active";
          document.getElementById(5+"").className = "semi-active";
        }
        if(this.active==4){
          document.getElementById(0+"").className = "none";
          document.getElementById(1+"").className = "none";
          document.getElementById(2+"").className = "none";
          document.getElementById(3+"").className = "semi-active";
          document.getElementById(4+"").className = "semi-active";
          document.getElementById(5+"").className = "active";
        }
        if(this.active==5){
      
        }
        if(this.active<5){
          this.active=this.active+1;
        }
        
      }
  


}
