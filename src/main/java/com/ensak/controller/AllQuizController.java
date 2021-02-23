package com.ensak.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ensak.model.AllQuiz;
import com.ensak.model.Chooses;
import com.ensak.model.LanguageEntity;
import com.ensak.model.Quizs;
import com.ensak.repository.AllquizInter;
import com.ensak.repository.LanguageRepository;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "*", maxAge = 3600)
public class AllQuizController {
	@Autowired
	private AllquizInter allquizInter;
	@Autowired
	private LanguageRepository languageRepository;

	@GetMapping(value = "/allquizs")
	public Map<String, Object> getAllQuiz(@RequestHeader(name="Accept-Language", required=false) Locale locale) {

		String lng = "en";
		if(locale != null)
				lng = locale.getLanguage();
		List<AllQuiz> allQuizs = allquizInter.findByType("main");
		// for (int i = 0; i < allQuizs.size(); i++) {
		// 	LanguageEntity message = languageRepository.findByKeyAndLocale(allQuizs.get(i).getTitle(), lng);

		// 	if (message != null) {
		// 		allQuizs.get(i).setTitle(message.getContent());
		// 	}
		// 	List<Quizs> quizs = allQuizs.get(i).getQuizs();
		// 	for (int j = 0; j < quizs.size(); j++) {
		// 		message = languageRepository.findByKeyAndLocale(quizs.get(j).getTitle_q(), lng);
		// 		if (message != null) {
		// 			quizs.get(j).setTitle_q(message.getContent());
		// 		}
		// 		List<Chooses> chooses = quizs.get(j).getChooses();
		// 		for (int k = 0; k < chooses.size(); k++) {

		// 			message = languageRepository.findByKeyAndLocale(chooses.get(k).getTitle_q(), lng);
		// 			if (message != null) {
		// 				chooses.get(k).setTitle_q(message.getContent());
		// 			}

		// 		}
		// 	}
			
		// }
		Map<String, Object> responseMap = new HashMap<>();
		responseMap.put("allQuizs", allQuizs);
		responseMap.put("status", 200);
		responseMap.put("message", "Success");

		return responseMap;
	}

	@GetMapping(value = "/allquiz/{id}")
	public Map<String, Object> findAllquiz(@PathVariable String id,@RequestHeader(name="Accept-Language", required=false) Locale locale) {

		String lng = "en";
		if(locale != null)
				lng = locale.getLanguage();
		AllQuiz allQuiz = allquizInter.findById(id);
		Map<String, Object> responseMap = new HashMap<>();

		LanguageEntity message = languageRepository.findByKeyAndLocale(allQuiz.getTitle(), lng);

		if (message != null) {
			allQuiz.setTitle(message.getContent());
		}
		List<Quizs> quizs = allQuiz.getQuizs();
		for (int j = 0; j < quizs.size(); j++) {
			message = languageRepository.findByKeyAndLocale(quizs.get(j).getTitle_q(), lng);
			if (message != null) {
				quizs.get(j).setTitle_q(message.getContent());
			}
			List<Chooses> chooses = quizs.get(j).getChooses();
			for (int k = 0; k < chooses.size(); k++) {

				message = languageRepository.findByKeyAndLocale(chooses.get(k).getTitle_q(), lng);
				if (message != null) {
					chooses.get(k).setTitle_q(message.getContent());
				}

			}
		}

		responseMap.put("allQuiz", allQuiz);
		responseMap.put("status", 200);
		responseMap.put("message", "Success");
		return responseMap;
	}

	@PostMapping(value = "/allquiz")
	public Map<String, Object> saveAllQuiz(@RequestBody AllQuiz allQuiz) {
		AllQuiz savedAllQuiz = allquizInter.save(allQuiz);
		Map<String, Object> responseMap = new HashMap<>();

		responseMap.put("savedAllQuiz", savedAllQuiz.getId());
		responseMap.put("status", 200);
		responseMap.put("message", "Success");
		return responseMap;
	}

	@PutMapping(value = "/allquiz")
	public Map<String, Object> updateAllQuiz(@RequestBody AllQuiz allQuiz) {
		AllQuiz updatedAllQuiz = allquizInter.save(allQuiz);
		Map<String, Object> responseMap = new HashMap<>();
		responseMap.put("updatedAllQuiz", updatedAllQuiz);
		responseMap.put("status", 200);
		responseMap.put("message", "Success");
		return responseMap;
	}

	@DeleteMapping(value = "/allquiz/{id}")
	public Map<String, Object> deleteAllQuiz(@PathVariable String id) {

		Map<String, Object> responseMap = new HashMap<>();

		try {
			allquizInter.deleteById(id);

			responseMap.put("allQuiz", true);
			responseMap.put("status", 200);
			responseMap.put("message", "Success");

		} catch (Exception e) {
			responseMap.put("allQuiz", false);
			responseMap.put("status", 500);
			responseMap.put("message", "Error");
		}

		return responseMap;
	}
}
