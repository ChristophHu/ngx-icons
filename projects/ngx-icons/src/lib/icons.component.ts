import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { icons } from './icons';

@Component({
  selector: 'icons',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.sass']
})
export class IconsComponent {
  @Input() set name(iconName: string) {
    this.renderer.setProperty(this.element.nativeElement,'innerHTML', icons[iconName] || null)
  }
  
  constructor(private element: ElementRef, private renderer: Renderer2) { }
}
