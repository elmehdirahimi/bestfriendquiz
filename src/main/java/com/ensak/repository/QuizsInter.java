package com.ensak.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.ensak.model.Quizs;

public interface QuizsInter extends MongoRepository<Quizs, Long> {
	public Quizs findById(String id);
	public Quizs deleteById(String id);
}
