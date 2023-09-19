import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

 @Output() sideBarOpen = true;

 public sideBarToggler(){
  this.sideBarOpen = !this.sideBarOpen;
}

}
