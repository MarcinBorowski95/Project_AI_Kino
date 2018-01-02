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
    void postMovie(@Param("title") String title, @Param("title_pl") String title_pl, @Param("genre") String genre, @Param("director") String director,
                   @Param("duration") int duration, @Param("date_release") Date date_release, @Param("date_end") Date date_end,
                   @Param("description") String description, @Param("image_url") String image_url);
}
