import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search/search.service';
import { RequestDataService } from '../../services/request-data/request-data.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(
    private ss: SearchService, 
    private rds: RequestDataService,
    private navController: NavController
    ) { }

  ngOnInit() {}

  search(keyWord){
    this.ss.search(keyWord).subscribe( (res) => {
      this.getSearchResults(res)
      this.navController.navigateForward('/search-res')
    })
  }

  getSearchResults(res){
    this.rds.setRequestData(res)
  }

  navigateToRegister(){
    this.navController.navigateForward('/registeration')
  }

}
