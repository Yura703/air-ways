import { Component, Input, OnInit } from '@angular/core';
import { ISearchData } from 'src/app/shared/models/models';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-second-menu',
  templateUrl: './second-menu.component.html',
  styleUrls: ['./second-menu.component.scss']
})
export default class SecondMenuComponent implements OnInit {

  @Input() searchData: ISearchData;

  public departureDate: FormControl;

  public arrivalDate: FormControl;

  public isAvailableEdit = false;

  public searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
    this.departureDate = new FormControl(new Date(this.searchData.departureDate));
    this.arrivalDate = new FormControl(new Date(this.searchData.arrivalDate));
  }

  private createForm() {
    this.searchForm = this.fb.group({
      type: ['Round', []],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
    });
  }

  public changeAvailableEdit(): void {
    this.isAvailableEdit = !this.isAvailableEdit;
  }
}
