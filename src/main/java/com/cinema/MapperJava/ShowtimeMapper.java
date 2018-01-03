package com.cinema.MapperJava;

import com.cinema.Domain.Showtime;
import com.cinema.Domain.api.ShowtimeApi;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface ShowtimeMapper {
    List<Showtime> getShowtimesByIdMovieAndDay(@Param("id_movie") long movie ,@Param("day") int day);
    List<Showtime> getShowtimesByDay(@Param("day") int day);
    ShowtimeApi getShowtimeDetails(@Param("id_showtime") long id_showtime);
}
