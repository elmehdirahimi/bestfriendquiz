package com.ensak.model;

public class Chooses {

	private String title_q;
	private String  image_q;
	public Chooses(String title_q, String image_q) {
		super();
		this.title_q = title_q;
		this.image_q = image_q;
	}
	public String getTitle_q() {
		return title_q;
	}
	public void setTitle_q(String title_q) {
		this.title_q = title_q;
	}
	public String getImage_q() {
		return image_q;
	}
	public void setImage_q(String image_q) {
		this.image_q = image_q;
	}
	@Override
	public String toString() {
		return "Chooses [title_q=" + title_q + ", image_q=" + image_q + "]";
	}
	
	
}
