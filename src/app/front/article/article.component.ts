import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/service/article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article;
  id = "_id";

  constructor(
    private service : ArticleService,
    private router : ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.router.paramMap.subscribe((params)=>{
      const id = params.get("id");
      this.service.getArticlesById(id)
        .subscribe((response : Response) =>{
          this.article = response
          console.log(this.article)
        })
    })
  }

}
