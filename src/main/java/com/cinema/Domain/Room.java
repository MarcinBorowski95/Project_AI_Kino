package com.cinema.Domain;

public class Room {

    private long id_room;
    private int number;
    private int seatsInRow;
    private int rows;

    public long getId_room() {
        return id_room;
    }

    public void setId_room(long id_room) {
        this.id_room = id_room;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public int getRows() {
        return rows;
    }

    public void setRows(int rows) {
        this.rows = rows;
    }

    public int getSeats() {
        return seatsInRow;
    }

    public void setSeats(int seats) {
        this.seatsInRow = seats;
    }
}
