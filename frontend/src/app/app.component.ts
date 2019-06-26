import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show:boolean = false;
  title = 'SGAglacial';

  onToggleSidebar() {
    document.getElementById("sidebar").classList.toggle('active');
    document.getElementById("working-area").classList.toggle('active');      

    if (this.show)
      this.show = false
    else if (!this.show)
      this.show = true;
  }

  
}

