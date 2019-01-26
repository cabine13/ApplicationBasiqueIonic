import {Component} from "@angular/core";
import {MediasService} from "../../services/medias.service";
import {Cd} from "../../models/cd";
import {MenuController, ModalController, NavController, NavParams} from "ionic-angular";
import {LendCdPage} from "../lendCd/lendCd";

@Component({
  selector: 'page-cdList',
  templateUrl: 'cdList.html'
})
export class CdListPage {
  mesCd: Cd[];

  constructor(
    public navCtrl: NavController,
    private mediasService: MediasService,
    private modalCtrl: ModalController,
    private menuCtrl: MenuController){
  }

  ionViewWillEnter(){
    this.mesCd = this.mediasService.cdList;
  }

  onLoadCd(index: number) {
    //this.navCtrl.push(LendCdPage)
    let modal = this.modalCtrl.create(LendCdPage, {index: index});
    modal.present();
  }

  onToggleMenu(){
    this.menuCtrl.open();
  }
}
