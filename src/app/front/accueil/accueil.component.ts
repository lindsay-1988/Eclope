import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/service/article.service';




@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  articles;
  pageActuel = 1;


  constructor(
    private service : ArticleService,
    ) {}

  ngOnInit(): void {
    this.service.getAllArticles()
     .subscribe((response : Response) => {
      this.articles = response;
      console.log(this.articles)
     })
  }

}
