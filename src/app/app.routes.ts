import { Routes } from '@angular/router';
import { TimelineComponent } from './components/timeline/timeline.component';
import { UserComponent } from './components/user/user.component';
import { PhotosComponent } from './components/photos/photos.component';
import { UserFormComponent } from './components/user/user-form/user-form.component';
import { PostFormComponent } from './components/post/post-form/post-form.component';

export const routes: Routes = [
    {path: '', component: TimelineComponent},
    {path: 'user', component: UserComponent},
    {path: 'photos', component: PhotosComponent},
    {path: 'user-form', component: UserFormComponent},
    {path: 'post-form', component: PostFormComponent},
];
