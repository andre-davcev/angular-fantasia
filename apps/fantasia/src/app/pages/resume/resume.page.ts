import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

@Component({
    selector: 'app-resume',
    templateUrl: 'resume.page.html',
    styleUrls: ['./resume.page.scss']
})
export class ResumePageComponent { }

const routes: Routes = [
    { path: '', component: ResumePageComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ResumePageComponent]
})
export class ResumePageComponentModule { }

