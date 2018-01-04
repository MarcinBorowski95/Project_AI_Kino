package com.cinema.MapperJava;

import com.cinema.Domain.Movie;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.security.access.method.P;

import java.sql.Date;
import java.util.List;

@Mapper
public interface MovieMapper {
    List<Movie> getMoviesByDay(@Param("day") int day);
    List<Movie> getAllCurrentMovies();
    Movie getMovieByIdMovie(@Param("id_movie") long id_movie);
    List<Movie> getAllMovies();
    Movie getMovieByTitle(@Param("title") String title);
    void postMovie(@Param("m") Movie movie);
}
