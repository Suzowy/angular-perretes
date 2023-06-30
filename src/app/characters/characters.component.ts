import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  dogImages: string[];

  constructor(private http: HttpClient) {
    this.dogImages = [];
  }

  ngOnInit() {
    this.getDogImages();
  }

  getDogImages() {
    const url = 'https://dog.ceo/api/breeds/image/random/50';

    this.http.get<any>(url).subscribe(data => {
      if (data && data.status === 'success') {
        this.dogImages = data.message;
      }
    });
  }
}
