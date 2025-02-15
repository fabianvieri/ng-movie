import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  standalone: true,
  imports: [],
  providers: [],
  selector: 'app-main',
  templateUrl: 'main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  private movie = inject(MovieService);
  coba = '123';

  ngOnInit() {
    this.coba = '234';
    // get now playing movies
    // this.movie.getNowPlayingMovies().subscribe({
    //   next: (data) => {
    //     console.log(data);
    //   },
    //   error: (err: HttpErrorResponse) => {
    //     this.messageService.add({
    //       severity: 'error',
    //       summary: 'Error',
    //       detail: err.message,
    //       life: 10000,
    //     });
    //   },
    // });
  }
}
