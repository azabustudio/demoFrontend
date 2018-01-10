import { StatusFilterPipe } from './../../pipes/status-filter/status-filter';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClaimListPage } from './claim-list';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [],
  imports: [
    IonicPageModule.forChild(ClaimListPage),
    PipesModule.forRoot()
  ],
})
export class ClaimListPageModule { }
