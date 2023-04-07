import { Component, Input, HostListener, HostBinding } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Store } from '@ngxs/store';

import { AppProperties } from '../../models';
import { ActionAppNavToChild } from '../../state';
import { Animation, IconSize } from '../../enums';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent {
  public animation: string = Animation.Default;
  public IconSize: any = IconSize;

  constructor(private store: Store) {}

  @Input()
  public app: AppProperties;

  @Input()
  public size: IconSize | null = IconSize.Large;

  @HostBinding('class')
  public get classes(): string {
    return `cpt-${this.size}`;
  }

  @HostListener('click')
  public navigate(): void {
    this.store.dispatch(new ActionAppNavToChild(this.app.key));
  }
}

@NgModule({
  imports: [CommonModule, TranslateModule],
  declarations: [MenuItemComponent],
  exports: [MenuItemComponent],
})
export class MenuItemComponentModule {}
