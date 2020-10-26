package com.backend.NgSoft.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.backend.NgSoft.dto.EmailDto;


@Service
public class EmailService {

	@Value("${spring.mail.username}")
	private String adminMail; 
	
	@Autowired
	private JavaMailSender javaMailSender;

	public boolean sendFeedbackMail(EmailDto emaildto) {
		boolean success = true;
		SimpleMailMessage msg = new SimpleMailMessage();
		try {
			msg.setFrom(emaildto.getEmailTo());
			msg.setTo(this.adminMail);
			msg.setSubject(emaildto.getSubject());
			msg.setText(emaildto.getMessageBody());

			javaMailSender.send(msg);

		} catch (Exception e) {
			System.out.println(e.getMessage());
			success = false;	
		}
		return success;
	}
}
