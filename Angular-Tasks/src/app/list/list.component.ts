import { Component, Input, OnInit, Output } from '@angular/core';
import { EditUsersComponent } from './edit-users/edit-users.component';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() newUSer = [];
  constructor() {}

  ngOnInit(): void {}

  @Input()
  userArray: Array<userList> = [
    {
      id: 1,
      email: 'luka.kilasonia@gmail.com',
      password: 'lukakilasonia',
      confirmPassword: 'lukakilasonia',
      nickName: 'killa',
      phone: '+380557542141',
      website: 'luka.kilasonia.com',
    },

    {
      id: 2,
      email: 'kilasonia@gmail.com',
      password: 'lukakilasonia',
      confirmPassword: 'lukakilasonia',
      nickName: 'killa',
      phone: '+380557542141',
      website: 'luka.kilasonia.com',
    },

    {
      id: 3,
      email: 'kilasonia@mail.ru',
      password: 'lukakilasonia',
      confirmPassword: 'lukakilasonia',
      nickName: 'killa',
      phone: '+380557542141',
      website: 'kilasonia.com',
    },
  ];

  currentUser = [];
  edit = false;
  editUser(id: number) {
    this.userArray.forEach((user) => {
      if (user.id === id) {
        for (let cur of this.currentUser) {
          if (cur === user) {
            return;
          }
        }
        this.currentUser.push(user);
        this.edit = true;
        console.log(this.currentUser);
      }
    });
  }

  deleteUser(id: number) {
    this.userArray.forEach((user, index) => {
      if (user.id === id) {
        if (
          confirm(`This action will remove a user with this email: ${user.email}! \n
        Are you Sure?`)
        ) {
          this.userArray.splice(index, 1);
          if (this.currentUser[0]?.id === id) {
            this.currentUser.splice(0, 1);
          }
        }
      }
    });
    console.log(this.userArray);
    console.log(this.currentUser);
  }
}

interface userList {
  id: number;
  email: string;
  password: string;
  confirmPassword: string;
  nickName: string;
  phone: string;
  website: string;
}
