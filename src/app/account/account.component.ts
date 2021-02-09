import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountsService } from '../services/accounts.service';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //note provider for AccountsService and LoggingService is only in AppComponent to propagate this to childs the same instanace
})
export class AccountComponent implements OnInit {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private accountsService: AccountsService) { }

  ngOnInit(): void {
  }

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
  }
}
