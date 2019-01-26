import {Component, OnInit} from "@angular/core";
import {NavParams, ViewController} from "ionic-angular";
import {Cd} from "../../models/cd";
import {MediasService} from "../../services/medias.service";
import {Book} from "../../models/book";

@Component({
  selector: 'page-lendCd',
  templateUrl: 'lendCd.html'
})
export class LendCdPage implements OnInit{
  index: number;
  cd: Cd;

  constructor(
    public navParams: NavParams,
    public mediaService: MediasService,
    public viewCtrl: ViewController){

  }

  ngOnInit(): void {
    this.index = this.navParams.get('index');
    this.cd = this.mediaService.cdList[this.index];
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onToggleLend(cd: Cd) {
    this.mediaService.toggleLend(cd)
  }

}
