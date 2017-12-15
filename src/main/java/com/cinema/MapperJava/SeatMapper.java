package com.cinema.MapperJava;

import com.cinema.Domain.Seat;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface SeatMapper {
    List<Seat> getSeatsByIdShowtime(@Param("id_showtime") long id_showtime);
    List<Seat> getSeatsByIdRoom(@Param("id_room") long id_room);

}
