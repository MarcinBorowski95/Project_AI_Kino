package com.cinema.MapperJava;

import com.cinema.Domain.TicketType;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TicketTypeMapper {
    List<TicketType> getAllTicketsTypes();
}
