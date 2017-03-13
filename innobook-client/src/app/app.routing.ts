import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import { UserLoginComponent } from './components/useraction/user-login/user-login.component';
import { homepageComponent } from './components/homepage/homepage.component';
import { accountsummaryComponent } from './components/accountsummary/accountsummary.component';
import { editprofileComponent } from './components/editprofile/editprofile.component';
import { UserRegisterComponent } from './components/useraction/user-register/user-register.component';
import { forgotpasswordComponent } from './components/useraction/forgotpassword/forgotpassword.component';
import { createnewaccountComponent } from './components/useraction/createnewaccount/createnewaccount.component';
import { accountsummarymainComponent } from './components/accountsummary/accountsummarymain/accountsummarymain.component';
import { FundTransferComponent } from './components/payments/fund-transfer/fund-transfer.component';
import {  MiniStatementComponent } from './components/statements/mini-statement/mini-statement.component';
import { detailedstatementComponent } from './components/payments/detailedstatement/detailedstatement.component';
import { notfoundComponent } from './components/useraction/notfound/notfoundcomponent';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
const appRoutes: Routes=[

   
{ path:'', component: homepageComponent, children : [
     { path: '',
      component : UserLoginComponent
     },
     { path: 'register', component: UserRegisterComponent },
     { path: 'forgotpassword', component: forgotpasswordComponent},
     { path: 'createnewaccount', component: createnewaccountComponent}
   ] },
{ path: '', component: accountsummarymainComponent, children : [
     { path : 'accountsummary', component: accountsummaryComponent},
     { path : 'myprofile', component : editprofileComponent},
     { path : 'ministatement', component: MiniStatementComponent},
     { path : 'detailedstatement', component: detailedstatementComponent},
     { path : 'fundtransfer', component : FundTransferComponent},
     { path : 'newaccountrequests', component : AdminLoginComponent },
     {path: '**', component: notfoundComponent}
]} 
  

]

export const routing :ModuleWithProviders =RouterModule.forRoot(appRoutes);
