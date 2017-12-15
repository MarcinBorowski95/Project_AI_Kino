package com.cinema.Domain;

public class Seat {
    private long id_seat;
    private long id_room;
    private int row;
    private int seat;

    public long getId_seat() {
        return id_seat;
    }

    public void setId_seat(long id_seat) {
        this.id_seat = id_seat;
    }

    public long getId_room() {
        return id_room;
    }

    public void setId_room(long id_room) {
        this.id_room = id_room;
    }

    public int getRow() {
        return row;
    }

    public void setRow(int row) {
        this.row = row;
    }

    public int getSeat() {
        return seat;
    }

    public void setSeat(int seat) {
        this.seat = seat;
    }
}
