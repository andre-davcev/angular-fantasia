import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {}

@NgModule({
  declarations: [LogoComponent],
  imports: [CommonModule, FlexLayoutModule],
  exports: [LogoComponent],
})
export class LogoComponentModule {}
