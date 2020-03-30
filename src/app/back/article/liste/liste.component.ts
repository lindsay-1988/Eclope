import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/service/article.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  articles;
  pageActuel = 1;
  url = "https://quiet-gorge-56637.herokuapp.com/articles";



  constructor(
    private service : ArticleService,
    private http : HttpClient,

  ) { }

  // Lire
  ngOnInit(): void {
    this.service.getAllArticles()
     .subscribe((response : Response) => {
       this.articles = response
     })

  }

  // Supprimer
  onDeleteArticle(article)
  {
   this.service.deletePosts(article._id)
      .subscribe((response : Response) => {
        // que article soit conforme ou pas  => toujours OK avec JSONPlaceholder

        console.log(response);
        let index = this.articles.indexOf(article);
        this.articles.splice(index,1) ;
      })
  }

}
