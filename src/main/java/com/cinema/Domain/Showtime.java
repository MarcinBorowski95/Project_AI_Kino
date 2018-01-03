package com.cinema.Domain;

import org.apache.ibatis.type.Alias;

import java.sql.Date;
import java.sql.Time;


@Alias("Showtime")
public class Showtime {
    private long id_showtime;
    private long id_movie;
    private long id_room;
    private Time time;
    private Date date_start;

    public long getId_showtime() {
        return id_showtime;
    }

    public void setId_showtimes(long id_showtimes) {
        this.id_showtime = id_showtimes;
    }

    public long getId_movie() {
        return id_movie;
    }

    public void setId_movie(long id_movie) {
        this.id_movie = id_movie;
    }

    public long getId_room() {
        return id_room;
    }

    public void setId_room(long id_room) {
        this.id_room = id_room;
    }

    public Time getTime() {
        return time;
    }

    public void setTime(Time time) {
        this.time = time;
    }

    public Date getDate_start() {
        return date_start;
    }

    public void setDate_start(Date date_start) {
        this.date_start = date_start;
    }
}
