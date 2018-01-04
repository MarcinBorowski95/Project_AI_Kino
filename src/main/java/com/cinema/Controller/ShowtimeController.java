package com.cinema.Controller;

import com.cinema.Domain.Showtime;
import com.cinema.Service.ShowtimeService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ShowtimeController {

    @Autowired
    private ShowtimeService showtimeService;

    @RequestMapping(value = "/getShowtimesByIdMovieAndDay", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    @ApiOperation(value = "Pobieranie seansow po id filmu i numerze dnia")
    public List<Showtime> getShowtimesByIdMovieAndDay(@RequestParam(value = "id_movie", required = true) long movie ,
                                                @RequestParam(value = "day", required = true) int day){
        return showtimeService.getShowtimesByIdMovieAndDay(movie,day);
    }
    @RequestMapping(value = "/getShowtimesByDay", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    @ApiOperation(value = "Pobieranie seansow po numerze dnia")
    public List<Showtime> getShowtimesByDay(@RequestParam(value = "day", required = true) int day){
        return showtimeService.getShowtimesByDay(day);
    }
    @RequestMapping(value = "/postShowtime", method = RequestMethod.POST , consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    @ApiOperation(value = "Dodawanie seansow")
    public void postShowtime(@RequestBody Showtime showtime){
        showtimeService.postShowtime(showtime);
    }



}
