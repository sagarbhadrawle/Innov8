package com.intelliPerp_Pr.model;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class QuestionAnswers {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer questionAnswerId;
	private String question;
	
	@Column(columnDefinition = "TEXT")
	private String answer;
}
