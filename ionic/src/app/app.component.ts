import { Component, OnChanges, OnInit } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Events } from '@ionic/angular';
import { Pages } from './interfaces/pages';
import { DataService } from './Services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, OnInit {

  public appPages: Array<Pages>;
name:string;
 email:string;
 
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController,
    private data: DataService,
    public events: Events

  ) {
  
     
    this.appPages = [
      {
        title: 'Home',
        url: '/home-results',
        direct: 'root',
        icon: 'home'
      },
      {
        title: 'About',
        url: '/about',
        direct: 'forward',
        icon: 'information-circle-outline'
      },
      {
        title: 'Map',
        url: '/map',
        direct: 'root',
        icon: 'map'
      },
      {
        title: 'App Settings',
        url: '/settings',
        direct: 'forward',
        icon: 'cog'
      }
    ];

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    }).catch(() => {});
  }

  goToEditProgile() {
    this.navCtrl.navigateForward('edit-profile');
  }

  logout() {
    this.navCtrl.navigateRoot('/');
  }


  ngOnInit(){
    this.name = this.data.name;
    this.email = this.data.email;
    this.events.subscribe('nameChange', (name) => {
    this.name = name;
    });
  }

  ngOnChanges()
  {
    this.name = this.data.name;
    this.email = this.data.email;
    this.events.subscribe('nameChange', (name) => {
      this.name = name;
      });
  }
}
