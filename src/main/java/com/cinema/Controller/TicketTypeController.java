package com.cinema.Controller;

import com.cinema.Domain.TicketType;
import com.cinema.Service.TicketTypeService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TicketTypeController {

    @Autowired
    TicketTypeService ticketTypeService;

    @RequestMapping( value = "/getAllTicketsTypes", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    @ApiOperation(value = "Pobieranie wszystkich typow biletow")
    List<TicketType> getAllTicketsTypes(){
        return ticketTypeService.getAllTicketsTypes();
    }

}
