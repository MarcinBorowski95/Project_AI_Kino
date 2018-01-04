package com.cinema.Controller;

import com.cinema.Domain.Movie;
import com.cinema.Service.MovieService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;

@RestController
public class MovieController {

    @Autowired
    private MovieService movieService;

    @RequestMapping( value = "/getAllCurrentMovies", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    @ApiOperation(value = "Pobieranie filmow aktualnie granych")
    List<Movie> getAllCurrentMovies(){
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
    @RequestMapping( value = "/getAllMovies", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    @ApiOperation(value = "Pobieranie wszystkich filmow")
    List<Movie> getAllMovies(){
        return movieService.getAllMovies();
    }

    @RequestMapping( value = "/getMovieByTitle", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    @ApiOperation(value = "Pobieranie filmu po tytule")
    Movie getMovieByIdMovie(@RequestParam(value = "title", required = true) String title){
        return movieService.getMovieByTitle(title);
    }
    @RequestMapping( value = "/postMovie", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    @ApiOperation(value = "Dodawanie filmu")
    public void postMovie(@RequestBody Movie movie){
        movieService.postMovie(movie);
    }

}
