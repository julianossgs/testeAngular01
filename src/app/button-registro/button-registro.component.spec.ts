import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRegistroComponent } from './button-registro.component';

describe('ButtonRegistroComponent', () => {
  let component: ButtonRegistroComponent;
  let fixture: ComponentFixture<ButtonRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonRegistroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
