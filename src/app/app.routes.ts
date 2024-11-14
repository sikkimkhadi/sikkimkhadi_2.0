import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'outlets',
        loadComponent: () => import('./pages/outlets/outlets.component').then(m => m.OutletsComponent)
    },
    {
        path: 'products',
        loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent)
    },
    {
        path: 'production',
        loadComponent: () => import('./pages/production/production.component').then(m => m.ProductionComponent)
    },
    {
        path: 'pmegp',
        loadComponent: () => import('./pages/pmegp/pmegp.component').then(m => m.PmegpComponent)
    },  
    {
        path: 'beekeeping',
        loadComponent: () => import('./pages/beekeeping/beekeeping.component').then(m => m.BeekeepingComponent)
    },
    {
        path: 'about',
        loadComponent: () => import('./pages/aboutus/aboutus.component').then(m => m.AboutusComponent)
    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/contactus/contactus.component').then(m => m.ContactusComponent)
    },
    {
        path: 'latest',
        loadComponent: () => import('./events/latest/latest.component').then(m => m.LatestComponent)
    },
    {
        path: 'upcoming',
        loadComponent: () => import('./events/upcoming/upcoming.component').then(m => m.UpcomingComponent)
    },
    {
        path: 'annual',
        loadComponent: () => import('./events/annual/annual.component').then(m => m.AnnualComponent)
    },
    {
        path: 'rti',
        loadComponent: () => import('./pages/rti-act/rti-act.component').then(m => m.RTIActComponent)
    },
    {
        path: 'turuk',
        loadComponent: () => import('./pages/production/turuk/turuk.component').then(m => m.TurukComponent)
    },
    {
        path: 'dodak',
        loadComponent: () => import('./pages/production/dodak/dodak.component').then(m => m.DodakComponent)
    },
    {
        path: 'samdong',
        loadComponent: () => import('./pages/production/samdong/samdong.component').then(m => m.SamdongComponent)
    },
    {
        path: 'pune',
        loadComponent: () => import('./pages/production/pune/pune.component').then(m => m.PuneComponent)
    },
    {
        path: 'tarku',
        loadComponent: () => import('./pages/production/tarku/tarku.component').then(m => m.TarkuComponent)
    },
    {
        path: 'gom',
        loadComponent: () => import('./pages/production/gom/gom.component').then(m => m.GomComponent)
    },
    {
        path: 'raley',
        loadComponent: () => import('./pages/production/raley/raley.component').then(m => m.RaleyComponent)
    },
    {
        path: 'mendogaon',
        loadComponent: () => import('./pages/production/mendogaon/mendogaon.component').then(m => m.MendogaonComponent)
    },
    {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent)
    }
];
