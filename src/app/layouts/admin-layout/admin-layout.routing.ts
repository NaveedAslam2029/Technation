import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { ItemComponent } from 'src/app/pages/item/item.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
 import { TablesComponent } from '../../pages/tables/tables.component';
import { NewContactComponent } from 'src/app/pages/new-contact/new-contact.component';
import { NewitemComponent } from 'src/app/pages/newitem/newitem.component';
import { BlogPostsComponent } from 'src/app/pages/blog-posts/blog-posts.component';
import { NewblogComponent } from 'src/app/pages/newblog/newblog.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
     { path: 'tables',         component: TablesComponent },
     { path: 'item',          component: ItemComponent },
     { path: 'maps',           component: MapsComponent },
     {path: 'newcontact', component: NewContactComponent},
     {path : 'newitem', component: NewitemComponent},
     {path: 'blog', component: BlogPostsComponent},
     {path: 'newblog' , component: NewblogComponent}

];
