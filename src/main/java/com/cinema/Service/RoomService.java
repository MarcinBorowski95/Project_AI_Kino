package com.cinema.Service;

import com.cinema.Domain.Room;
import com.cinema.MapperJava.RoomMapper;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.sql.Date;
import java.sql.Time;
import java.util.List;

@Service
public class RoomService {

    @Autowired
    private RoomMapper roomMapper;

    public Room getRoomByIdShowtime(long id_showtime){
        return roomMapper.getRoomByIdShowtime(id_showtime);
    }
    public List<Room> getAllRooms(){
        return roomMapper.getAllRooms();
    }
    public List<Room> getRoomsByDateAndTime(Date date, Time time){
        return roomMapper.getRoomsByDateAndTime(date,time);
    }
    public void postRoom(Room room){
        roomMapper.postRoom(room);
        for(int i = 1;i<=room.getRows();i++){
            for(int j = 1;j<=room.getSeatsInRow();j++){
                roomMapper.postSeat(room.getId_room(),i,j);
            }
        }
    }
}
