import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import { HelpComponent } from './help/help.component';  
import {GuideComponent} from './guide/guide.component';  
import {IssueComponent} from'./issue/issue.component';
import { BugComponent } from './bug/bug.component';
const routes: Routes = [
  {path:'', redirectTo:'contact',pathMatch:'full'},
  {path:'contact',component:ContactComponent},
  {path:'', redirectTo:'help',pathMatch:'full'},
  {path : 'help',component:HelpComponent},
  {path:'', redirectTo:'guide',pathMatch:'full'},
  {path : 'guide',component:GuideComponent},
  {path:'', redirectTo:'issue',pathMatch:'full'},
  {path : 'issue',component:IssueComponent},
  {path:'', redirectTo:'bug',pathMatch:'full'},
  {path : 'bug',component:BugComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  ContactComponent
}
