package com.ensak.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.ensak.model.ERole;
import com.ensak.model.Role;

public interface RoleRepository extends MongoRepository<Role, String> {
  Optional<Role> findByName(ERole name);
}
