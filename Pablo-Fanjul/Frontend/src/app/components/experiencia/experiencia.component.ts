import { Component, OnInit, inject } from '@angular/core';
import { Experiencia } from 'app/model/experiencia';
import { SExperienciaService } from 'app/service/s-experiencia.service';
import { TokenService } from 'app/service/token.service';



@Component({
  selector: 'app-edit-experiencia',
  templateUrl: 'experiencia.component.html',
  styleUrls: ['experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  expe: Experiencia[] = []

  
  constructor(private sExperiencia: SExperienciaService, private  tokenService: TokenService) { }

    isLogged = false;

  ngOnInit(): void {

    this.cargarExperiencia();
    if(this.tokenService.getToken()){
       this.isLogged =true;
    } else {
      this.isLogged =false;
    }
    
  }
cargarExperiencia():void{
  this.sExperiencia.lista().subscribe((data: Experiencia[]) => {this.expe = data;})
}
delete(id?: number){
  if(id != undefined){
    this.sExperiencia.delete(id)
    .subscribe(
    {
       next: data => {
          this.cargarExperiencia();
      },
      error: err => {
        alert("No se pudo borrar la experiencia");
      }
          
    });

  }
}
}  


  
