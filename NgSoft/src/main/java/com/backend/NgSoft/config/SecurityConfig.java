package com.backend.NgSoft.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.backend.NgSoft.services.UserDetailsServiceImpl;

@EnableWebSecurity
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Bean
	public BCryptPasswordEncoder getBcryptPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	public UserDetailsService getUserDetailsService() {
		return new UserDetailsServiceImpl();
	}

	@Bean
	public DaoAuthenticationProvider getDaoAuthenticationProvider() {
		DaoAuthenticationProvider daoAuthenticationProvider = new DaoAuthenticationProvider();
		daoAuthenticationProvider.setUserDetailsService(this.getUserDetailsService());
		daoAuthenticationProvider.setPasswordEncoder(this.getBcryptPasswordEncoder());
		return daoAuthenticationProvider;
	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.authenticationProvider(getDaoAuthenticationProvider());

		// auth.inMemoryAuthentication().withUser("user1").password("user1").roles("USER").and().withUser("user2")
		// .password("user2").roles("ADMIN");
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
//		http.authorizeRequests().antMatchers("/admin").hasRole("ADMIN").antMatchers("/").hasAnyRole("USER", "ADMIN")
//				.antMatchers("/**").permitAll();
		http.csrf().disable().authorizeRequests().antMatchers("/**").permitAll();

	}

}
