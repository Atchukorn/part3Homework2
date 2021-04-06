import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SkillComponent } from './components/skill/skill.component';

const routes: Routes = [
  {path:'', redirectTo: '/products', pathMatch:'full'},
  {path:'aboutMe', component: AboutMeComponent },
  {path:'skill', component: SkillComponent},
  {path:'contactMe', component: ContactMeComponent },
  {path:'portfolio', component: PortfolioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
