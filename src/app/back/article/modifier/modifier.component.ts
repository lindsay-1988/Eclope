import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {

  success = false;
  titre_input ;
  contenu_input;
  articles;




  constructor() { }

  ngOnInit(): void {

  }

  updateArticle(f){
    if(f.valid)
    {

      // afficher dans la console
      console.log(f.value)

      // afficher dans un bandeau tout est ok
      this.success = true;

      // vide les champs du formulaire
      f.resetForm();
    }
  }




}
