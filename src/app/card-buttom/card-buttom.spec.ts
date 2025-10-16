import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardButtom } from './card-buttom';

describe('CardButtom', () => {
  let component: CardButtom;
  let fixture: ComponentFixture<CardButtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardButtom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardButtom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
