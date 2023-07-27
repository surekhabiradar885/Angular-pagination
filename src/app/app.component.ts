import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pagination';
  posts: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [5, 10, 15, 20];
  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.fetchPostList();
  }
  fetchPostList(): void {
    this.userService.getAllPosts().subscribe((response) => {
      this.posts = response;
    });
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.fetchPostList();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPostList();
  }
}
