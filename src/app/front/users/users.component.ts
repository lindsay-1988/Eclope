import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  utilisateurs;
  id = "_id";

  constructor(
    private service : UserService,
    private router : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe((params)=>{
      const id = params.get("id");
      this.service.getUtilisateursById(id)
        .subscribe((response : Response) =>{
          this.utilisateurs = response
          console.log(this.utilisateurs)
        })
    })
  }

}
