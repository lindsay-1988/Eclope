import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-ajouter-user',
  templateUrl: './ajouter-user.component.html',
  styleUrls: ['./ajouter-user.component.css']
})
export class AjouterUserComponent implements OnInit {

  success = false;
  nom_input ;
  prenom_input ;
  contenu_input;
  email_input;
  url = "https://quiet-gorge-56637.herokuapp.com/utilisateurs";
  utilisateurs;



  constructor(
    private http : HttpClient,
    private service : UserService,
  ) { }

  ngOnInit(): void {
  }

    // cette méthode va être déclancher quand l'internaute va cliquer sur le boutton submit "envoyer du formulaire"
    // f => correspond à l'ensemble des champs du formulaire

    onSubmitUtilisateur($event,f){

      $event.preventDefault();
      if(f.valid){
       //console.log(f.value)
      const utilisateurs = f.value;
      this.http.post(this.url,JSON.stringify(this.utilisateurs))
        .subscribe((response : Response) => {
          // que f.value soit conforme ou pas  => toujours OK avec JSONPlaceholder
          // console.log(response);
          this.utilisateurs["_id"] = response['_id']
          this.utilisateurs.splice(0,0,this.utilisateurs) ;
        })
        // afficher dans la console
        console.log(f.value)

        // afficher dans un bandeau tout est ok
        this.success = true;

        // vide les champs du formulaire
        f.resetForm();
      }
    }

}
