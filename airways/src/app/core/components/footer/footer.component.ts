import { Component } from '@angular/core';

interface IfooterDataIco {
  img: string;
  link: string;
}

interface IfooterPayIco {
  img: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  footerDataIco: IfooterDataIco[] = [
    {
      img: './assets/RSlogo.png',
      link: 'https://rs.school/',
    },
    {
      img: '../assets/oneGit.png',
      link: 'https://github.com/yura703',
    },
    {
      img: '/assets/twoGit.png',
      link: 'https://github.com/andreiChabatul',
    },
    {
      img: '/assets/threeGit.png',
      link: 'https://github.com/guschins',
    },
  ];

  footerPayIco: IfooterPayIco[] = [
    {
      img: '/assets/iconVisa.svg',
    },
    {
      img: '/assets/iconMastercard.svg',
    },
    {
      img: '/assets/iconAmasonPay.svg',
    },
    {
      img: '/assets/iconAmerican.svg',
    },
  ];
}
