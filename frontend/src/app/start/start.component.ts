import { Component } from '@angular/core';
import { Movie } from '../model/movie';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {

  public isMainPageActive: boolean = true;
  public isGameActive: boolean = false;
  public isVoteAverageActive: boolean = false;
  public isPopularityActive: boolean = false;
  public isRunTimeActive: boolean = false;
  public isRevenueActive: boolean = false;
  public isGameOver: boolean = false;
  public isVisibleValue: boolean = false;
  public isAnswered: boolean = false;

  public movieDetail1!: Movie;
  public movieDetail2!: Movie;
  public score: number = 0;
  
  title1!: string;
  voteAverage1!: number;
  popularity1!: number;
  runTime1!: number;
  revenue1!: number;
  
  title2!: string;
  voteAverage2: number = 5;
  popularity2!: number;
  runTime2!: number;
  revenue2!: number;
  
  constructor( private movieService: MovieService ) {}

  voteAverageGame() {
    if(this.isGameOver) {
      this.isGameOver = false;
      this.isGameActive = true;
      this.isAnswered = false;
      this.score = 0;
    }
    this.isMainPageActive = false;
    this.isGameActive = true;
    this.isVoteAverageActive = true;
    this.isPopularityActive = false;
    this.isRunTimeActive = false;
    this.isRevenueActive = false;
    this.movieService.getTwoMovies().subscribe((data: any) => {
      this.movieDetail1 = data[0];
      this.movieDetail2 = data[1];
      this.title1 = this.movieDetail1.title;
      this.voteAverage1 = this.movieDetail1.voteAverage;
      this.title2 = this.movieDetail2.title;
      this.voteAverage2 = this.movieDetail2.voteAverage;
    });
  }

  popularityGame() {
    if(this.isGameOver) {
      this.isGameOver = false;
      this.isGameActive = true;
      this.isAnswered = false;
      this.score = 0;
    }
    this.isMainPageActive = false;
    this.isGameActive = true;
    this.isVoteAverageActive = false;
    this.isPopularityActive = true;
    this.isRunTimeActive = false;
    this.isRevenueActive = false;
    this.movieService.getTwoMovies().subscribe((data: any) => {
      this.movieDetail1 = data[0];
      this.movieDetail2 = data[1];
      this.title1 = this.movieDetail1.title;
      this.popularity1 = this.movieDetail1.popularity;
      this.title2 = this.movieDetail2.title;
      this.popularity2 = this.movieDetail2.popularity;
    });
  }

  runTimeGame() {
    if(this.isGameOver) {
      this.isGameOver = false;
      this.isGameActive = true;
      this.isAnswered = false;
      this.isGameActive = false;
      this.score = 0;
    }
    this.isMainPageActive = false;
    this.isGameActive = true;
    this.isVoteAverageActive = false;
    this.isPopularityActive = false;
    this.isRunTimeActive = true;
    this.isRevenueActive = false;
    this.movieService.getTwoMovies().subscribe((data: any) => {
      this.movieDetail1 = data[0];
      this.movieDetail2 = data[1];
      this.title1 = this.movieDetail1.title;
      this.runTime1 = this.movieDetail1.runtime;
      this.title2 = this.movieDetail2.title;
      this.runTime2 = this.movieDetail2.runtime;
    });
  }

  revenueGame() {
    if(this.isGameOver) {
      this.isGameOver = false;
      this.isGameActive = true;
      this.isAnswered = false;
      this.score = 0;
    }
    this.isMainPageActive = false;
    this.isGameActive = true;
    this.isVoteAverageActive = false;
    this.isPopularityActive = false;
    this.isRunTimeActive = false;
    this.isRevenueActive = true;
    this.movieService.getTwoMovies().subscribe((data: any) => {
      this.movieDetail1 = data[0];
      this.movieDetail2 = data[1];
      this.title1 = this.movieDetail1.title;
      this.revenue1 = this.movieDetail1.revenue;
      this.title2 = this.movieDetail2.title;
      this.revenue2 = this.movieDetail2.revenue;
    });
  }

  getOneMovie() {
    this.isAnswered = false;
    this.movieService.getOneMovie().subscribe((data: any) => {
      this.movieDetail2 = data;
      this.title2 = this.movieDetail2.title;
      this.voteAverage2 = this.movieDetail2.voteAverage;
      this.popularity2 = this.movieDetail2.popularity;
      this.runTime2 = this.movieDetail2.runtime;
      this.revenue2 = this.movieDetail2.revenue;
    });
  }

  higher() {
    this.isAnswered = true;
    //wait for 3 seconds
    setTimeout(() => {
      if((Math.abs(this.voteAverage2) > Math.abs(this.voteAverage1) && this.isVoteAverageActive == true) 
        || (Math.abs(this.popularity2) > Math.abs(this.popularity1) && this.isPopularityActive == true)
        || (Math.abs(this.runTime2) > Math.abs(this.runTime1) && this.isRunTimeActive == true)
        || (this.revenue2 > this.revenue1 && this.isRevenueActive == true)) {
        this.score++;
        this.title1 = this.title2;
        this.voteAverage1 = this.voteAverage2;
        this.popularity1 = this.popularity2;
        this.runTime1 = this.runTime2;
        this.revenue1 = this.revenue2;
        this.getOneMovie();

      } else {
        this.isGameActive = false;
        this.isVoteAverageActive = false;
        this.isPopularityActive = false;
        this.isRunTimeActive = false;
        this.isRevenueActive = false;
        this.isGameOver = true;
      }
    }, 3000);
  }

  lower() {
    this.isAnswered = true;
    //wait for 3 seconds
    setTimeout(() => {
      if((Math.abs(this.voteAverage2) < Math.abs(this.voteAverage1) && this.isVoteAverageActive == true) 
        || (Math.abs(this.popularity2) < Math.abs(this.popularity1) && this.isPopularityActive == true)
        || (Math.abs(this.runTime2) < Math.abs(this.runTime1) && this.isRunTimeActive == true)
        || (this.revenue2 < this.revenue1 && this.isRevenueActive == true)) {
        this.score++;
        this.title1 = this.title2;
        this.voteAverage1 = this.voteAverage2;
        this.popularity1 = this.popularity2;
        this.runTime1 = this.runTime2;
        this.revenue1 = this.revenue2;
        this.getOneMovie();

      } else {
        this.isGameActive = false;
        this.isVoteAverageActive = false;
        this.isPopularityActive = false;
        this.isRunTimeActive = false;
        this.isRevenueActive = false;
        this.isGameOver = true;
      }
    }, 3000);
  }

}

