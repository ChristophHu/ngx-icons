import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxIconsComponent } from './ngx-icons.component';

describe('NgxIconsComponent', () => {
  let component: NgxIconsComponent;
  let fixture: ComponentFixture<NgxIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxIconsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
