import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePanelComponent } from './date-panel.component';

describe('DatePanelComponent', () => {
  let component: DatePanelComponent;
  let fixture: ComponentFixture<DatePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
