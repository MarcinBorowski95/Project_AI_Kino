package com.cinema.Service;


import com.cinema.MapperJava.UserMapper;
import com.cinema.Domain.User;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserMapper userMapper;

    private Logger logger = Logger.getLogger(UserService.class);

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        User user = userMapper.findByEmail(s);
        if (user == null) {
            logger.info("User "+s+" not exists.");
            throw new UsernameNotFoundException("Username " + s + " not found");
        }
        else
            logger.info("User "+user.getUsername()+" found.");
        return user;

    }

    public List<User> getUsers(String e_mail) {return userMapper.getUsers(e_mail);}
    public void createUser(User user) {userMapper.createUser(user);}
}
