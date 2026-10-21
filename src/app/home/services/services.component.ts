import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Service { title: string; text: string; link: string; icon: 'bag' | 'store' | 'loom' | 'loan' | 'hive' | 'doc'; }

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services: Service[] = [
    { title: 'Buy Khadi products', text: 'Handwoven textiles, honey, tea, spices and more from Sikkim’s artisans.', link: '/products', icon: 'bag' },
    { title: 'Visit an outlet', text: 'Seven outlets in Gangtok, Namchi, Gyalshing, Singtam and Jorethang.', link: '/outlets', icon: 'store' },
    { title: 'Train at a centre', text: 'Spinning and weaving at production centres across the state.', link: '/production', icon: 'loom' },
    { title: 'Start a business with PMEGP', text: 'Bank loans with a government subsidy for new small enterprises.', link: '/pmegp', icon: 'loan' },
    { title: 'Take up bee-keeping', text: 'Training and support for bee-keepers and honey producers.', link: '/beekeeping', icon: 'hive' },
    { title: 'Right to Information', text: 'The Board’s disclosures and how to file an RTI application.', link: '/rti', icon: 'doc' },
  ];
}
