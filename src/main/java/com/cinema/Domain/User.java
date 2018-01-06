package com.cinema.Domain;

import org.apache.ibatis.type.Alias;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.management.relation.Role;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Alias("User")
public class User implements UserDetails{
    private com.cinema.Domain.Role userRole = new com.cinema.Domain.Role();
    private List<com.cinema.Domain.Role> Roles = new ArrayList<>();

    private long id_user;
    private String name;
    private String surname;
    private String role;
    private String password;
    private String e_mail;
    private String username;

    public String getName() {
        return name;

    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        if(role.equals("C")){
            userRole.setId(1);
            userRole.setName("1");
            this.Roles.add(userRole);
            this.role = "1";
        }
        if(role.equals("E")){
            userRole.setId(2);
            userRole.setName("2");
            this.Roles.add(userRole);
            this.role = "2";
        }
        if(role.equals("A")){
            userRole.setId(3);
            userRole.setName("3");
            this.Roles.add(userRole);
            this.role = "3";
        }
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Roles;
    }

    public String getPassword() {
        return password.trim();
    }

    @Override
    public String getUsername() {
        return username.trim();//e_mail.trim();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public long getId() {
        return id_user;
    }

    public void setId(long id_user) {
        this.id_user = id_user;
    }

    public void setE_mail(String e_mail) {
        this.e_mail = e_mail;
    }

    public String getE_mail(){
        return e_mail;
    }

    public void setUsername(String username) {
        this.username = username.trim();
    }
}
