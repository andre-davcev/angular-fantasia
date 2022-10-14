import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainComponentRoutes } from './main.component.routes';
import { MainComponent } from './main.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(MainComponentRoutes)],
  declarations: [MainComponent]
})
export class MainComponentModule {}
