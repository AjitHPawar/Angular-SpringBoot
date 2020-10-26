package com.backend.NgSoft.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.NgSoft.models.User;
import com.backend.NgSoft.services.UserService;
import com.backend.NgSoft.util.ApplicationResponce;


@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

	@Autowired
	private UserService service;

	@RequestMapping("/adduser")
	public User addUser(@RequestBody User user) {
		User userResponce = service.addUser(user);
		return userResponce;
	}
	
	@RequestMapping("/updateuser")
	public User updateUser(@RequestBody User user) {
		return null;
	} 
	
	@RequestMapping("/deleteuser/{userId}")
	public User deleteUser() {
		return null;
	}
	
	@RequestMapping("/getuser")
	public List<User> getUser(){
		return service.getUsers();
	}
	
	@RequestMapping("/loginuser")
	public ApplicationResponce loginUser(@RequestBody User loginUser) {
		ApplicationResponce responce = service.loginUser(loginUser);
		return responce;
	}
}
