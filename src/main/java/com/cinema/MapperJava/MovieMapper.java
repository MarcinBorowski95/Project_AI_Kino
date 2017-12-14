package com.cinema.MapperJava;

import com.cinema.Domain.Showtime;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MovieMapper {
    List<Showtime> getShowtimes();
}
