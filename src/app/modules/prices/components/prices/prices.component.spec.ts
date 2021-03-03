import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PricesService } from '../../services/prices.service';
import { PricesComponent } from './prices.component';

describe('PricesComponent', () => {
  let component: PricesComponent;
  let fixture: ComponentFixture<PricesComponent>;
  const pricesServiceSpy = jasmine.createSpyObj('PricesService', [
    'getPrices',
    'getPriceDetails',
  ]);

  pricesServiceSpy.getPrices.and.returnValue(of([]));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PricesComponent],
      providers: [{ provide: PricesService, useValue: pricesServiceSpy }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
