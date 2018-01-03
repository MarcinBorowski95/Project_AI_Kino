package com.cinema.Controller;

import com.cinema.Domain.Showtime;
import com.cinema.Domain.api.ShowtimeApi;
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

    @RequestMapping(value = "/getShowtimesByIdMovieAndDay", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    @ApiOperation(value = "Pobieranie seansow po id filmu i numerze dnia")
    public List<Showtime> getShowtimesByIdMovieAndDay(@RequestParam(value = "id_movie") long movie ,
                                                @RequestParam(value = "day") int day){
        return showtimeService.getShowtimesByIdMovieAndDay(movie,day);
    }
    @RequestMapping(value = "/getShowtimesByDay", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    @ApiOperation(value = "Pobieranie seansow po numerze dnia")
    public List<Showtime> getShowtimesByDay(@RequestParam(value = "day") int day){
        return showtimeService.getShowtimesByDay(day);
    }
<<<<<<< HEAD

    @RequestMapping(value = "/getShowtimeDetails", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    @ApiOperation(value = "Pobieranie informacji dotyczących seansu")
    public ShowtimeApi getShowtimeDetails(@RequestParam(value = "id_showtime") long id_showtime){
        return showtimeService.getShowtimeDetails(id_showtime);
    }
=======
>>>>>>> parent of bbc56b9... Dodawanie seasnow

}
