import {
  ChangeDetectorRef,
  Component
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MenuItems } from '../../../shared/menu-items/menu-items';
import { ActivatedRoute } from '@angular/router';
import {TopMenuItems} from '../../../shared/topmenu-items/topmenu-items';

@Component({
  selector: 'app-headertitle',
  templateUrl: './headertitle.component.html',
  styleUrls: ['./headertitle.component.scss']
})
export class HeadertitleComponent {

  mobileQuery: MediaQueryList;
  private topMenuItemName: string;
  private menuItemGroup: string;
  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef?: ChangeDetectorRef,
    media?: MediaMatcher,
    public menuItems?: TopMenuItems, private route?: ActivatedRoute
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.route.queryParams.subscribe(params => {

      this.menuItemGroup = params['menuItemGroup'];
      if (this.menuItemGroup !== undefined) {
        console.log(this.menuItemGroup);
        this.topMenuItemName = this.menuItemGroup;
      }
    });

  }

}
