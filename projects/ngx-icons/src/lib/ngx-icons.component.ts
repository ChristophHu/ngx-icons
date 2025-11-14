import { CommonModule } from '@angular/common'
import { Component, ElementRef, Input, Renderer2 } from '@angular/core'
import { icons } from './ngx-icons'

@Component({
  selector: 'ngx-icons',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './ngx-icons.component.html',
  styleUrls: ['./ngx-icons.component.sass']
})
export class NgxIconsComponent {
  @Input() set name(iconName: string) {
    this.renderer.setProperty(this.element.nativeElement,'innerHTML', icons[iconName] || null)
  }
  
  constructor(private element: ElementRef, private renderer: Renderer2) { }
}
