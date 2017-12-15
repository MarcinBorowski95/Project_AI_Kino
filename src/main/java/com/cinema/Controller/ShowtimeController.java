package com.cinema.Controller;

import com.cinema.Domain.Showtime;
import com.cinema.Service.ShowtimeService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ShowtimeController {

    @Autowired
    private ShowtimeService showtimeService;

    @RequestMapping(value = "/showtime", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    @ApiOperation(value = "Pobieranie seansow")
    public List<Showtime> getShowtimesByIdMovie(@RequestParam(value = "id_movie", required = true) long movie ,
                                                @RequestParam(value = "day", required = true) int day){
        return showtimeService.getShowtimesByIdMovie(movie,day);
    }



}
