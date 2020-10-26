package com.backend.NgSoft.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.NgSoft.dao.ProductDao;
import com.backend.NgSoft.models.Products;
import com.backend.NgSoft.util.ApplicationResponce;

@Service
public class ProductService {

	@Autowired
	private ProductDao dao;

	public ApplicationResponce addProduct(Products products) {
		ApplicationResponce responce = new ApplicationResponce();
		
		Products savedProduct = dao.save(products);
		if(savedProduct!=null) {
			responce.setData(savedProduct);
			responce.setSuccess(true);
		}else {
			responce.setData(null);
			responce.setSuccess(false);
		}
		return responce;
	}

	public ApplicationResponce updateProduct(Products products) {
		ApplicationResponce responce = new ApplicationResponce();
		
		Products savedProduct = dao.save(products);
		if(savedProduct!=null) {
			responce.setData(savedProduct);
			responce.setSuccess(true);
		}else {
			responce.setData(null);
			responce.setSuccess(false);
		}
		return responce;
	}

	public void deleteProduct(long id) {
		dao.deleteById(id);	

	}

	public ApplicationResponce getProduct() {
		ApplicationResponce responce = new ApplicationResponce();
		List<Products> products = dao.findAll();
		if(products!=null) {
			responce.setData(products);
			responce.setSuccess(true);
		}else {
			responce.setData(null);
			responce.setSuccess(false);
		}
		
		return responce;
	}
}
