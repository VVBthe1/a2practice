import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayContent: boolean  = false;
  logItems = [];

  constructor() {
    this.logAction("Application Started");
  }

  toggleDisplay() {
    this.displayContent = !this.displayContent;
    if(this.displayContent) {
      this.logAction("Content shown");
    }
    else {
      this.logAction("Content hidden");
    }
  }

  logAction(action: string) {
    var datetime = new Date();
    var log_content = datetime.toUTCString() + ':' + action;
    this.logItems.push(log_content);
  }

  getBgColor() {
    return (this.logItems.length > 5) ? 'blue' : 'white';
  }
}
