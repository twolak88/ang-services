import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../services/accounts.service';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //note provider for AccountsService is only in AppComponent to propagate this to childs the same instanace
  providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {

  constructor(private accountsService: AccountsService, private loggingService: LoggingService) { }

  ngOnInit(): void {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChange(accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
  }
}
