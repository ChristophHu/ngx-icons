import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { icons, NgxIconsComponent } from '../../../ngx-icons/src/public-api';

@Component({
  selector: 'app-root',
  imports: [
    NgIf,
    NgFor,
    NgxIconsComponent,
    // JsonPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  alphabetical: boolean = false
  keys: string[] = []
  keys_seperated: string[] = []
  keys_local: { key: string, value: string }[] = []

  constructor() {
    this.keys = Object.keys(icons).map(k => { return k })

    // sort iconnames
    this.keys = this.keys.sort()
    console.log(this.keys)

    this.keys_seperated = this.separateByFirstLetter(this.keys);

    // const separated: { [key: string]: string[] } = {};

    this.keys_local = Object.entries(this.keys_seperated).map(([key, value]) => ({key, value}))
    console.log(this.keys_local)

    // console.log(icons_local.forEach((icon) => {
    //   console.log(icon.key + ' ' + icon.value)
    // }))

    // console.log(Object.values(icons).map(k => { return k }))

    // console.log(this.icons_seperated.map(k => { return k }))
    // console.log(Object.keys(this.icons_seperated).map(k => { 
    //   console.log(k + ' ' + Object.values(this.icons_seperated[k])
    //   return k 
    // }))
  }

  separateByFirstLetter(strings: string[]): any {
    const separated: { [key: string]: string[] } = {};

    strings.forEach((str) => {
        const firstLetter = str.charAt(0).toUpperCase();
        if (separated[firstLetter]) {
            separated[firstLetter].push(str);
        } else {
            separated[firstLetter] = [str];
        }
    });

    console.log(separated)

    return separated;
  }
}
