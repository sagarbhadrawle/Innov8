package com.intelliPerp_Pr.controller;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.intelliPerp_Pr.model.QuestionAnswers;
import com.intelliPerp_Pr.services.ChatgptService;

import lombok.extern.slf4j.Slf4j;

@RestController
@CrossOrigin("*")
@Slf4j
public class InterviewControllor {

	
	@Autowired
	private ChatgptService chatgptService;
	



	@GetMapping("/giveQuestion")
	public ResponseEntity<String[]> start() {
		
		
		log.info("Request Type: [GET],\t Endpoint: \"/start\",\t"+ "TimeStamp : " + LocalDateTime.now());
		String c = chatgptService.start();
		String[] questions = c.trim().split("\n");
		
		return new ResponseEntity<>(questions, HttpStatus.ACCEPTED);
	}

	
	@PostMapping("/addQuestionAndAnswer")
	public ResponseEntity<String> addChat(@RequestBody QuestionAnswers questionAnswers ){
		log.info("Request Type: [POST],\t Endpoint: \"\t"+ "TimeStamp : " + LocalDateTime.now());
		return new ResponseEntity<String>(chatgptService.addChat(questionAnswers),HttpStatus.CREATED);
	}
	 
	
	@GetMapping("/getfeedback")
	public ResponseEntity<String> getFeedback(){
		log.info("Request Type:,\t Endpoint: \"\t"+ "TimeStamp : " + LocalDateTime.now());
		return new ResponseEntity<String>(chatgptService.feedBack(),HttpStatus.CREATED);
	}
	
	
	
}
