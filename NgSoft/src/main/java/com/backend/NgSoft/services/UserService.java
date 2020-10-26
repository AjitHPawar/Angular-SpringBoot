package com.backend.NgSoft.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.backend.NgSoft.dao.UserRepo;
import com.backend.NgSoft.models.User;
import com.backend.NgSoft.util.ApplicationResponce;


@Service
public class UserService {

	@Autowired
	private UserRepo repo;

	@Autowired
	private BCryptPasswordEncoder encoder;
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	public User addUser(User user) {
		String encPassword = bCryptPasswordEncoder.encode(user.getPassword());
		user.setPassword(encPassword);
		return repo.save(user);
	}

	public User updateUser(User user) {
		return null;
	}

	public User deleteUser(int userid) {
		return null;
	}

	public List<User> getUsers() {
		return repo.findAll();
	}

	public ApplicationResponce loginUser(User loginUser) {
		ApplicationResponce responce = new ApplicationResponce();
		User user = repo.findByUsernameLike(loginUser.getUsername());
		if(user!=null) {
			user.setPassword(encoder.encode(user.getPassword()));
			responce.setData(user);
			responce.setSuccess(true);
		}else {
			responce.setData(null);
			responce.setSuccess(false);
		}
		return responce;
	}
}
