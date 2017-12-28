package com.cinema.Controller;

import com.cinema.Domain.Movie;
import com.cinema.Service.MovieService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MovieController {

    @Autowired
    private MovieService movieService;

    @RequestMapping( value = "/getAllCurrentMovies", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    @ApiOperation(value = "Pobieranie filmow aktualnie granych")
    List<Movie> getAllMovie(){
        return movieService.getAllCurrentMovies();
    }

    @RequestMapping( value = "/getMoviesByDay", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    @ApiOperation(value = "Pobieranie filmów granych danego dnia")
    List<Movie> getMoviesByDay(@RequestParam(value = "day", required = true) int day){
        return movieService.getMoviesByDay(day);
    }
    @RequestMapping( value = "/getMovieByIdMovie", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    @ApiOperation(value = "Pobieranie filmu po id filmu")
    Movie getMovieByIdMovie(@RequestParam(value = "id_movie", required = true) long id_movie){
        return movieService.getMovieByIdMovie(id_movie);
    }
}
