import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls:['header.style.scss']
})
export class HeaderComponent  {
    @Input() title: string = 'Easy Car Transport';

    settings() {

    }

    ngOnInit() {
    }
}