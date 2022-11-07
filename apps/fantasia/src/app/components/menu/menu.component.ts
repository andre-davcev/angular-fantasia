import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { MenuItemComponentModule } from '../menu-item';
import { LogoComponentModule } from '../logo';
import { AppProperties } from '../../models';
import { StateApp, ActionAppNavToHome } from '../../state';
import { IconSize, MaterialBreakpoint } from '../../enums';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Select(StateApp.apps) apps$: Observable<Array<AppProperties>>;
  @Select(StateApp.home) home$: Observable<boolean>;
  @Select(StateApp.mediaBreakpoint) breakpoint$: Observable<MaterialBreakpoint>;

  public breakpointColumns: Record<string, number> = {
    [MaterialBreakpoint.ExtraSmall]: 1,
    [MaterialBreakpoint.Small]: 2,
    [MaterialBreakpoint.Medium]: 2,
    [MaterialBreakpoint.Large]: 2,
    [MaterialBreakpoint.ExtraLarge]: 2,
  };

  public columns$: Observable<number>;
  public gridClass$: Observable<string>;
  public alignGrid$: Observable<string>;
  public iconSize$: Observable<IconSize>;

  constructor(private store: Store) {}

  public ngOnInit(): void {
    this.columns$ = combineLatest([this.breakpoint$, this.home$]).pipe(
      map(([breakpoint, home]) =>
        home ? this.breakpointColumns[breakpoint] : 1
      )
    );

    this.gridClass$ = this.breakpoint$.pipe(
      map((breakpoint: MaterialBreakpoint) => `cpt-${breakpoint}`)
    );

    this.alignGrid$ = this.columns$.pipe(
      map((count: number) => (count === 1 ? 'start start' : 'center center'))
    );

    this.iconSize$ = this.columns$.pipe(
      map((count: number) => (count === 1 ? IconSize.Small : IconSize.Large))
    );
  }

  public home(): void {
    this.store.dispatch(new ActionAppNavToHome());
  }
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatGridListModule,
    MenuItemComponentModule,
    LogoComponentModule,
  ],

  declarations: [MenuComponent],
  exports: [MenuComponent],
})
export class MenuComponentModule {}
