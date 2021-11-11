import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { ListComponent } from '../list.component';
import { AppComponent } from '../../app.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { tap } from 'rxjs';
@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss'],
})
export class EditUsersComponent implements OnInit {
  constructor() {
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

  @Input() currentUser: Array<any> | null;
  form: FormGroup;
  ngOnInit(): void {}

  updateUser() {}
}
