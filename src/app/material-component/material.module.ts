import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { DemoMaterialModule } from '../demo-material-module';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialRoutes } from './material.routing';
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
import {
  DialogComponent,
  DialogOverviewExampleDialogComponent
} from './dialog/dialog.component';
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
import {ColourComponent} from '../layouts/full/pages/colourcomponent/colour.component';
import {ColourpaletteComponent} from './colourpalette/colourpalette.component';
import {LogosComponent} from './logos/logos.component';
import {PhotosComponent} from './photos/photos.component';
import {ImageryComponent} from '../layouts/full/pages/imagerycomponent/imagery.component';
import {CardsComponent} from './cards/cards.component';
import {ShadowsComponent} from './shadows/shadows.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    DemoMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,
  ],
  providers: [],
  entryComponents: [DialogOverviewExampleDialogComponent],
  declarations: [
    ButtonsComponent,
    InputsComponent,
    FormbuttonsComponent,
    GridComponent,
    ListsComponent,
    MenuComponent,
    TabsComponent,
    StepperComponent,
    ExpansionComponent,
    ChipsComponent,
    ToolbarComponent,
    ProgressSnipperComponent,
    ProgressComponent,
    DialogComponent,
    DialogOverviewExampleDialogComponent,
    TooltipComponent,
    SnackbarComponent,
    SliderComponent,
    SlideToggleComponent,
    TablesComponent,
    FormcomponentComponent,
    TitlesComponent,
    ParagraphComponent,
    TypographyComponent,
    ColourComponent,
    ColourpaletteComponent,
    LogosComponent,
    PhotosComponent,
    ImageryComponent,
    ShadowsComponent,
    CardsComponent,
  ]
})
export class MaterialComponentsModule {}
