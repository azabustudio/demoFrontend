import { Pipe, PipeTransform } from '@angular/core';
import { Claim } from '../../models/claim-model';
import { Status } from '../../models/status-model';

/**
 * Generated class for the StatusFilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'statusFilter',
  pure: false
})
export class StatusFilterPipe implements PipeTransform {
  /**
   * Takes an array of claims and a status to filter
   */
  transform(claims: Claim[], status: Status): Claim[] {
    return claims.filter(claim => claim.status === status);
  }
}
