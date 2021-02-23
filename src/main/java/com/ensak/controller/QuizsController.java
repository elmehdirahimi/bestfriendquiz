package com.ensak.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ensak.model.Quizs;
import com.ensak.repository.QuizsInter;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v2")

public class QuizsController {
	@Autowired
	private QuizsInter quizsInter;
	
	
	@GetMapping(value = "/quizs")
	public Map<String, Object> getQuizs() {
		
		List<Quizs> Quizs =  quizsInter.findAll();
		Map<String, Object> responseMap = new HashMap<>();
		responseMap.put("quizs", Quizs);
		responseMap.put("status", 200);
		responseMap.put("message", "Success");
		
		return responseMap;
	}
	
	@GetMapping(value = "/quiz/{id}")
	public Map<String, Object> findQuizs(@PathVariable String id) {
		
		Quizs  Quiz = quizsInter.findById(id);
		Map<String, Object> responseMap = new HashMap<>();
		
		responseMap.put("quiz", Quiz);
		responseMap.put("status", 200);
		responseMap.put("message", "Success");
	    return responseMap;
	}
	

	
	@PostMapping(value = "/quiz")
	public Map<String, Object> saveQuizs(@RequestBody Quizs Quiz) {
		Quizs savedQuiz= quizsInter.save(Quiz);
		Map<String, Object> responseMap = new HashMap<>();
		
		responseMap.put("savedQuiz", savedQuiz);
		responseMap.put("status", 200);
		responseMap.put("message", "Success");
	    return responseMap;
	}
	
	@PutMapping(value = "/quiz")
	public Map<String, Object> updateQuizs(@RequestBody Quizs Quiz) {
		Quizs updatedQuiz = quizsInter.save(Quiz);
		Map<String, Object> responseMap = new HashMap<>();
		responseMap.put("updatedQuiz", updatedQuiz);
		responseMap.put("status", 200);
		responseMap.put("message", "Success");
	    return responseMap;
	}
	
	@DeleteMapping(value = "/quiz/{id}")
	public Map<String, Object> deleteQuizs(@PathVariable String id) {
		
		Map<String, Object> responseMap = new HashMap<>();
		
		try {
			quizsInter.deleteById(id);
			
			responseMap.put("Quiz", true);
			responseMap.put("status", 200);
			responseMap.put("message", "Success");
			
		} catch (Exception e) {
			responseMap.put("Quiz", false);
			responseMap.put("status", 500);
			responseMap.put("message", "Error");
		}
		
		
	    return responseMap;
	}
}
