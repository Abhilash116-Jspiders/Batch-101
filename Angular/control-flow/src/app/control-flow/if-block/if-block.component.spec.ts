import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfBlockComponent } from './if-block.component';

describe('IfBlockComponent', () => {
  let component: IfBlockComponent;
  let fixture: ComponentFixture<IfBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
