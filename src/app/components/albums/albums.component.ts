import { Component, Input } from '@angular/core';
import { Observable, map, zip } from 'rxjs';
import { Album } from '../../model/album.interface';
import { AlbumService } from '../../services/album.service';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatIconModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.scss',
})
export class AlbumsComponent {
  @Input() public albums$?: Observable<Album[]>;
  @Input() public userId?: number;

  constructor(private albumService: AlbumService, private router: Router) {}

  ngAfterViewInit(): void {
    this.fetchData();
  }

  private fetchData(): void {
    if (!this.albums$)
      this.albums$ = this.albumService.getAlbumsByUser(this.userId);
  }

  public openPhotos(album: Album): void {
    this.router.navigate(['photos'], { queryParams: { albumId: album?.id } });
  }
}
