import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss'
})
export class AboutusComponent {
  
  titles!: any[];
  err: any;
  displayedColumns: string[] = ['title', 'year'];

  constructor(private http: HttpClient) {}

  getData() {
    const headers = new HttpHeaders()
      .set(
        'X-RapidAPI-Key',
        '277cbb38bcmsh7b10cd1c3bb5dd2p18830cjsna42c7176cf46'
      )
      .set('X-RapidAPI-Host', 'moviesdatabase.p.rapidapi.com');

    this.http
      .request('GET', 'https://moviesdatabase.p.rapidapi.com/titles', {
        headers,
      })
      .subscribe(
        (res: any) => {
          this.titles = res.results;
          console.log('Result:', res);
        },
        (err) => {
          console.log(err.message);
          this.err = err;
        }
      );
  }
}
