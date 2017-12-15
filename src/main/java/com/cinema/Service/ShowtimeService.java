package com.cinema.Service;

import com.cinema.Domain.Showtime;
import com.cinema.MapperJava.ShowtimeMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShowtimeService {

    @Autowired
    private ShowtimeMapper showtimeMapper;

    public List<Showtime> getShowtimesByIdMovie(long movie, int day){
        return showtimeMapper.getShowtimesByIdMovie(movie,day);
    }
}
