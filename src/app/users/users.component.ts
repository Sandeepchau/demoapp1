import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BanksService } from '../banks.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userForm: FormGroup;
  successMessage: string = '';

  constructor(private fb: FormBuilder, public userservice: BanksService) { }

  ngOnInit(): void {
    debugger;
    this.createForm();
  }

  createForm() {
    this.userForm = this.fb.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Gender: ['', Validators.required],
      PhoneNumber: [''],
      Email: ['', [Validators.required, Validators.email]],
      AccountNo: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      IFSCCode: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9 ]*$/)]],
      Notes: ['']

    });
  }

  submitUser() {
    debugger;

    const controls = this.userForm.controls;
    /** check form */
    if (this.userForm.invalid) {
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );
      return;
    }
    this.successMessage = "successfully submitted";
    console.log(this.userForm.value);

    this.userservice.postuser(this.userForm.value).subscribe(res => {

    });
  }


}
