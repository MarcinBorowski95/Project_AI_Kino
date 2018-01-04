package com.cinema.Service;

import com.cinema.Domain.Ticket;
import com.cinema.MapperJava.TicketMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TicketService {
    @Autowired
    private TicketMapper ticketMapper;

    public Ticket getTicketById(long id){
        return ticketMapper.getTicketById(id);
    }
}
