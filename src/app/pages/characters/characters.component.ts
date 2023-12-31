import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  dogImages: { image: string, breed: string, size: string, }[];
  searchSize: string = '';



  constructor(private http: HttpClient) {
    this.dogImages = [];
  }

  ngOnInit() {
    this.getDogImages();
  }

  getDogImages() {
    const url = 'https://dog.ceo/api/breeds/image/random/20';

    this.http.get<any>(url).subscribe(data => {
      if (data && data.status === 'success') {
        this.dogImages = data.message.map((image: string) => {
          const breed = this.extractBreedFromImageUrl(image);
          const size = this.getSizeFromBreed(breed);
          return { image, breed, size };
        });
      }
    });
  }

  extractBreedFromImageUrl(imageUrl: string): string {
    // Extrae la raza de la URL de la imagen
    const regex = /\/breeds\/(\w+)/;
    const match = regex.exec(imageUrl);
    if (match && match.length > 1) {
      return match[1];
    }
    return 'Desconocida';
  }

  getSizeFromBreed(breed: string): string {
    // Asigna un tamaño basado en la raza
    const sizes = ['Pequeño', 'Mediano', 'Grande'];
    return sizes[Math.floor(Math.random() * sizes.length)];
  }
  matchesSearchSize(dog: { image: string, breed: string, size: string }): boolean {
    if (this.searchSize === '') {
      return true;
    }
    return dog.size.toLowerCase().includes(this.searchSize.toLowerCase());
  }


}
