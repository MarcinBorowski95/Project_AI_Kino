package com.cinema.MapperJava;

import com.cinema.Domain.Room;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface RoomMapper {
    Room getRoomByIdShowtime(@Param("id_showtime") long id_showtime);
}
