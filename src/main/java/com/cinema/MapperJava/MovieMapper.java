package com.cinema.MapperJava;

import com.cinema.Domain.Movie;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface MovieMapper {
    List<Movie> getMovies(@Param("day") int day);
    List<Movie> getAllMovies();
}
