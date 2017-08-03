import { Component } from '@angular/core';

@Component({
    selector: 'app-server', //should be unique throughout the app
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']

})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';

    getServerStatus() {
        return this.serverStatus;
    }
}