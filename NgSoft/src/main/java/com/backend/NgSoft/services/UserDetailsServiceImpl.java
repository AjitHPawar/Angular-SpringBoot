package com.backend.NgSoft.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.backend.NgSoft.dao.UserRepo;
import com.backend.NgSoft.models.User;

@Service
public class UserDetailsServiceImpl implements UserDetailsService{

	@Autowired
	private UserRepo repo;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = repo.findByUsernameLike(username);
		UserDetailsImpl userDetailsImpl  =null;
		if(user==null) {
			 throw(new UsernameNotFoundException("Bad Credentials"));
		}else {
			userDetailsImpl = new UserDetailsImpl(user);
		}
		return userDetailsImpl;
	}

}
