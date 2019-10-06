import { Component, OnInit } from '@angular/core';
;
import { interval } from 'rxjs';
import { HttpServiceService } from 'src/app/Services/http-service.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  room:number;
  constructor(private http:HttpServiceService ) { 
  
    
  }
   
  
  ngOnInit() {
    interval(2000).subscribe(x => {
      console.log('hey');
      this.http.getRoom().subscribe(data=>{
        this.room=data.o;
        console.log("data",data.o);
        if(this.room==5){
          console.log("go to room 2");
          document.querySelector('circle').setAttribute("cx","253");
          document.querySelector('circle').setAttribute("cy","82");
          //console.log("hi");

        }
      });
      
  
  
  
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
