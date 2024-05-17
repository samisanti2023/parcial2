import { Component, OnInit } from '@angular/core';
import { AnimesService } from '../animes.service';
import { Anime } from '../anime';

@Component({
  selector: 'app-animes-list',
  templateUrl: './animes-list.component.html',
  styleUrls: ['./animes-list.component.css']
})
export class AnimesListComponent implements OnInit {

  animes: Array<Anime> = [];
  selectedAnime!: Anime;
  selected = false;


  onSelected(book: Anime): void {
    this.selected = true;
    this.selectedAnime = book;
  }

  constructor(private bookService: AnimesService) { }
 
  getAnimes(): void {
    this.bookService.getAnimes().subscribe((animes) => {
      this.animes= animes;
    });
  }
  totalEp(){
    let total=0;
  this.animes.forEach(element => {
      total+=element.episode
    });
    return total
  }
  avg(){
    let denom=0;
    let num=0;
    this.animes.forEach(element => {
      denom+=1;
      num+=parseFloat(element.Rating);
    });
    let frac=num/denom;
    let red=frac.toFixed(2)
    return frac
  }

  ngOnInit() {
    this.getAnimes();

  } }
