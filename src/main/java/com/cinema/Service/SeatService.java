package com.cinema.Service;

import com.cinema.Domain.Seat;
import com.cinema.MapperJava.SeatMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SeatService {
    @Autowired
    private SeatMapper seatMapper;

    public List<Seat> getSeatsByIdShowtime(long id_showtime){
        return seatMapper.getSeatsByIdShowtime(id_showtime);
    }
    public List<Seat> getSeatsByIdRoom(long id_room){
        return seatMapper.getSeatsByIdRoom(id_room);
    }
}
