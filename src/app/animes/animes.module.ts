import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimesListComponent } from './animes-list/animes-list.component';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [AnimesListComponent],
 declarations: [AnimesListComponent,AnimeDetailComponent]
})
export class AnimesModule { }
