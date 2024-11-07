import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.page.html',
  styleUrls: ['./receta.page.scss'],
})
export class RecetaPage implements OnInit {
  Receta:  any = []
  id:any
  Ingredientes: any = []
  Porciones:any=[]
  NuIng:any=[]
  NuPor:any=[]

  constructor(private http:HttpClient, private activatedRoute:ActivatedRoute) { }

  ngOnInit(){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.getReceta().subscribe(res=>{
      console.log("Recetas",res);
      this.Receta = res;
    })

    this.getIngredientes().subscribe(res=>{
      console.log("Ingredientes",res);
      this.Ingredientes = res;
    })

    this.getPorciones().subscribe(res=>{
      console.log("Porciones",res);
      this.Porciones = res;
    })

    this.getNumeroIng().subscribe(res=>{
      console.log("NuIng",res);
      this.NuIng = res;
    })

    this.getNumeroPor().subscribe(res=>{
      console.log("NuPor",res);
      this.NuPor = res;
    })


  }

  

  getReceta(){
    return this.http
    .get('/assets/recetas.JSON')
    .pipe(
      map( (res:any) =>{
        return res.recetas[this.id-1];
        }
      )
    )
  }

  getIngredientes(){
    return this.http
    .get('/assets/recetas.JSON')
    .pipe(
      map( (res:any) =>{
        return res.ingredientes;
        }
      )
    )
  }

  getPorciones(){
    return this.http
    .get('/assets/recetas.JSON')
    .pipe(
      map( (res:any) =>{
        return res.porciones;
        }
      )
    )
  }

  getNumeroIng(){
    return this.http
    .get('/assets/recetas.JSON')
    .pipe(
      map( (res:any) =>{
        return res.recetas[this.id-1]["ingredientes"];
        }
      )
    )
  }

  getNumeroPor(){
    return this.http
    .get('/assets/recetas.JSON')
    .pipe(
      map( (res:any) =>{
        return res.recetas[this.id-1]["porciones"];
        }
      )
    )
  }

}
