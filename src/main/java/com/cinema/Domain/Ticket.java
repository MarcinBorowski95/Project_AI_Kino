package com.cinema.Domain;

import java.util.Date;

public class Ticket {
    private long id_ticket;
    private long id_showtime;
    private long id_seat;
    private long id_user;
    private long id_type;
    private Date date;

    public long getId_ticket() {
        return id_ticket;
    }

    public void setId_ticket(long id_ticket) {
        this.id_ticket = id_ticket;
    }

    public long getId_showtime() {
        return id_showtime;
    }

    public void setId_showtime(long id_showtime) {
        this.id_showtime = id_showtime;
    }

    public long getId_seat() {
        return id_seat;
    }

    public void setId_seat(long id_seat) {
        this.id_seat = id_seat;
    }

    public long getId_user() {
        return id_user;
    }

    public void setId_user(long id_user) {
        this.id_user = id_user;
    }

    public long getId_type() {
        return id_type;
    }

    public void setId_type(long id_type) {
        this.id_type = id_type;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
