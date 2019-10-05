import { Component, OnInit } from '@angular/core';
import { HttpService } from '../Services/http-service.service';
import { interval } from 'rxjs';



@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{
  room:number;
  constructor(
    private http:HttpService
  ) { 
    
  }
   
  
  ngOnInit() {
    interval(2000).subscribe(x => {
      console.log('hey');
      // this.dosmthn();
      this.http.getRoom().subscribe(data=>{
        this.room=data.o;
        console.log("data",data.o);
      })
      //this.dosmthn();
  
  
  
    });
    
  
  
    }
  
  // dosmthn()
  // {
  //   this.http.getData().subscribe(
  //     data => {
  //       console.log(data);
  //     });
  
  
  //   }
    
    
  MovePoint(event){
    let clientRect = event.target.getBoundingClientRect();
    let x = clientRect.left; //x position within the element.
    let y = clientRect.top;  //y position within the element.
    let Cx=event.clientX-x ;
    let Cy=event.clientY-y;
    let SCx=Cx.toString()
    let SCy=Cy.toString()
    document.querySelector('circle').setAttribute("cx",SCx);
    document.querySelector('circle').setAttribute("cy",SCy);
    console.log("X",event.clientX,"Y",event.clientY);
    console.log("cX",Cx.toString(),"cY",Cy.toString());

    
  }


}
