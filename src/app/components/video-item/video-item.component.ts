import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MusicplayService} from '../../../services/music-play.service';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({selector: 'video-item', templateUrl: './video-item.component.html', styleUrls: ['./video-item.component.css']})

export class VideoItemComponent implements OnInit {

  constructor(private _musicplayService : MusicplayService, private route : ActivatedRoute, private sanitizer : DomSanitizer) {}

  url : SafeResourceUrl;
  baseUrl : string = 'https://www.youtube.com/embed/';
  title : string;
  description : string;
  publishedDate;

  ngOnInit() {
    this
      .route
      .params
      .subscribe(params => {
        this.url = this
          .sanitizer
          .bypassSecurityTrustResourceUrl(this.baseUrl + params['videoId']);
          this.setValues();
      });
        
  }

  setValues(){
    this.title =this._musicplayService.title;
    this.publishedDate = this._musicplayService.publishedDate;
    this.description =this._musicplayService.description;
  }
}