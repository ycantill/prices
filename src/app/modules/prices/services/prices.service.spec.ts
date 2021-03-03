import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { PricesService } from './prices.service';
import { environment } from '@src/environments/environment';

describe('PricesService', () => {
  let service: PricesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PricesService],
    });
    service = TestBed.inject(PricesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should #getPrices function make a GET request', () => {
    service.getPrices().subscribe();

    const request = httpTestingController.expectOne(`${environment.api}/last`);

    expect(request.request.method).toEqual('GET');
  });

  it('should #getPriceDetails function make a GET request', () => {
    const priceKey = 'euro';
    service.getPriceDetails(priceKey).subscribe();

    const request = httpTestingController.expectOne(
      `${environment.api}/values/${priceKey}`
    );

    expect(request.request.method).toEqual('GET');
  });
});
