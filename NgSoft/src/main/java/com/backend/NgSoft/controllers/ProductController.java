package com.backend.NgSoft.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.NgSoft.models.Products;
import com.backend.NgSoft.services.ProductService;
import com.backend.NgSoft.util.ApplicationResponce;

@RestController
@RequestMapping("/product")
@CrossOrigin("*")
public class ProductController {

	@Autowired
	private ProductService service;

	@RequestMapping("/add")
	public ApplicationResponce addProduct(@RequestBody Products products) {
		ApplicationResponce responce = service.updateProduct(products);
		return responce;
	}

	@RequestMapping("/delete/{id}")
	public void deleteProduct(@PathVariable Long id) {
		service.deleteProduct(id);
	}

	@RequestMapping("update")
	public ApplicationResponce updateProduct(Products products) {
		ApplicationResponce responce = service.updateProduct(products);
		return responce;

	}

	@RequestMapping("/get")
	public ApplicationResponce getProduct() {
		ApplicationResponce responce = service.getProduct();
		return responce;
	}
}
