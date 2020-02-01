import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
  private id:any;
  private sueldo:any;

  ngOnInit() {



    this.route.params.subscribe((par)=>{

      let a=par['id'];
      let b=par['sueldo'];

      if(a!=null&&b!=null){
        this.id=a;
        this.sueldo=b;

      }else{
        alert("parametros invalidos");
      }


    });


  }
}
