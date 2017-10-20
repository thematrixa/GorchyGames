import { Component, AfterViewInit } from '@angular/core'
import { UserService } from '../../shared/services/user.service';
import { OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [UserService],
  animations: [
    trigger('heroState', [
      state('semi-active', style({
        opacity: 0.5,
        transform: 'scale(1)'
      })),
      state('activee',   style({
        transform: 'scale(1.2)'
      })),
      state('none',   style({
        display:'none'
      })),
      transition('semi-active => active', animate('100ms ease-in')),
      transition('active => semi-active', animate('100ms ease-out')),
      transition('none => semi-active', animate('100ms ease-in')),
      transition('semi-active => none', animate('100ms ease-out'))
      
    ])
  ]
})

export class CarouselComponent implements OnInit, AfterViewInit {

  number:number;
  active: number;
  public state = 'inactive';
  constructor(private userService: UserService,) { }

  ngOnInit(): void {
    this.number = 50000;
    this.active = 2;
  }

  ngAfterViewInit(): void {
 
  }
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
