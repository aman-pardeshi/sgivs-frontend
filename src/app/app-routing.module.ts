import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from './layout/app.layout.component';
import { HomeComponent } from './components/home/home.component';
import { PublicHolidayComponent } from './components/public-holiday/public-holiday.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AdditionalServicesComponent } from './components/additional-services/additional-services.component';
import { FaqModule } from './components/faq/faq.module';
import { FaqComponent } from './components/faq/faq.component';
import { CustomerExperienceComponent } from './components/customer-experience/customer-experience.component';
import { SecurityRegulationsComponent } from './components/security-regulations/security-regulations.component';
import { UsefulLinksComponent } from './components/useful-links/useful-links.component';
import { AttestationServiceComponent } from './components/attestation-service/attestation-service.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'news',
        loadChildren: () =>
          import('./components/news/news.module').then((m) => m.NewsModule),
      },
      {
        path: 'visa',
        loadChildren: () =>
          import('./components/visa-type/visa-type.module').then(
            (m) => m.VisaTypeModule
          ),
      },
      {
        path: 'passport',
        loadChildren: () =>
          import('./components/passport-service/passport-service.module').then(
            (m) => m.PassportServiceModule
          ),
      },
      {
        path: 'attestation/:id',
        data: { breadcrumb: 'Attestation Service' },
        component: AttestationServiceComponent,
      },
      {
        path: 'public-holidays',
        data: { breadcrumb: 'Public Holidays' },
        component: PublicHolidayComponent,
      },
      {
        path: 'contact-us',
        data: { breadcrumb: 'Contact Us' },
        component: ContactUsComponent,
      },
      {
        path: 'additional-services',
        data: { breadcrumb: 'Additional Services' },
        component: AdditionalServicesComponent,
      },
      {
        path: 'faq',
        data: { breadcrumb: 'FAQ' },
        component: FaqComponent,
      },
      {
        path: 'customer-exerience',
        data: { breadcrumb: 'Customer Experience' },
        component: CustomerExperienceComponent,
      },
      {
        path: 'security-regulations',
        data: { breadcrumb: 'Security Regulation' },
        component: SecurityRegulationsComponent,
      },
      {
        path: 'useful-links',
        data: { breadcrumb: 'Useful Links' },
        component: UsefulLinksComponent,
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./demo/components/dashboards/dashboards.module').then(
            (m) => m.DashboardsModule
          ),
      },
      {
        path: 'uikit',
        data: { breadcrumb: 'UI Kit' },
        loadChildren: () =>
          import('./demo/components/uikit/uikit.module').then(
            (m) => m.UIkitModule
          ),
      },
      {
        path: 'utilities',
        data: { breadcrumb: 'Utilities' },
        loadChildren: () =>
          import('./demo/components/utilities/utilities.module').then(
            (m) => m.UtilitiesModule
          ),
      },
      {
        path: 'pages',
        data: { breadcrumb: 'Pages' },
        loadChildren: () =>
          import('./demo/components/pages/pages.module').then(
            (m) => m.PagesModule
          ),
      },
      {
        path: 'profile',
        data: { breadcrumb: 'User Management' },
        loadChildren: () =>
          import('./demo/components/profile/profile.module').then(
            (m) => m.ProfileModule
          ),
      },
      {
        path: 'documentation',
        data: { breadcrumb: 'Documentation' },
        loadChildren: () =>
          import('./demo/components/documentation/documentation.module').then(
            (m) => m.DocumentationModule
          ),
      },
      {
        path: 'blocks',
        data: { breadcrumb: 'Prime Blocks' },
        loadChildren: () =>
          import('./demo/components/primeblocks/primeblocks.module').then(
            (m) => m.PrimeBlocksModule
          ),
      },
      {
        path: 'ecommerce',
        data: { breadcrumb: 'E-Commerce' },
        loadChildren: () =>
          import('./demo/components/ecommerce/ecommerce.module').then(
            (m) => m.EcommerceModule
          ),
      },
      {
        path: 'apps',
        data: { breadcrumb: 'Apps' },
        loadChildren: () =>
          import('./demo/components/apps/apps.module').then(
            (m) => m.AppsModule
          ),
      },
    ],
  },
  {
    path: 'auth',
    data: { breadcrumb: 'Auth' },
    loadChildren: () =>
      import('./demo/components/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'landing',
    loadChildren: () =>
      import('./demo/components/landing/landing.module').then(
        (m) => m.LandingModule
      ),
  },
  {
    path: 'notfound',
    loadChildren: () =>
      import('./demo/components/notfound/notfound.module').then(
        (m) => m.NotfoundModule
      ),
  },
  { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
