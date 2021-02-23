package com.ensak.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.ensak.model.AllQuiz;

public interface AllquizInter extends MongoRepository<AllQuiz, Long> {
	public AllQuiz findById(String id);
	public List<AllQuiz> findByType(String type);
	public AllQuiz deleteById(String id);
}
