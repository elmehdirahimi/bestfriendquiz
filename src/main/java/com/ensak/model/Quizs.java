package com.ensak.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Quizs")
public class Quizs {
	@Id
	private String id;
	
	private String title_q;
	private List<Chooses> chooses;
	private int trueChoose;
	private int type;
	
	
	
	public Quizs(String id, String title_q, List<Chooses> chooses, int trueChoose, int type) {
		super();
		this.id = id;
		this.title_q = title_q;
		this.chooses = chooses;
		this.trueChoose = trueChoose;
		this.type = type;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getTitle_q() {
		return title_q;
	}
	public void setTitle_q(String title_q) {
		this.title_q = title_q;
	}
	public List<Chooses> getChooses() {
		return chooses;
	}
	public void setChooses(List<Chooses> chooses) {
		this.chooses = chooses;
	}
	public int getTrueChoose() {
		return trueChoose;
	}
	public void setTrueChoose(int trueChoose) {
		this.trueChoose = trueChoose;
	}
	public int getType() {
		return type;
	}
	public void setType(int type) {
		this.type = type;
	}
	@Override
	public String toString() {
		return "Quizs [id=" + id + ", title_q=" + title_q + ", chooses=" + chooses + ", trueChoose=" + trueChoose
				+ ", type=" + type + "]";
	}
	

	
	
}
