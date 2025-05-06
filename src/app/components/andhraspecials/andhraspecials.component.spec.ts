import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndhraspecialsComponent } from './andhraspecials.component';

describe('AndhraspecialsComponent', () => {
  let component: AndhraspecialsComponent;
  let fixture: ComponentFixture<AndhraspecialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AndhraspecialsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AndhraspecialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
