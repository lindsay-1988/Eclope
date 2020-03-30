import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.css']
})
export class ListeUserComponent implements OnInit {

  utilisateurs;
  pageActuel = 1;

  constructor(
    private service : UserService,
    private router : Router,
  ) { }

  ngOnInit(): void {
    this.service.getAllUtilisateurs()
    .subscribe((response : Response) => {
      this.utilisateurs = response
    })

  }

  onDeleteArticle(utilisateur)
  {
   this.service.deletePosts(utilisateur._id)
      .subscribe((response : Response) => {
        // que utilisateur soit conforme ou pas  => toujours OK avec JSONPlaceholder

        console.log(response);
        let index = this.utilisateurs.indexOf(utilisateur);
        this.utilisateurs.splice(index,1) ;
      })
  }
}

