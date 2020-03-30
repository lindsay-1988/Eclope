import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Utilisateur {
  _id: string;
  nom: string;
  prenom: string;
  email: string;
  role: string;
  estActif: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "https://quiet-gorge-56637.herokuapp.com/utilisateurs"

  constructor(private http : HttpClient) { }

    // lire tout les utilisateurs
  getAllUtilisateurs(){
    return this.http.get(this.url);
  }
  // lire un utilisateur
  getUtilisateursById(_id){
    return this.http.get(this.url+"/"+_id);
  }

   // créer un utilisateur

   create(utilisateur)
   {
     return this.http.post(this.url,utilisateur) ;
   }

   // modifier un utilisateur

   update(utilisateur)
   {
     return this.http.put(`${this.url}/${utilisateur._id}`,utilisateur) ;
   }

   // supprimer un utilisateur

   deletePosts(_id)
   {
     return this.http.delete(`${this.url}/${_id}`);
   }
}
