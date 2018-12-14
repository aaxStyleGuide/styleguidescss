import { Routes } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { GridComponent } from './grid/grid.component';
import { ListsComponent } from './lists/lists.component';
import { MenuComponent } from './menu/menu.component';
import { TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { ChipsComponent } from './chips/chips.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProgressSnipperComponent } from './progress-snipper/progress-snipper.component';
import { ProgressComponent } from './progress/progress.component';
import { DialogComponent } from './dialog/dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import {FormbuttonsComponent} from './formbuttons/formbuttons.component';
import {InputsComponent} from './inputs/inputs.component';
import {TablesComponent} from './tables/tables.component';
import {FormcomponentComponent} from '../layouts/full/pages/formcomponent/formcomponent.component';
import {TitlesComponent} from './titles/titles.component';
import {ParagraphComponent} from './paragraph/paragraph.component';
import {TypographyComponent} from '../layouts/full/pages/typographycomponent/typography.component';
import {LogosComponent} from './logos/logos.component';
import {PhotosComponent} from './photos/photos.component';
import {ImageryComponent} from '../layouts/full/pages/imagerycomponent/imagery.component';
import {ColourComponent} from '../layouts/full/pages/colourcomponent/colour.component';
import {ColourpaletteComponent} from './colourpalette/colourpalette.component';
import {ShadowsComponent} from './shadows/shadows.component';
import {CardsComponent} from './cards/cards.component';
import {HomeComponent} from '../home/home.component';

export const MaterialRoutes: Routes = [
  {
    path: 'button',
    component: ButtonsComponent
  },
  {
    path: 'inputs',
    component: InputsComponent
  },
  {
    path: 'formbuttons',
    component: FormbuttonsComponent
  },
  {
    path: 'tables',
    component: TablesComponent
  },
  {
    path: 'grid',
    component: GridComponent
  },
  {
    path: 'lists',
    component: ListsComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'tabs',
    component: TabsComponent
  },
  {
    path: 'stepper',
    component: StepperComponent
  },
  {
    path: 'expansion',
    component: ExpansionComponent
  },
  {
    path: 'chips',
    component: ChipsComponent
  },
  {
    path: 'toolbar',
    component: ToolbarComponent
  },
  {
    path: 'progress-snipper',
    component: ProgressSnipperComponent
  },
  {
    path: 'progress',
    component: ProgressComponent
  },
  {
    path: 'dialog',
    component: DialogComponent
  },
  {
    path: 'tooltip',
    component: TooltipComponent
  },
  {
    path: 'snackbar',
    component: SnackbarComponent
  },
  {
    path: 'slider',
    component: SliderComponent
  },
  {
    path: 'slide-toggle',
    component: SlideToggleComponent
  },
  {
    path: 'formcomponent',
    component: FormcomponentComponent
  },
  {
    path: 'typography',
    component: TypographyComponent
  },
  {
    path: 'titles',
    component: TitlesComponent
  }
  ,
  {
    path: 'paragraph',
    component: ParagraphComponent
  }
  ,
  {
    path: 'colours',
    component: ColourComponent,
  },
  {
    path: 'logos',
    component: LogosComponent
  }
  ,
  {
    path: 'photos',
    component: PhotosComponent
  }
  ,
  {
    path: 'imagery',
    component: ImageryComponent
  }
  ,
  {
    path: 'colourpalette',
    component: ColourpaletteComponent
  }
  ,
  {
    path: 'shadows',
    component: ShadowsComponent
  }
  ,
  {
    path: 'cards',
    component: CardsComponent
  }
];
