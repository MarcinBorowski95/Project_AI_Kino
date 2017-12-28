package com.cinema.Controller;

import com.cinema.Domain.User;
import com.cinema.Service.UserService;

import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
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

    @RequestMapping(value = "/credentials", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    @ApiOperation(value = "Pobieranie danych użytkownika do logowania")
    List<User> getCredentials(@RequestParam(value = "e_mail") String e_mail, @RequestParam(value = "password") String password){
        return userService.getCredentials(e_mail,password);
    }
}
