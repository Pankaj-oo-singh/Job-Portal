package com.example.demo4.SecurityApp.repositories;

import com.example.demo4.SecurityApp.entities.Job;
import com.example.demo4.SecurityApp.entities.SavedJob;
import com.example.demo4.SecurityApp.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SavedJobRepository extends JpaRepository<SavedJob, Long> {
    List<SavedJob> findByUser(User user);
    boolean existsByUserAndJob(User user, Job job);
}