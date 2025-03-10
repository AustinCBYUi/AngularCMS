import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Components \\
import { SidenavComponent } from './shared/components/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SidenavComponent,
  ],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CMSProj';
}
