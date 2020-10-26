package com.backend.NgSoft.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.NgSoft.dto.EmailDto;
import com.backend.NgSoft.services.EmailService;
import com.backend.NgSoft.util.ApplicationResponce;

@RestController
@RequestMapping("/email")
@CrossOrigin("*")
public class EmailController {

	@Autowired
	private EmailService service;

	@RequestMapping("/feedback")
	public ApplicationResponce feedbackMail(@RequestBody EmailDto dto) {
		boolean responce = service.sendFeedbackMail(dto);
		ApplicationResponce res = new ApplicationResponce();
		res.setSuccess(responce);
		return res;
	}
}
