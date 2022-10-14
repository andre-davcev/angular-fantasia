import { Component, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { Animation } from '../../enums';
import { AnimationHover } from '../../animations';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [ AnimationHover ]
})
export class LogoComponent {
  public animation: string = Animation.Default;

  @HostListener('mouseover')
  public mouseover(): void {
    this.animation = Animation.Hover;
  }

  @HostListener('mouseleave')
  public mouseleave(): void {
    this.animation = Animation.Default;
  }
}

@NgModule({
  declarations: [LogoComponent],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [LogoComponent]
})
export class LogoComponentModule { }
