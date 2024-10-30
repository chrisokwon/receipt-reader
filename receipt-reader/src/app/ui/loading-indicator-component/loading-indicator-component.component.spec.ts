import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingIndicatorComponentComponent } from './loading-indicator-component.component';

describe('LoadingIndicatorComponentComponent', () => {
  let component: LoadingIndicatorComponentComponent;
  let fixture: ComponentFixture<LoadingIndicatorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingIndicatorComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingIndicatorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
