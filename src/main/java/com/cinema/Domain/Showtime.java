package com.cinema.Domain;

import org.apache.ibatis.type.Alias;

import java.util.Date;

@Alias("Showtime")
public class Showtime {
    int id_showtimes;
    int id_movie;
    int id_room;
    String time;
    Date date_start;

    public int getId_showtimes() {
        return id_showtimes;
    }

    public void setId_showtimes(int id_showtimes) {
        this.id_showtimes = id_showtimes;
    }

    public int getId_movie() {
        return id_movie;
    }

    public void setId_movie(int id_movie) {
        this.id_movie = id_movie;
    }

    public int getId_room() {
        return id_room;
    }

    public void setId_room(int id_room) {
        this.id_room = id_room;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public Date getDate_start() {
        return date_start;
    }

    public void setDate_start(Date date_start) {
        this.date_start = date_start;
    }
}
