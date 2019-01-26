import {Component, OnInit} from "@angular/core";
import {Book} from "../../models/book";
import {NavParams, ViewController} from "ionic-angular";
import {MediasService} from "../../services/medias.service";

@Component({
  selector: 'page-lendBook',
  templateUrl: 'lendBook.html'
})
export class LendBookPage implements OnInit{
  index: number;
  book: Book;

  constructor(
    public navParams: NavParams,
    public mediaService: MediasService,
    public viewCtrl: ViewController){
  }
  ngOnInit(): void {
    this.index = this.navParams.get('index');
    this.book = this.mediaService.booksList[this.index];
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onToggleLend(book: Book) {
    this.mediaService.toggleLend(book)
  }
}
