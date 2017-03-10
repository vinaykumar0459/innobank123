import { Component, OnInit } from '@angular/core';
import { FundTransfer } from './fund-details';
import {AppService} from '../../../app.service';
@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html'

})
export class FundTransferComponent implements OnInit {
transferModes:any[];
client:FundTransfer;
  constructor( private transferService:AppService) {
   // this.transferModes=['NEFT','IMPS','RTGS']
   }

  ngOnInit() {
    //this.transferModes=[];
     this.client={name:'',bank:'',ifsccode:'',accountnum:undefined ,amount:undefined}
  }
transfer(client)
{
  this.transferService.data = this.client;
this.transferService.url="http://localhost:3000/fund/fundtransfer";
this.transferService.postService().subscribe(res =>res);
}
}

