import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-art',
  templateUrl: 'art.page.html',
  styleUrls: ['./art.page.scss'],
})
export class ArtPageComponent {}

const routes: Routes = [{ path: '', component: ArtPageComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [ArtPageComponent],
  exports: [ArtPageComponent],
})
export class ArtPageComponentModule {}
