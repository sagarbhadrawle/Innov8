package com.intelliPerp_Pr.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;

import com.intelliPerp_Pr.model.Chatgpt_api;
import com.intelliPerp_Pr.repository.ChatgptApiRespository;

@Service
public class DataInitializationService implements CommandLineRunner {

	private final ChatgptApiRespository chatgptApiRepository;

    @Autowired
    public DataInitializationService(ChatgptApiRespository chatgptApiRepository) {
        this.chatgptApiRepository = chatgptApiRepository;
    }
	
	
    private void initializeData() {

        if (chatgptApiRepository.count() == 0) {
            // Insert default data
            Chatgpt_api chatgptApi = new Chatgpt_api();
            chatgptApi.setApikey("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");
            chatgptApiRepository.save(chatgptApi);
        }
    }


	@Override
	public void run(String... args) throws Exception {
		   initializeData();
		
	}

}
