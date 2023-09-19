import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  sideBarOpen = false;


  toggleSideBar(){
    this.toggleSideBarForMe.emit();
    }
    sideBarToggler(){
      this.sideBarOpen = !this.sideBarOpen;
    }
}
