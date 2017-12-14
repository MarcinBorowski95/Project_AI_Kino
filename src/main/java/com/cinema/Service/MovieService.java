package com.cinema.Service;

import com.cinema.Domain.Movie;
import com.cinema.MapperJava.MovieMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {

    @Autowired
    private MovieMapper movieMapper;

    public List<Movie> getMovies(int day){
        return movieMapper.getMovies(day);
    }

    public List<Movie> getAllMovies(){
        return movieMapper.getAllMovies();
    }

}
