package com.backend.NgSoft.services;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.backend.NgSoft.models.User;

@Service
public class UserDetailsImpl implements UserDetails {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private User user;

	public UserDetailsImpl(User user) {
		this.user = user;
	}
	
	 public UserDetailsImpl() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		SimpleGrantedAuthority authority = new SimpleGrantedAuthority(user.getUsertype());
		List auth = new ArrayList<GrantedAuthority>();
		auth.add(authority);
		System.out.println(auth);
		return auth;
	}

	@Override
	public String getPassword() {
		System.out.println(user.getPassword());
		return user.getPassword();
	}

	@Override
	public String getUsername() {
		System.out.println(user.getUsername());
		return user.getUsername();
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}

}
