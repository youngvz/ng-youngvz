import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  audio = new Audio();

  constructor() { }

  ngOnInit(): void {
    this.audio.src = "../../assets/audio/HOME - Resonance.mp3";
    this.audio.load();

    this.audio.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
    }, false);
  }


  playAudio(){

    if (this.audio.duration > 0 && !this.audio.paused){
      this.audio.pause();
    } else {
      this.audio.play();
    }

  }
}
