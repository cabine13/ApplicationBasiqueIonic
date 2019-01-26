import {Component} from "@angular/core";
import {MediasService} from "../../services/medias.service";
import {Book} from "../../models/book";
import {MenuController, ModalController, NavController} from "ionic-angular";
import {LendBookPage} from "../lendBook/lendBook";

@Component({
  selector: 'page-bookList',
  templateUrl: 'bookList.html'
})
export class BookListPage {
  mesBooks: Book[];

  constructor(
    private mediasService: MediasService,
    public navCtrl: NavController,
    private modalCtrl: ModalController,
    private menuCtrl: MenuController){
  }

  ionViewWillEnter(){
    this.mesBooks = this.mediasService.booksList;
  }

  onLoadBook(index: number) {
    //this.navCtrl.push(LendBookPage)
    let modal = this.modalCtrl.create(LendBookPage, {index: index});
    modal.present();
  }

  onToggleMenu(){
    this.menuCtrl.open();
  }
}
