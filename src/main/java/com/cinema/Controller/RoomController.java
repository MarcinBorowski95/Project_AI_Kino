package com.cinema.Controller;

import com.cinema.Domain.Room;
import com.cinema.MapperJava.RoomMapper;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RoomController {
    @Autowired
    private RoomMapper roomMapper;

    @RequestMapping(value = "/getRoomByIdShowtime", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    @ApiOperation(value = "Pobieranie sali po id seansu")
    public Room getRoomByIdShowtime(@RequestParam(value = "id_showtime", required = true) long id_showtime ){
        return roomMapper.getRoomByIdShowtime(id_showtime);
    }
}
