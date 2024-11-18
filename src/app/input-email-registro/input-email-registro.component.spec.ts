import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputEmailRegistroComponent } from './input-email-registro.component';

describe('InputEmailRegistroComponent', () => {
  let component: InputEmailRegistroComponent;
  let fixture: ComponentFixture<InputEmailRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputEmailRegistroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputEmailRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
