import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { CardItemComponent } from '../card-item/card-item.component';
import { CardItem } from '../../interfaces/card/cardItem';
import itemsMock from '../card-item/itemsMock.json'

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    CommonModule, SearchBarComponent, CardItemComponent
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageComponent {
  itemList: CardItem[]

  constructor() {
    this.itemList = itemsMock;
  }
}
