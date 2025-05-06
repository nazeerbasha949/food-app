import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoduluComponent } from './podulu.component';

describe('PoduluComponent', () => {
  let component: PoduluComponent;
  let fixture: ComponentFixture<PoduluComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PoduluComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoduluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
