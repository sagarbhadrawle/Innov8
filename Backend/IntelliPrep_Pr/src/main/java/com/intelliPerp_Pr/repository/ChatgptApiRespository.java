package com.intelliPerp_Pr.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.intelliPerp_Pr.model.Chatgpt_api;

public interface ChatgptApiRespository extends JpaRepository<Chatgpt_api, Integer> {
    
    @Query("SELECT o.apikey FROM Chatgpt_api o WHERE o.id = 1")
    public String getApiKey();
    
}
