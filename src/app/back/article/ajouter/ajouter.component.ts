import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/service/article.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {

  success = false;
  titre_input ;
  contenu_input;
  articles;
  url = "https://quiet-gorge-56637.herokuapp.com/articles";

  constructor(
    private service : ArticleService,
    private http : HttpClient,
  ) { }

  ngOnInit(): void {

  };


  onSubmitArticle($event, f){

    $event.preventDefault();
    if(f.valid)
    {
    //console.log(f.value)
    const articles = f.value;
    this.http.post(this.url,JSON.stringify(this.articles))
      .subscribe((response : Response) => {
        // que f.value soit conforme ou pas  => toujours OK avec JSONPlaceholder
        // console.log(response);
        this.articles["_id"] = response['_id']
        this.articles.splice(0,0,this.articles) ;
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



