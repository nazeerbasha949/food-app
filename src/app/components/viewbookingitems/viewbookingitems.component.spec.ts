import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbookingitemsComponent } from './viewbookingitems.component';

describe('ViewbookingitemsComponent', () => {
  let component: ViewbookingitemsComponent;
  let fixture: ComponentFixture<ViewbookingitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewbookingitemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewbookingitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
