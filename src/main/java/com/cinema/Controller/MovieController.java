package com.cinema.Controller;

import com.cinema.Domain.Showtime;
import com.cinema.Service.MovieService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MovieController {
    @Autowired
    MovieService movieService;

    @RequestMapping( value = "/showtimes", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    @ApiOperation(value = "pobieranie wszystkich aktualnych seansów")
    List<Showtime> getShowtimes() {
        return movieService.getShowtimes();
    }

}
