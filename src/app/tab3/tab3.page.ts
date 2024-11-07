import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
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
