package com.cinema.Controller;

import com.cinema.Domain.User;
import com.cinema.Service.UserService;

import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

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

}
