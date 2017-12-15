package com.cinema.Controller;

import com.cinema.Domain.Seat;
import com.cinema.Service.SeatService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SeatController {
    @Autowired
    private SeatService seatService;

    @RequestMapping( value = "/getSeatsByIdShowtime", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    @ApiOperation(value = "Pobieranie miejsc po id seansu")
    public List<Seat> getSeatsByIdShowtime(@RequestParam( value = "id_showtime", required = true) long id_showtime){
        return seatService.getSeatsByIdShowtime(id_showtime);
    }
    @RequestMapping( value = "/getSeatsByIdRoom", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    @ApiOperation(value = "Pobieranie miejsc po id sali")
    public List<Seat> getSeatsByIdRoom(@RequestParam( value = "id_room", required = true) long id_room){
        return seatService.getSeatsByIdRoom(id_room);
    }
}
