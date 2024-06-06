import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PassportServiceComponent } from './passport-service.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        data: { breadcrumb: 'Passport Service' },
        component: PassportServiceComponent,
        children: [
          {
            path: 'service/:id',
            component: PassportServiceComponent,
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class PassportServiceRoutingModule {}
