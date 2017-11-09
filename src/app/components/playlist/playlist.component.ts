
import { Component, OnInit } from '@angular/core';
import {MusicplayService} from '../../../services/music-play.service';
import {TruncatePipe} from '../../../pipes/truncate-pipe';
import {Router, Routes} from '@angular/router';


@Component({
  selector: 'playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})

export class PlaylistComponent implements OnInit{

  constructor(private _musicplayService: MusicplayService, private router: Router){}

  playlistUrl:string = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw";
  playlist:any[];

  ngOnInit(){
    this._musicplayService.getPlaylist(this.playlistUrl)
    .subscribe((response) => {
        this.playlist = response;
    })
  }

  goToVideoPlay(videoId:string, title:string, publishedDate:string, description:string){

     this._musicplayService.title = title;
     this._musicplayService.publishedDate = publishedDate;
     this._musicplayService.description = description;

     this.router.navigate(['/playlist', videoId]);
  }
}
