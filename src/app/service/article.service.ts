import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Produit {
  _id: string;
  titre: string;
  contenu: string;
  nomAuteur: string;
  categories: string;
  email: string;
  estPublie: boolean;
  img: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  url = "https://quiet-gorge-56637.herokuapp.com/articles"

  constructor(private http : HttpClient) { }

    // lire tout les articles
  getAllArticles(){
    return this.http.get(this.url);
  }
  // lire un article
  getArticlesById(_id){
    return this.http.get(this.url+"/"+_id);
  }

   // créer un article

   create(article)
   {
     return this.http.post(this.url,article) ;
   }

   // modifier un article

   update(article)
   {
     return this.http.put(`${this.url}/${article._id}`,article) ;
   }

   // supprimer un article

   deletePosts(_id)
   {
     return this.http.delete(`${this.url}/${_id}`);
   }
}
