import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  userArray: Array<userList> = [
    {
      email: 'luka.kilasonia@gmail.com',
      password: 'lukakilasonia',
      nickName: 'killa',
      phone: '+380557542141',
      website: 'luka.kilasonia.com',
    },

    {
      email: 'luka.kilasonia@gmail.com',
      password: 'lukakilasonia',
      nickName: 'killa',
      phone: '+380557542141',
      website: 'luka.kilasonia.com',
    },

    {
      email: 'luka.kilasonia@gmail.com',
      password: 'lukakilasonia',
      nickName: 'killa',
      phone: '+380557542141',
      website: 'luka.kilasonia.com',
    },
  ];
}

interface userList {
  email: string;
  password: string;
  nickName: string;
  phone: string;
  website: string;
}
