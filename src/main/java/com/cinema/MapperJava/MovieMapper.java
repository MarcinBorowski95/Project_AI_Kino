package com.cinema.MapperJava;

import com.cinema.Domain.Movie;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface MovieMapper {
    List<Movie> getMoviesByDay(@Param("day") int day);
    List<Movie> getAllCurrentMovies();
    Movie getMovieByIdMovie(@Param("id_movie") long id_movie);
    List<Movie> getAllMovies();
    Movie getMovieByTitle(@Param("title") String title);
}
