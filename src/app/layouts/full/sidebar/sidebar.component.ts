import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import {MenuItems} from '../../../shared/menu-items/menu-items';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class AppSidebarComponent implements OnDestroy {

  mobileQuery: MediaQueryList;
  private menuItemName: string;
  private menuItemState: string;
  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef?: ChangeDetectorRef,
    media?: MediaMatcher,
    public menuItems?: MenuItems, private route?: ActivatedRoute
  ) {
      this.mobileQuery = media.matchMedia('(min-width: 768px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
      this.route.queryParams.subscribe(params => {
      this.menuItemState = params['menuItemState'];
      this.menuItemName = params['menuItemName'];
    });
    console.log(this.menuItemState);
    console.log(this.menuItemName);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
