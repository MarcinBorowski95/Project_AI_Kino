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

    @RequestMapping( value = "/allMovies", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    @ApiOperation(value = "pobieranie filmów aktualnych")
    List<Movie> getAllMovie(){
        return movieService.getAllMovies();
    }

    @RequestMapping( value = "/movies", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    @ApiOperation(value = "pobieranie filmów granych danego dnia")
    List<Movie> getMovies(@RequestParam(value = "day", required = true) int day){
        return movieService.getMovies(day);
    }
}
