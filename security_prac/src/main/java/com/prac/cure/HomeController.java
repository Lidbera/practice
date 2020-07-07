package com.prac.cure;

import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.extern.log4j.Log4j;

@Log4j
@RequestMapping("/*")
@Controller
public class HomeController {
	
	@GetMapping("/")
	public String home() {
		log.info("home called");
		return "home";
	}
	
	@GetMapping("/all")
	public void all() {
		log.info("all access");
	}
	
	@GetMapping("/member")
	public void member() {
		log.info("logined member");
	}
	
	@GetMapping("/admin")
	public void admin() {
		log.info("admin only");
	}
	
	@PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_MEMBER')")
	@GetMapping("/annoMember")
	public void doMember() {
		log.info("logined annotation member");
	}
	
	@Secured({"ROEL_ADMIN"})
	@GetMapping("/annoAdmin")
	public void doAdmin() {
		log.info("admin annotation only");
	}
}
