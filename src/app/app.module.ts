import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './shared/components/message/message.component';
import { ConversationComponent } from './shared/components/conversation/conversation.component';
import { ButtonComponent } from './shared/component/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    ConversationComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
