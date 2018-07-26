import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server',name:'TestServer',content:'Just a test!'}];
  oddNumbers=[1,3,5];
  evenNumbers=[2,4]
  onlyOdd=false;
  
  onServerAdded(serverData:{serverName:string, serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(serverData:{serverName:string, serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
  
  onChangeFirst(){
    this.serverElements[0].name='Changed';
  }

  onDestroyFirst(){
    this.serverElements.splice(0);
  }
}
