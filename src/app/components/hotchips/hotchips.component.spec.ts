import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotchipsComponent } from './hotchips.component';

describe('HotchipsComponent', () => {
  let component: HotchipsComponent;
  let fixture: ComponentFixture<HotchipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HotchipsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HotchipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
