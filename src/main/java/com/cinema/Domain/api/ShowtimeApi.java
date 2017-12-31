package com.cinema.Domain.api;

import java.sql.Date;
import java.sql.Time;

public class ShowtimeApi {

    private String title;
    private Date date_start;
    private Time time;

    public Date getDate_start() {
        return date_start;
    }

    public void setDate_start(Date date_start) {
        this.date_start = date_start;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Time getTime() {
        return time;
    }

    public void setTime(Time time) {
        this.time = time;
    }
}
