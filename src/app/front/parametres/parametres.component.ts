import { Component, OnInit } from '@angular/core';
import { ParametresService } from 'src/app/service/parametres.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.component.html',
  styleUrls: ['./parametres.component.css']
})
export class ParametresComponent implements OnInit {

  parametres;
  id = "_id";

  constructor(
    private service : ParametresService,
    private router : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe((params)=>{
      const id = params.get("id");
      this.service.getParametresById(id)
        .subscribe((response : Response) =>{
          this.parametres = response
          console.log(this.parametres)
        })
    })
  }

}
