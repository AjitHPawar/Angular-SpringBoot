package com.backend.NgSoft.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.NgSoft.models.User;


@Repository
public interface UserRepo extends JpaRepository<User, Integer> {
	
	public User findByUsernameLikeAndPasswordLike(String username, String password);
	
	public User findByUsernameLike(String username);
}
