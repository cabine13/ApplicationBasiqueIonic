import {Book} from "../models/book";
import {Cd} from "../models/cd";

export class MediasService {

  toggleLend(object: Object){
    object['isLend'] = !object['isLend']
  }

  booksList: Book[] = [
    {
      title: 'La boîte de Pandore',
      author: 'Bernard Werber',
      isbn: '2226438394',
      year: 2018,
      editor: 'Albin Michel',
      isLend: false
    },
    {
      title: "L'erreur",
      author: 'Susi Fox',
      isbn: '2265118028',
      year: 2019,
      editor: 'Fleuve Editions',
      isLend: false
    },
    {
      title: 'La guerre de Catherine',
      author: 'Claire Fauvel',
      isbn: '2369813628',
      year: 2017,
      editor: 'Rue de Sèvres',
      isLend: false
    },
    {
      title: 'Vertige',
      author: 'Franck Thilliez',
      isbn: '2265093769',
      year: 2011,
      editor: 'Fleuve Editions',
      isLend: true
    },
    {
      title: 'La vie devant soi',
      author: 'Romain Gary',
      isbn: '2070373622',
      year: 1982,
      editor: 'Gallimard',
      isLend: false
    }
  ]

  cdList: Cd[] = [
    {
      title: 'Joe Pass at the Montreux Jazz Festival',
      artist: 'Joe Pass',
      year: 1975,
      duration: '42:33',
      label: 'Pablo Records',
      isLend: false
    },
    {
      title: 'Electric Outlet',
      artist: 'John Scofield.',
      year: 1984,
      duration: '40:41',
      label: 'Gramavision',
      isLend: false
    },
    {
      title: 'Tutu',
      artist: 'Miles Davis',
      year: 1986,
      duration: '42:05',
      label: 'Warner Bros',
      isLend: false
    },
    {
      title: 'Jigsaw',
      artist: 'Mike Stern',
      year: 1989,
      duration: '46:11',
      label: 'Atlantic',
      isLend: true
    },
    {
      title: 'Rites of Summer',
      artist: 'Spyro Gyra',
      year: 1988,
      duration: '45:04',
      label: 'MCA',
      isLend: true
    }
  ]
}


