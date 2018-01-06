package com.cinema.Controller;

import com.cinema.Domain.User;
import com.cinema.Service.UserService;

import io.swagger.annotations.ApiOperation;
import io.swagger.models.Model;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.social.connect.ConnectionRepository;
import org.springframework.social.facebook.api.Facebook;
import org.springframework.social.facebook.api.PagedList;
import org.springframework.social.facebook.api.Post;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.management.relation.Role;
import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

@RestController
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping(value = "/user", method = RequestMethod.GET)
    Principal authUser(Principal user){return user;}

    @RequestMapping( value = "/email", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    @ApiOperation(value = "Pobieranie email-i userów")
    List<User> getUsers(@RequestParam(value = "e_mail", required = false) String e_mail){
        return userService.getUsers(e_mail);
    }

    @RequestMapping( value = "/getAllUsers", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    @ApiOperation(value = "Pobieranie wszystkich userów")
    List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @RequestMapping (value = "/userCreate" ,method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    @ApiOperation(value = "Dodawanie usera do bazy")
    void createUser(@RequestBody @Validated User user){
        user.setRole("C");
        userService.createUser(user);
    }


}
