package com.ensak.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "Allquiz")
public class AllQuiz {
	@Id
	 private String id;
	 private String title;
	 private String image;
	 private List<Quizs> quizs;
	 private String type;
	 
	 
	 
	public AllQuiz(String id, String title, String image, List<Quizs> quizs, String type) {
		super();
		this.id = id;
		this.title = title;
		this.image = image;
		this.quizs = quizs;
		this.type = type;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public List<Quizs> getQuizs() {
		return quizs;
	}
	public void setQuizs(List<Quizs> quizs) {
		this.quizs = quizs;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	@Override
	public String toString() {
		return "AllQuiz [id=" + id + ", title=" + title + ", image=" + image + ", quizs=" + quizs + ", type=" + type
				+ "]";
	}
	 
	
	 
}
