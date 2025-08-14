package com.example.demo4.SecurityApp.repositories;

import com.example.demo4.SecurityApp.entities.Profile;
import com.example.demo4.SecurityApp.entities.Session;
import com.example.demo4.SecurityApp.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProfileRepository extends JpaRepository<Profile, Long> {
    boolean existsByEmail(String email);
    Optional<Profile> findByEmail(String email);

}
