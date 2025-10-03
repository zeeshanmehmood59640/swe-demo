import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarContainer,Home } from '@swe-demo/swe-demo-app-feature';

@Component({
  imports: [NavbarContainer, RouterModule, Home],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'swe-demo-app';
}
