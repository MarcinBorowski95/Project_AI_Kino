package com.cinema;

import com.cinema.Domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.social.connect.Connection;
import org.springframework.social.connect.ConnectionSignUp;
import org.springframework.stereotype.Service;

@Service
public class FacebookConnectionSignup implements ConnectionSignUp {

    @Override
    public String execute(Connection<?> connection) {
        User user = new User();
        user.setUsername(connection.getDisplayName());
        user.setPassword("fffffff");
        return user.getUsername();
    }
}