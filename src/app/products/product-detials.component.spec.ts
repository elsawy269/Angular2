import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducrDetialsComponent } from './producr-detials.component';

describe('ProducrDetialsComponent', () => {
  let component: ProducrDetialsComponent;
  let fixture: ComponentFixture<ProducrDetialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducrDetialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducrDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
