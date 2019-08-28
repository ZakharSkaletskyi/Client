import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MapBoundsDto} from '../entity/map-bounds';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceServiceService {
  private baseUrl = 'http://localhost:8080/place/';

  constructor(private http: HttpClient) {
  }

  gerListPlaceByMapsBoundsDto(mapsBounds: MapBoundsDto): Observable<any> {
    return this.http.post(`${this.baseUrl}/getListPlaceLocationByMapsBounds`, mapsBounds);
  }
}
