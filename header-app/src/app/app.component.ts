import { Component} from '@angular/core';
declare var window : any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

microAppLoader(event){
  window.onClickMenu(event);
}
logout(){
  window.logOut();
}
}
