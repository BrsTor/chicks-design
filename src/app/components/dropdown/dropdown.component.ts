import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DropdownItem } from '../../interfaces/dropdown/dropdownItem';


@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent {
  @Input() dropdownConfig!: DropdownItem;
  @Input() iconLeft?: string;
  @Input() iconRight?: string;
}
