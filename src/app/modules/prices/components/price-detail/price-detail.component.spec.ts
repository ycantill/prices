import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceDetailComponent } from './price-detail.component';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { PricesService } from '../../services/prices.service';

describe('PriceDetailComponent', () => {
  let component: PriceDetailComponent;
  let fixture: ComponentFixture<PriceDetailComponent>;
  const pricesServiceSpy = jasmine.createSpyObj('PricesService', [
    'getPrices',
    'getPriceDetails',
  ]);

  pricesServiceSpy.getPriceDetails.and.returnValue(of({}));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PriceDetailComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(convertToParamMap({ priceKey: 'euro' })),
          },
        },
        { provide: PricesService, useValue: pricesServiceSpy },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
