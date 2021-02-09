import { Component, OnInit } from '@angular/core';
import { AccountsService } from './services/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //note provider for AccountsService and LoggingService is only in AppComponent to propagate this to childs the same instanace
  //providers: [AccountsService, LoggingService]
})
export class AppComponent implements OnInit {
  accounts: {name: string, status: string}[];

  constructor(private accountsService: AccountsService) {}

  ngOnInit(): void {
    this.accounts = this.accountsService.accounts;
  }
}
