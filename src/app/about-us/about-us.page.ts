import { Component, OnInit } from '@angular/core';
import { AutoCompleteOptions } from 'ionic4-auto-complete';
import { ConfigService } from '../config/config.sevice';

@Component({
  selector: 'app-about-us',
  templateUrl: 'about-us.page.html',
  styleUrls: ['about-us.page.scss']
})
export class AboutUsPage implements OnInit {
  content: string;
  constructor(private service: ConfigService) {
  }

  ngOnInit() {
    this.content = `<p>We have partnered with Australia’s reliable and trust worthy car carriers to move your cars all over Australia. With that we bring you more than 30+ years of experience in car transportation. Rest assured your car will be transported to the destination with all the safety and care, for extra peace of mind will also be covered with a transport insurance which will cover the vehicle up to the market value.</p></br>

    <p>Just like how you make a Flight booking online, we bring you the ONE STOP SHOP to make a Car transport booking online, with the carrier directly.</p></br>
    
    <p>Our main focus is customer service, thus we make sure you get the best price and provide you with the updates/tracking of the vehicle.</p>`;
  }



}
