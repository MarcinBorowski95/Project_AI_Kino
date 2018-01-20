package com.cinema.MapperJava;

import com.cinema.Domain.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface UserMapper {
    User findByEmail(@Param("username") String username);
    List<User> getUsers(@Param("e_mail") String e_mail);
    void createUser(@Param("user") User user);
    List<User> getAllUsers();
}
