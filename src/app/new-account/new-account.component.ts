import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../services/accounts.service';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //note provider for AccountsService and LoggingService is only in AppComponent to propagate this to childs the same instanace
})
export class NewAccountComponent implements OnInit {

  constructor(private accountsService: AccountsService) {
    this.accountsService.statusUpdated.subscribe(
      (status: string) => alert('New status: ' + status)
    );
  }

  ngOnInit(): void {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
  }
}
