package com.ensak.repository;

import java.util.HashSet;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.ensak.model.Role;
import com.ensak.model.User;

public interface UserRepository extends MongoRepository<User, String> {
  Optional<User> findByUsername(String username);
  Optional<User> findByRoles(HashSet<Role> roles);
  
//  @Query("{ 'roles': {'$ref': 'roles', '$id': ?0 } }")
// @Query("{ 'roles':[ {'$ref': 'roles', '$id': { '$oid': ?0 } }] }")
//  Optional<User> findByRolesId(ObjectId objectId);
  Boolean existsByUsername(String username);
  Boolean existsByEmail(String email);
}
