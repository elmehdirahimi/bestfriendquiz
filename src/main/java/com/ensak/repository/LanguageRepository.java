package com.ensak.repository;


import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.ensak.model.LanguageEntity;

public interface LanguageRepository extends MongoRepository<LanguageEntity, Integer> {
	
	@Query("{messagekey:?0, locale:?1 } ")
	LanguageEntity findByKeyAndLocale(String key, String locale);

	public LanguageEntity findById(String id);
	public LanguageEntity deleteById(String id);
	List<LanguageEntity> findByKey(String key);
}
