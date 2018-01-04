package com.cinema.Service;

import com.cinema.Domain.TicketType;
import com.cinema.MapperJava.TicketTypeMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TicketTypeService {
    @Autowired
    TicketTypeMapper ticketTypeMapper;

    public List<TicketType> getAllTicketsTypes(){
        return ticketTypeMapper.getAllTicketsTypes();
    }
}
