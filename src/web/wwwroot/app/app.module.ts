import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AudioPlayerComponent } from './components/audio-player/audio.player.component';
import { VideoPlayerComponent } from './components/video-player/video.player.component';
@NgModule({
  declarations: [
    AppComponent,AudioPlayerComponent,VideoPlayerComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'go-sammy'}),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent,AudioPlayerComponent,VideoPlayerComponent]
})
export class AppModule { }
