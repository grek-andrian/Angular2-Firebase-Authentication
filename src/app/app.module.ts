import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { AuthService } from './providers/auth.service';
import { LoginPageComponent } from './login-page/login-page.component'

export const firebaseConfig = {
    apiKey: "AIzaSyCY6P6Y1vWVqgrpP-srgzMwofAI1NGTteI",
    authDomain: "ngauth-24551.firebaseapp.com",
    databaseURL: "https://ngauth-24551.firebaseio.com",
    storageBucket: "ngauth-24551.appspot.com",
    messagingSenderId: "28496849633"
}

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
