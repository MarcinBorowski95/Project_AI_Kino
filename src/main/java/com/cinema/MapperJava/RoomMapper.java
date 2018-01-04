package com.cinema.MapperJava;

import com.cinema.Domain.Room;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.sql.Date;
import java.sql.Time;
import java.util.List;

@Mapper
public interface RoomMapper {
    Room getRoomByIdShowtime(@Param("id_showtime") long id_showtime);
    List<Room> getAllRooms();
    List<Room> getRoomsByDateAndTime(@Param("dateParam") Date date, @Param("timeParam") Time time);
    void postRoom(@Param("r") Room room);
    void postSeat(@Param("i") long id_room,@Param("r") int row, @Param("s") int seat);
}
