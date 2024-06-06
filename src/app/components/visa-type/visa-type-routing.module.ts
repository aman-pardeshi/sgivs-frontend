import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VisaTypeComponent } from './visa-type.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        data: { breadcrumb: 'Visa Types' },
        component: VisaTypeComponent,
        children: [
          {
            path: 'visa-types/:slug',
            component: VisaTypeComponent,
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class VisaTypeRoutingModule {}
