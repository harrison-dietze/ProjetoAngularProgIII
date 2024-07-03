import { Component, Input, inject } from '@angular/core';
import { Observable, map, zip } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from '../../services/photo.service';
import { Photo } from '../../model/photo.interface';


@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.scss',
})
export class PhotosComponent {
  @Input() public photos$?: Observable<Photo[]>;
  
  private activatedRoute = inject(ActivatedRoute);

  private albumId?: number

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.albumId = this.activatedRoute.snapshot.queryParams['albumId'];
    this.fetchData();
  }

  private fetchData(): void {
   if(!this.photos$) this.photos$ = this.photoService.getPhotosByAlbum(this.albumId);
  }

}
