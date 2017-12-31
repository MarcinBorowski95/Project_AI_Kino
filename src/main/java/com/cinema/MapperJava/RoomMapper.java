package com.cinema.MapperJava;

import com.cinema.Domain.Room;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface RoomMapper {
    Room getRoomByIdShowtime(@Param("id_showtime") long id_showtime);
    List<Room> getAllRooms();
    List<Room> getRoomsByDateAndTime(@Param("datParam") String date, @Param("timeParam") String time);
}
