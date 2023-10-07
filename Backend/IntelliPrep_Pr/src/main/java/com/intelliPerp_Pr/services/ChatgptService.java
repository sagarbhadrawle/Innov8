package com.intelliPerp_Pr.services;

import java.util.List;

import com.intelliPerp_Pr.model.QuestionAnswers;

public interface ChatgptService {
	
	public String start();
	public String addChat(QuestionAnswers questionAnswers); 
	public String feedBack();
	
	
}
