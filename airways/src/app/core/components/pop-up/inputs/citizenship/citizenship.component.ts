import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PhoneCodeNameService } from '../../../../services/phone-code-name.service';

@Component({
  selector: 'app-citizenship',
  templateUrl: './citizenship.component.html',
  styleUrls: ['./citizenship.component.scss'],
})
export class CitizenshipComponent implements OnInit {
  @Output() citizenshipChange = new EventEmitter<string>();
  optionsName: string[] = [];
  selectedOption = '';

  constructor(private phoneCodeNameService: PhoneCodeNameService) {}
  ngOnInit() {
    this.phoneCodeNameService.createArrayPhoneCodeName().subscribe((value) => {
      value.forEach((el) => {
        this.optionsName.push(el.name);
      });
    });
  }
}
