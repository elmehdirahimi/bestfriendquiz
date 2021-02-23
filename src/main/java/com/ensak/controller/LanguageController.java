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

import com.ensak.model.LanguageEntity;
import com.ensak.repository.LanguageRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v3")

public class LanguageController {

	@Autowired
	private LanguageRepository languageRepository;
	
	
	@GetMapping(value = "/languages")
	public Map<String, Object> getLanguages() {
		
		List<LanguageEntity> languages =  languageRepository.findAll();
		Map<String, Object> responseMap = new HashMap<>();
		responseMap.put("languages", languages);
		responseMap.put("status", 200);
		responseMap.put("message", "Success");
		
		return responseMap;
	}
	
	
	@GetMapping(value = "/language/{id}")
	public Map<String, Object> findQuizs(@PathVariable String id) {
		
		LanguageEntity  languageEntity = languageRepository.findById(id);
		Map<String, Object> responseMap = new HashMap<>();
		
		responseMap.put("quiz", languageEntity);
		responseMap.put("status", 200);
		responseMap.put("message", "Success");
	    return responseMap;
	}
	

	
	@PostMapping(value = "/language")
	public Map<String, Object> saveQuizs(@RequestBody LanguageEntity languageEntity) {
		LanguageEntity savedLanguageEntity = languageRepository.save(languageEntity);
		Map<String, Object> responseMap = new HashMap<>();
		
		responseMap.put("savedLanguageEntity", savedLanguageEntity);
		responseMap.put("status", 200);
		responseMap.put("message", "Success");
	    return responseMap;
	}
	
	@PutMapping(value = "/quiz")
	public Map<String, Object> updateQuizs(@RequestBody LanguageEntity languageEntity) {
		LanguageEntity savedLanguageEntity = languageRepository.save(languageEntity);
		Map<String, Object> responseMap = new HashMap<>();
		
		responseMap.put("savedLanguageEntity", savedLanguageEntity);
		responseMap.put("status", 200);
		responseMap.put("message", "Success");
	    return responseMap;
	}
	
	@DeleteMapping(value = "/quiz/{id}")
	public Map<String, Object> deleteQuizs(@PathVariable String id) {
		
		Map<String, Object> responseMap = new HashMap<>();
		
		try {
			languageRepository.deleteById(id);
			
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
