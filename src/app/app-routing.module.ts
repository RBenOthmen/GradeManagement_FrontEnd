import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './components/student/student.component';
import { CardComponent } from './components/card/card.component';

const routes: Routes = [
  { path: 'student', component: StudentComponent },
  { path: 'card', component: CardComponent },
  { path: 'card/:id', component: CardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
