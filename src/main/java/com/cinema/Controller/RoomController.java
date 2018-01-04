package com.cinema.Controller;

import com.cinema.Domain.Room;
import com.cinema.MapperJava.RoomMapper;
import com.cinema.Service.RoomService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.sql.Time;
import java.util.List;

@RestController
public class RoomController {
    @Autowired
    private RoomService roomService;

    @RequestMapping(value = "/getRoomByIdShowtime", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    @ApiOperation(value = "Pobieranie sali po id seansu")
    public Room getRoomByIdShowtime(@RequestParam(value = "id_showtime", required = true) long id_showtime ){
        return roomService.getRoomByIdShowtime(id_showtime);
    }
    @RequestMapping(value = "/getAllRooms", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    @ApiOperation(value = "Pobieranie wszystkich sal")
    public List<Room> getAllRooms(){
        return roomService.getAllRooms();
    }
    @RequestMapping(value = "/getRoomsByDateAndTime", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    @ApiOperation(value = "Pobieranie wolnych sal po dacie i czasie")
    public List<Room> getRoomsByDateAndTime(@RequestParam(value = "dateParam", required = true) Date date, @RequestParam(value = "timeParam", required = true) Time time ){
        return roomService.getRoomsByDateAndTime(date,time);
    }
    @RequestMapping( value = "/postRoom", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    @ApiOperation(value = "Dodawanie sali")
    public void postMovie(@RequestBody Room room) {
        roomService.postRoom(room);
    }
}
