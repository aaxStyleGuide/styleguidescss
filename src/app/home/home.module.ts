import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home.component';
import { StarterRoutes } from './home.routing';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(StarterRoutes)
  ],
  declarations: [HomeComponent]
})
export class HomeModule {}

