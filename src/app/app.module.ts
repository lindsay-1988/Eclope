// Module

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";
import { MorePipe } from './more.pipe';







// Component
import { AppComponent } from './app.component';
import { MenuComponent } from './commun/menu/menu.component';
import { AccueilComponent } from './front/accueil/accueil.component';
import { ArticleComponent } from './front/article/article.component';
import { NotFoundComponent } from './front/not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListeComponent } from './back/article/liste/liste.component';
import { MenuDashboardComponent } from './back/menu-dashboard/menu-dashboard.component';
import { AjouterComponent } from './back/article/ajouter/ajouter.component';
import { UsersComponent } from './front/users/users.component';
import { AjouterUserComponent } from './back/user/ajouter-user/ajouter-user.component';
import { ListeUserComponent } from './back/user/liste-user/liste-user.component';
import { ParametresComponent } from './front/parametres/parametres.component';
import { ModifierComponent } from './back/article/modifier/modifier.component';
import { ModifierUserComponent } from './back/user/modifier-user/modifier-user.component';
import { ListeParametresComponent } from './back/parametres/liste-parametres/liste-parametres.component';


// Service

import { ArticleService } from './service/article.service';
import { UserService } from './service/user.service';






@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent,
    ArticleComponent,
    NotFoundComponent,
    DashboardComponent,
    ListeComponent,
    MenuDashboardComponent,
    AjouterComponent,
    UsersComponent,
    AjouterUserComponent,
    ListeUserComponent,
    ParametresComponent,
    ModifierComponent,
    ModifierUserComponent,
    ListeParametresComponent,
    MorePipe,




  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path : "", component : AccueilComponent },
      { path : "articles/:id", component : ArticleComponent},
      { path : "users/:id", component : UsersComponent},
      { path : "admin/parametres/liste-parametres", component : ListeParametresComponent},
      { path : "parametres/:id", component : ParametresComponent},
      { path : "admin/articles/liste", component : ListeComponent},
      { path : "admin/users/liste-user", component : ListeUserComponent},
      { path : "admin/articles/ajouter", component : AjouterComponent},
      { path : "admin/articles/modifier", component : ModifierComponent},
      { path : "admin/user/modifier-user", component : ModifierUserComponent},
      { path : "admin/utilisateurs/ajouter-user", component : AjouterUserComponent},
      { path : "admin", component: DashboardComponent},
      { path : "**", component : NotFoundComponent },


    ]),
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,

  ],
  providers: [
    ArticleService,
    UserService,
  ],

  bootstrap: [AppComponent,]
})
export class AppModule { }

