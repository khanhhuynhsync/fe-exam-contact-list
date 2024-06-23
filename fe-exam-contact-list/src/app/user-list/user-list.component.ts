import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service';
import {NgForOf, NgIf} from "@angular/common";
import {UserOverviewComponent} from "../user-overview/user-overview.component";
import {UserDetailComponent} from "../user-detail/user-detail.component";

@Component({
  selector: 'app-user-list',
  standalone: true,
  templateUrl: './user-list.component.html',
  imports: [
    NgForOf,
    UserOverviewComponent,
    UserDetailComponent,
    NgIf
  ],
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  originalUsers: any[] = [];
  selectedUser: any;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(query?: string): void {
    this.userService.fetchUsers(query).subscribe(data => {
      this.users = data.users;
      this.originalUsers = data.users;
    });
  }

  onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const searchTerm = inputElement.value;
    this.fetchUsers(searchTerm);
  }

  onFilter(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const filterTerm = inputElement.value;
    if (filterTerm) {
      this.users = this.originalUsers.filter(user => user.gender === filterTerm);
    } else {
      this.users = [...this.originalUsers];
    }
  }

  handleUserClick(user: any) {
    this.selectedUser = user;
  }
}
