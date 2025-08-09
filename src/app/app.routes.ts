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
        path: 'events',
        loadComponent: () => import('./events/events.component').then(m => m.EventsComponent)
    },
    {
        path: 'events/latest',
        loadComponent: () => import('./events/latest/latest.component').then(m => m.LatestComponent),
        children: [
            {
                path: '12-09-2024',
                loadComponent: () => import('./events/latest/event-12092024/event-12092024.component').then(m => m.Event12092024Component)
            },
            {
                path: '27-09-2024',
                loadComponent: () => import('./events/latest/event-27092024/event-27092024.component').then(m => m.Event27092024Component)
            },
            {
                path: '17-09-2024',
                loadComponent: () => import('./events/latest/event-17092024/event-17092024.component').then(m => m.Event17092024Component)
            },
            {
                path: '14-08-2024',
                loadComponent: () => import('./events/latest/event-14082024/event-14082024.component').then(m => m.Event14082024Component)
            }
        ]
    },
    {
        path: 'events/upcoming',
        loadComponent: () => import('./events/upcoming/upcoming.component').then(m => m.UpcomingComponent)
    },
    {
        path: 'events/annual',
        loadComponent: () => import('./events/annual/annual.component').then(m => m.AnnualComponent)
    },
    // {
    //     path: 'upcoming',
    //     loadComponent: () => import('./events/upcoming/upcoming.component').then(m => m.UpcomingComponent)
    // },
    // {
    //     path: 'annual',
    //     loadComponent: () => import('./events/annual/annual.component').then(m => m.AnnualComponent)
    // },
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
        path: 'products/beebox',
        loadComponent: () => import('./pages/products/beebox/beebox.component').then(m => m.BeeboxComponent)
    },
    {
        path: 'products/saree',
        loadComponent: () => import('./pages/products/saree/saree.component').then(m => m.SareeComponent)
    },  
    {
        path: 'products/turmeric',
        loadComponent: () => import('./pages/products/turmeric/turmeric.component').then(m => m.TurmericComponent)
    },  
    {
        path: 'products/temitea',
        loadComponent: () => import('./pages/products/temitea/temitea.component').then(m => m.TemiteaComponent)
    },   
    {
        path: 'products/shawl',
        loadComponent: () => import('./pages/products/shawl/shawl.component').then(m => m.ShawlComponent)
    },   
    {
        path: 'products/toileteries',
        loadComponent: () => import('./pages/products/toileteries/toileteries.component').then(m => m.ToileteriesComponent)
    },
    {
        path: 'products/honey',
        loadComponent: () => import('./pages/products/honey/honey.component').then(m => m.HoneyComponent)
    },
    {
        path: 'products/duree',
        loadComponent: () => import('./pages/products/duree/duree.component').then(m => m.DureeComponent)   
    },
    {
        path: 'products/incense',
        loadComponent: () => import('./pages/products/incense/incense.component').then(m => m.IncenseComponent)
    },
    {
        path: 'products/pillow',
        loadComponent: () => import('./pages/products/pillow/pillow.component').then(m => m.PillowComponent)
    },
    {
        path: 'products/quilt',
        loadComponent: () => import('./pages/products/quilt/quilt.component').then(m => m.QuiltComponent)
    },
    {
        path: 'outlets/namchi',
        loadComponent: () => import('./pages/outlets/namchi/namchi.component').then(m => m.NamchiComponent)
    },
    {
        path: 'outlets/gyalshing',
        loadComponent: () => import('./pages/outlets/gyalshing/gyalshing.component').then(m => m.GyalshingComponent)
    },
    {
        path: 'outlets/singtam',
        loadComponent: () => import('./pages/outlets/singtam/singtam.component').then(m => m.SingtamComponent)
    },
    {
        path: 'outlets/deorali',
        loadComponent: () => import('./pages/outlets/deorali/deorali.component').then(m => m.DeoraliComponent)
    },
    {
        path: 'outlets/jorethang',
        loadComponent: () => import('./pages/outlets/jorethang/jorethang.component').then(m => m.JorethangComponent)
    },
    {
        path: 'outlets/supermarket',
        loadComponent: () => import('./pages/outlets/supermarket/supermarket.component').then(m => m.SupermarketComponent)
    },
    {
        path: 'privacy-policy',
        loadComponent: () => import('./pages/privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent)
    },
    {
        path: 'about-website',
        loadComponent: () => import('./pages/about-website/about-website.component').then(m => m.AboutWebsiteComponent)
    },
    {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent)
    }
];
