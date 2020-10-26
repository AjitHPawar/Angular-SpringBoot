package com.backend.NgSoft;

import javax.persistence.EntityManagerFactory;

import org.hibernate.SessionFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class NgSoftApplication {

	public static void main(String[] args) {
		SpringApplication.run(NgSoftApplication.class, args);
	}

}
