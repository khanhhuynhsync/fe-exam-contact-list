import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-user-overview',
  standalone: true,
  imports: [],
  templateUrl: './user-overview.component.html',
  styleUrl: './user-overview.component.css'
})
export class UserOverviewComponent {
  @Input() user: any;
  @Output() userClicked = new EventEmitter<any>();

  onUserClick() {
    this.userClicked.emit(this.user);
  }
}
