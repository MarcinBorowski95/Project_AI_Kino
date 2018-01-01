package com.cinema.Service;

import com.cinema.Domain.Room;
import com.cinema.MapperJava.RoomMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
    public List<Room> getRoomsByDateAndTime(String date, String time){
        return roomMapper.getRoomsByDateAndTime(date,time);
    }
}
