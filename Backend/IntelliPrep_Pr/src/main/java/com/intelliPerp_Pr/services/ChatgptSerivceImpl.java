package com.intelliPerp_Pr.services;

import java.util.List;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.intelliPerp_Pr.model.ChatgptResponse;
import com.intelliPerp_Pr.model.QuestionAnswers;
import com.intelliPerp_Pr.repository.ChatgptApiRespository;
import com.intelliPerp_Pr.repository.QuestionAnswerRepository;

import lombok.extern.slf4j.Slf4j;



@Service
@Slf4j
public class ChatgptSerivceImpl implements ChatgptService {


	private ChatgptApiRespository chatApi;
	private QuestionAnswerRepository questionRespository;
	private RestTemplate api;
	
	
	
	

	public ChatgptSerivceImpl(ChatgptApiRespository chatApi, QuestionAnswerRepository questionRespository,
			RestTemplate api) {
		super();
		this.chatApi = chatApi;
		this.questionRespository = questionRespository;
		this.api = api;
	}

	private final String url = "https://api.openai.com/v1/chat/completions";
	private final String model = "gpt-3.5-turbo";
	
	@Override
	public String start() {
		
		HttpHeaders headers = new HttpHeaders();
		headers.add("Authorization","Bearer " +chatApi.getApiKey());
		headers.setContentType(MediaType.APPLICATION_JSON);
		
		
		String requestBody= "{\r\n"
				+ "  \"model\": \"gpt-3.5-turbo\",\r\n"
				+ "  \"messages\": [\r\n"
				+ "    {\r\n"
				+ "      \"role\": \"user\",\r\n"
				+ "      \"content\": \"give me 10 interview questions for Mern  interview\"\r\n"
				+ "    }\r\n"
				+ "  ]\r\n"
				+ "}\r\n";
			
		log.info("Request URL: {}", url);
		log.info("Request Headers: {}", headers);
		log.info("Request Body: {}", requestBody);
		
		HttpEntity<String> request = new HttpEntity<>(requestBody,headers);
		
		
		  ResponseEntity<ChatgptResponse> postForEntity = api.postForEntity(url, request, ChatgptResponse.class);
		  ChatgptResponse chatgptResponse = postForEntity.getBody();
		
		  
		return chatgptResponse.getChoices().get(0).getMessage().getContent();
	}

	@Override
	public String feedBack() {
		
		
		List<QuestionAnswers> Q = questionRespository.findAll();
		
		String request="";
		
		for(QuestionAnswers A: Q) {
			
			String request_temp = "This is Question "+A.getQuestion()+" And This is Answer "+A.getAnswer();
			request+= request_temp.replaceAll("\"", "");
		}
		
		request+="`Now Imagine the above question and answer were given by me for an interview based on the above questions and answers give me the proper feedback of the interview. The Feedback should follow the following structure {communication skill: give rating out of 10 (if no questions for this then give zero), Technical skill : give rating out of 10 (if no questions for this then give zero),Coding skill : give rating out of 10 (if no questions for this then give zero),Conceptual Understanding : give rating out of 10 (if no questions for this then give zero)}Note (very important)- Don't give any feedback explanation just give marks out of 10. Also don't write anything in your feedback apart from the structure given`";
		
		org.springframework.http.HttpHeaders headers = new org.springframework.http.HttpHeaders();
		
		headers.add("Authorization", "Bearer "+chatApi.getApiKey());
		headers.setContentType(org.springframework.http.MediaType.APPLICATION_JSON);
		
		String requestBody= "{\r\n"
				+ "  \"model\": \"gpt-3.5-turbo\",\r\n"
				+ "  \"messages\": [\r\n"
				+ "    {\r\n"
				+ "      \"role\": \"user\",\r\n"
				+ "      \"content\": \""+request+" \"\r\n"
				+ "    }\r\n"
				+ "  ]\r\n"
				+ "}\r\n";
		
		
		HttpEntity<String> request1 = new HttpEntity<>(requestBody,headers);
		
		 ChatgptResponse r =  api.postForObject(url, request1, ChatgptResponse.class);
		 
		
		 QuestionAnswers response_client = new QuestionAnswers();
		 
		 
		 String t = r.getChoices().get(0).getMessage().getContent();
		 
		return t;
		
	}

	@Override
	public String addChat(QuestionAnswers questionAnswers) {
	
		questionRespository.save(questionAnswers);
		
		return "added question and answer";
	}


}
