import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForBlockComponent } from './for-block.component';

describe('ForBlockComponent', () => {
  let component: ForBlockComponent;
  let fixture: ComponentFixture<ForBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
