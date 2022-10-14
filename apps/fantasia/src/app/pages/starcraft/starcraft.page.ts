import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

@Component({
    selector: 'app-starcraft',
    templateUrl: 'starcraft.page.html',
    styleUrls: ['./starcraft.page.scss']
})
export class StarcraftPageComponent { }

const routes: Routes = [
    { path: '', component: StarcraftPageComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [StarcraftPageComponent]
})
export class StarcraftPageComponentModule { }
