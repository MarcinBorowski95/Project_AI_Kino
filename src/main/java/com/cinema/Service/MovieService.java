package com.cinema.Service;

import com.cinema.Domain.Movie;
import com.cinema.MapperJava.MovieMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.List;

@Service
public class MovieService {

    @Autowired
    private MovieMapper movieMapper;

    public List<Movie> getMoviesByDay(int day){
        return movieMapper.getMoviesByDay(day);
    }
    public List<Movie> getAllCurrentMovies(){
        return movieMapper.getAllCurrentMovies();
    }
    public Movie getMovieByIdMovie(long id_movie){
        return movieMapper.getMovieByIdMovie(id_movie);
    }
    public List<Movie> getAllMovies(){
        return movieMapper.getAllMovies();
    }
    public Movie getMovieByTitle(String title){
        return movieMapper.getMovieByTitle(title);
    }
    public void postMovie(Movie movie){
        movieMapper.postMovie(movie);
    }


}
