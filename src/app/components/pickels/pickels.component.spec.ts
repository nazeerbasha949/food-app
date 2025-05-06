import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickelsComponent } from './pickels.component';

describe('PickelsComponent', () => {
  let component: PickelsComponent;
  let fixture: ComponentFixture<PickelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PickelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PickelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
