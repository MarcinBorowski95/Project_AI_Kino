package com.cinema.MapperJava;

        import com.cinema.Domain.Ticket;
        import org.apache.ibatis.annotations.Mapper;
        import org.apache.ibatis.annotations.Param;

@Mapper
public interface TicketMapper {
    void postTicket(@Param("t")Ticket ticket);
    Ticket getTicketById(@Param("id") long id_ticket);
}
