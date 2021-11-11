import { Component, Input, OnInit, Output, OnChanges } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() newUser: Array<userList> | null;

  form: FormGroup;
  isFormShow = false;
  constructor() {
    if (this.newUser) {
      console.log(this.newUser);
    }
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(7),
        Validators.pattern('([A-Za-z1-9]{7,})'),
      ]),
      confirmPassword: new FormControl('', Validators.required),
      nickName: new FormControl('', [
        Validators.required,
        Validators.pattern('([A-Za-z1-9-]{5,})'),
      ]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('([+][3][8][0][0-9]{9})'),
      ]),
      website: new FormControl('', [
        Validators.required,
        Validators.pattern('([a-zA-Z]{1,}[.][a-zA-z]{2,})'),
      ]),
    });
  }

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

  edit = false;
  editUser(id: number) {
    this.userArray.forEach((user, index) => {
      if (user.id === id) {
        this.isFormShow = true;
        this.form.get('email').setValue(user.email);
        this.form.get('password').setValue(user.password);
        this.form.get('confirmPassword').setValue(user.confirmPassword);
        this.form.get('nickName').setValue(user.nickName);
        this.form.get('phoneNumber').setValue(user.phone);
        this.form.get('website').setValue(user.website);
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
          this.isFormShow = false;
        }
      }
    });
  }

  userUpdate() {
    this.userArray.forEach((user) => {
      user.email = this.form.get('email').value;
      user.nickName = this.form.get('nickName').value;
      user.password = this.form.get('password').value;
      user.confirmPassword = this.form.get('confirmPassword').value;
      user.phone = this.form.get('phoneNumber').value;
      user.website = this.form.get('website').value;
    });
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
