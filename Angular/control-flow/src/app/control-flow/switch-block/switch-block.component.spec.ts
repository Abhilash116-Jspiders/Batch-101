import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchBlockComponent } from './switch-block.component';

describe('SwitchBlockComponent', () => {
  let component: SwitchBlockComponent;
  let fixture: ComponentFixture<SwitchBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
