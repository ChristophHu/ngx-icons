# Ngx-icons

## Demo
<p align="center">
  <a href="https://christophhu.github.io/ngx-icons"><img src="https://github.com/ChristophHu/ChristophHu/blob/main/assets/img/ngx-icons.png" width="500" alt="image" /></a>
</p>

## Description
This repository is a demo application built with Angular 19, showcasing the usage of the `ngx-icons` library. The library provides a collection of icons that can be used in Angular applications. The icons are available in different sizes and colors, and can be easily customized to fit the design of your application.

## Frameworks and Languages
<p align="left">
  <img alt="Static Badge" src="https://img.shields.io/badge/20.3.2-000000?style=for-the-badge&logo=angular&logoColor=white&label=Angular&labelColor=000000">
  <img alt="Static Badge" src="https://img.shields.io/badge/HTML5-000000.svg?style=for-the-badge&logo=html5&logoColor=white&labelColor=E34F26&color=000000">
  <img alt="Static Badge" src="https://img.shields.io/badge/5.9.3-000000?style=for-the-badge&logo=typescript&logoColor=white&label=Typescript&labelColor=007ACC&color=000000">
</p>

## Installation
To run this project, you need to have Node.js installed on your machine. Clone the repository and run the following commands:

```bash
npm install
```

## Usage
Import the IconsModule in the app.module.ts.

```typescript
import { NgxIconsComponent } from '@christophhu/ngx-icons';

@NgModule({
    imports: [
        NgxIconsComponent,
        ...
    ]
...
})
```
The icons-Tag has a property name.

```html
<div class="w-12 h-12 mb-5 border border-gray-800 rounded">
  <ngx-icons class="stroke-1 stroke-current" name="2fa"></ngx-icons>
</div>
```

To run the project, use the following command:
```bash
ng serve
```

## License
This project is licensed under the MIT License.

The MIT License (MIT)
Copyright © 2025 <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
