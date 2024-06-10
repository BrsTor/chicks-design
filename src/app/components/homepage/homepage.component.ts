import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    CommonModule, SearchBarComponent
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageComponent { }
