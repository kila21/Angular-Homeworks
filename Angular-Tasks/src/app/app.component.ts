import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  form: FormGroup;
  ngOnInit() {
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
      checkBox: new FormControl('', Validators.requiredTrue),
    });
  }

  btnDisabled = true;

  public onBtnDisabled() {
    if (
      this.form.get('password').value ===
        this.form.get('confirmPassword').value &&
      this.form.get('checkBox').valid &&
      this.form.get('password').valid
    ) {
      this.btnDisabled = false;
    } else {
      this.btnDisabled = true;
    }
    return this.btnDisabled;
  }

  formShow = true;
  listShow = false;

  showList() {
    this.listShow = true;
    this.formShow = false;
  }

  hideList() {
    this.listShow = false;
    this.formShow = true;
  }
}
