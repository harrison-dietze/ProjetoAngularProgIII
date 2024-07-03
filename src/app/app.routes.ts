import { Routes } from '@angular/router';
import { TimelineComponent } from './components/timeline/timeline.component';
import { UserComponent } from './components/user/user.component';
import { PhotosComponent } from './components/photos/photos.component';

export const routes: Routes = [
    {path: '', component: TimelineComponent},
    {path: 'user', component: UserComponent},
    {path: 'photos', component: PhotosComponent}
];
