package com.cinema.Controller;

import com.cinema.Domain.Ticket;
import com.cinema.Service.TicketService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TicketController {

    @Autowired
    private TicketService ticketService;

    @RequestMapping( value = "/getTicketById", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    @ApiOperation(value = "Pobieranie biletu po id")
    public Ticket getTicket(@RequestParam( value = "id_ticket", required = true) long id_ticket){
        return ticketService.getTicketById(id_ticket);
    }
    @RequestMapping(value = "/postTickets", method = RequestMethod.POST , consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    @ApiOperation(value = "Dodawanie biletow")
    public void postTickets(@RequestBody List<Ticket> ticketList){
        ticketService.postTickets(ticketList);
    }
}
