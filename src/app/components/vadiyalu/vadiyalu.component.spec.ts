import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VadiyaluComponent } from './vadiyalu.component';

describe('VadiyaluComponent', () => {
  let component: VadiyaluComponent;
  let fixture: ComponentFixture<VadiyaluComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VadiyaluComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VadiyaluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
