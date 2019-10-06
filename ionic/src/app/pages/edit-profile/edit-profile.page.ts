import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { DataService } from 'src/app/Services/data.service';
import { AppComponent } from 'src/app/app.component';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage  {
email: string;
name: string;
 address: string;

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController, 
    private data : DataService,
    public events: Events
    ) {
this.update();

     }


  update()
  {
    this.email = this.data.email;
this.name = this.data.name;
this.address = this.data.address;
  }


  async sendData(name,email,add) {



    const loader = await this.loadingCtrl.create({
      duration: 2000
    });


    this.data.address = add;
    this.data.email = email;
    this.data.name = name;


    this.update();

    this.publishEvent();


    loader.present();
    loader.onWillDismiss().then(async l => {
      const toast = await this.toastCtrl.create({
        showCloseButton: true,
        cssClass: 'bg-profile',
        message: 'Your Data was Edited!',
        duration: 3000,
        position: 'bottom'
      });

      toast.present();
      this.navCtrl.navigateForward('/home-results');
    });
  
   
  }

  publishEvent(){
  
    this.events.publish('nameChange', this.name);
  }


}
