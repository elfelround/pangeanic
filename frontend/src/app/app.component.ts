import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ThingsApiService} from './things/things-api.service';
import {Thing} from './things/thing.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  thingsListSubs: Subscription;
  thingsList: Thing[];

  constructor(private thingsApi: ThingsApiService) {
  }

  ngOnInit() {
    this.thingsListSubs = this.thingsApi
      .getThings()
      .subscribe(res => {
          this.thingsList = res;
        },
        console.error
      );
  }

  ngOnDestroy() {
    this.thingsListSubs.unsubscribe();
  }
}
