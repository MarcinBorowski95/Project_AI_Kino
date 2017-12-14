package com.cinema.Service;

import com.cinema.Domain.Showtime;
import com.cinema.MapperJava.MovieMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {

    @Autowired
    MovieMapper movieMapper;

    public List<Showtime> getShowtimes(){
        return movieMapper.getShowtimes();
    }
}
