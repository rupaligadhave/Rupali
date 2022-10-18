import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';


@Component({
  selector: 'app-ugstaff',
  templateUrl: './ugstaff.component.html',
  styleUrls: ['./ugstaff.component.css']
})
export class UgstaffComponent implements OnInit {

  constructor(private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
  }
  confirm() {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to perform this action?',
        accept: () => {
            //Actual logic to perform a confirmation
        }
    });
}
}


