package com.backend.NgSoft.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.NgSoft.models.Products;

@Repository
public interface ProductDao extends JpaRepository<Products, Long> {

}
