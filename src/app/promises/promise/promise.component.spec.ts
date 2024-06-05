import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseComponent } from './promise.component';

describe('PromiseComponent', () => {
  let component: PromiseComponent;
  let fixture: ComponentFixture<PromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromiseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
