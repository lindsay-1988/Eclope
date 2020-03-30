import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  nbrArticles;
  nbrUsers;
  constructor(private article : ArticleService,
              private users : UserService) {}

  ngOnInit(): void {
    this.article.getAllArticles()
      .subscribe( (response : Response) => {
        this.nbrArticles = response;
        console.log(this.nbrArticles)
      })
      this.users.getAllUtilisateurs()
      .subscribe( (response : Response) => {
        this.nbrUsers = response;
        console.log(this.nbrUsers)
      })
  }
}
