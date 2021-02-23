package com.ensak.model;

import java.util.HashSet;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class User {
	@Id
	private String id;

	@NotBlank
	@Size(max = 20)
	private String username;

	@NotBlank
	@Size(max = 20)
	private String nom;

	@NotBlank
	@Size(max = 20)
	private String prenom;

	@DBRef
	private HashSet<Role> roles = new HashSet<Role>();

	@NotBlank
	@Size(max = 50)
	@Email
	private String email;

	@NotBlank
	@Size(max = 120)
	private String password;

	public User(@NotBlank @Size(max = 20) String username, @NotBlank @Size(max = 20) String nom, @NotBlank @Size(max = 20) String prenom,
			@NotBlank @Size(max = 50) @Email String email, @NotBlank @Size(max = 120) String password) {
		super();
		this.username = username;
		this.nom = nom;
		this.prenom = prenom;
		this.email = email;
		this.password = password;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public User() {
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public HashSet<Role> getRoles() {
		return roles;
	}

	public void setRoles(HashSet<Role> roles) {
		this.roles = roles;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

}
