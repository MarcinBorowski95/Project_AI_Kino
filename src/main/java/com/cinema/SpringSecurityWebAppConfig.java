package com.cinema;


import com.cinema.Service.UserService;
import org.apache.tomcat.jdbc.pool.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;

@Configuration
@Order(SecurityProperties.ACCESS_OVERRIDE_ORDER)
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)
@EnableWebSecurity
public class SpringSecurityWebAppConfig extends WebSecurityConfigurerAdapter  {

    @Autowired
    private UserService userService;

    @Autowired
    private DataSource datasource;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userService);
//        System.out.println(datasource);
//        auth.
//                jdbcAuthentication().dataSource(datasource)
//                .usersByUsernameQuery("select e_mail,password from users where e_mail=?")
//                .authoritiesByUsernameQuery("select role from users where e_mail=?");
        auth.inMemoryAuthentication().withUser("admin1@gmail.com").password("Admino2").roles("ADMIN");

    }

    @Override
    public void configure(HttpSecurity http) throws Exception {
        http
                .cors().configurationSource(request -> new CorsConfiguration().applyPermitDefaultValues()).and()
                .authorizeRequests()
                .antMatchers("/").permitAll()
                .and().csrf().disable()
                .formLogin()
                .defaultSuccessUrl("http://localhost:4200")
                .failureUrl("/swagger-ui.html")
                .usernameParameter("username")
                .passwordParameter("password");
    }

}