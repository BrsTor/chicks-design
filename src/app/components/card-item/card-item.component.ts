import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CardItem } from '../../interfaces/card/cardItem';

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: 'card-item.component.html',
  styleUrl: './card-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardItemComponent {
  @Input() item!: CardItem
}
