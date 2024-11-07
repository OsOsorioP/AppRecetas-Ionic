
import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  Receta:  any = []

  constructor(private http:HttpClient) {}

  ngOnInit(){
    this.getReceta().subscribe(res=>{
      console.log("res",res);
      this.Receta = res;
    })
  }

  getReceta(){
    return this.http
    .get('/assets/recetas.JSON')
    .pipe(
      map( (res:any) =>{
        return res.recetas;
        }
      )
    )
  }

}
