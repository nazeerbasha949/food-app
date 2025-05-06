import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewitemsComponent } from './addnewitems.component';

describe('AddnewitemsComponent', () => {
  let component: AddnewitemsComponent;
  let fixture: ComponentFixture<AddnewitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddnewitemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddnewitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
