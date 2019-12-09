import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {DataService} from './data.service';
import {combineLatest, interval} from 'rxjs';
import {map, take} from 'rxjs/operators';
import {log} from "util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  fields = ['designation', 'id'];

  employees = [
    {
      id: 1123,
      name: 'Mahtab Uddin Ahmad',
      designation: 'Chief Executive Officer',
      profile_image_url: 'http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png',

      children: [
        {
          id: 1123,
          name: 'Akash Hamid',
          designation: 'Executive',
          profile_image_url: 'http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png',
        },
        {
          id: 1177777,
          name: 'Ashraful Islam',
          designation: 'Executive',
          profile_image_url: 'http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png',

          children: [
            {
              id: 11656656,
              name: 'Mahtab Uddin Ahmad',
              designation: 'Chief Executive Officer',
              profile_image_url: 'http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png',
            },
            {
              id: 656565653,
              name: 'Raisul Ahmad',
              designation: 'Chief Executive Officer',
              profile_image_url: 'http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png',

              children: [
                {
                  id: 1123,
                  name: 'Mahtab Uddin Ahmad',
                  designation: 'Chief Executive Officer',
                  profile_image_url: 'http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png',
                }
              ]
            }
          ]
        },
        {
          id: 232323,
          name: 'Samiul Ahmad',
          designation: 'Executive',
          profile_image_url: 'http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png',

          children: [
            {
              id: 1123,
              name: 'Mahtab Uddin Ahmad',
              designation: 'Chief Executive Officer',
              profile_image_url: 'http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png',

              children: [
                {
                  id: 1123,
                  name: 'Mahtab Uddin Ahmad',
                  designation: 'Chief Executive Officer',
                  profile_image_url: 'http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png',

                  children: [
                    {
                      id: 1123,
                      name: 'Mahtab Uddin Ahmad',
                      designation: 'Chief Executive Officer',
                      profile_image_url: 'http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png',
                    },
                    {
                      id: 1123,
                      name: 'Mahtab Uddin Ahmad',
                      designation: 'Chief Executive Officer',
                      profile_image_url: 'http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png',
                    },
                    {
                      id: 1123,
                      name: 'Mahtab Uddin Ahmad',
                      designation: 'Chief Executive Officer',
                      profile_image_url: 'http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png',
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 1123,
          name: 'Karim Haque',
          designation: 'Executive',
          profile_image_url: 'http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png',
        },
      ]
    }
  ];

  constructor() {
  }

  ngOnInit(): void {

  }

  buttonClicked($event: MouseEvent) {

  }
}
