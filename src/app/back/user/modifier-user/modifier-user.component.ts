import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-modifier-user',
  templateUrl: './modifier-user.component.html',
  styleUrls: ['./modifier-user.component.css']
})
export class ModifierUserComponent implements OnInit {

  success = false;
  titre_input ;
  contenu_input;
  email_input;
  nom_input;
  prenom_input;
  utilisateur;


  constructor() { }

  ngOnInit(): void {

  }

  updateUtilisateur(f){
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
