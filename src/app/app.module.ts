import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
//components
import { AppComponent } from './app.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { VideoItemComponent } from './components/video-item/video-item.component';
//services
import {MusicplayService} from '../services/music-play.service';
//Pipes
import {TruncatePipe} from '../pipes/truncate-pipe';
import {DateFilterPipe} from '../pipes/date-filter-pipe';
//App routes
export const appRoutes: Routes = [
  { path: '', component: PlaylistComponent },
  { path: 'playlist/:videoId', component: VideoItemComponent }
];


@NgModule({
  declarations: [
    AppComponent,
     PlaylistComponent,
    VideoItemComponent,
    TruncatePipe,
    DateFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
     MusicplayService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
