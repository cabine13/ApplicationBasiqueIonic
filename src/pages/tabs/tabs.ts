import {Component} from "@angular/core";
import {CdListPage} from "../cdList/cdList";
import {BookListPage} from "../bookList/bookList";

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  cdListPage = CdListPage;
  bookListPage = BookListPage;
}
