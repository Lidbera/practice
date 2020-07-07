package com.prac.cure;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import lombok.Getter;
import lombok.extern.log4j.Log4j;

@Log4j
@Controller
public class CommonController {
	
	@GetMapping("/accessError")
	public void error(Authentication auth, Model model) {
		log.info("access denied: " + auth);
	}
	
	@GetMapping("/customLogin")
	public void custom(String error, String logout, Model model) {
		log.info("error: " + error);
		log.info("logout: " + logout);
		
		if(error != null) model.addAttribute("error", "login error");
		if(logout != null) model.addAttribute("logout", "logout");
	}
	
	@GetMapping("/customLogout")
	public String logoutGET() {
		log.info("custom logout");
		return "/customLogin";
	}
}
