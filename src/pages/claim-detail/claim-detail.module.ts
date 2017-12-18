import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClaimDetailPage } from './claim-detail';

@NgModule({
  declarations: [
    ClaimDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ClaimDetailPage),
  ],
})
export class ClaimDetailPageModule {}
