import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemComponent } from '../../pages/item/item.component';
import { NewContactComponent } from 'src/app/pages/new-contact/new-contact.component';
import { NewitemComponent } from 'src/app/pages/newitem/newitem.component';
import { BlogPostsComponent } from 'src/app/pages/blog-posts/blog-posts.component';
import { NewblogComponent } from 'src/app/pages/newblog/newblog.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    ItemComponent,
    NewContactComponent,
    NewitemComponent,
    BlogPostsComponent,
    NewblogComponent
    ],
})

export class AdminLayoutModule {}
