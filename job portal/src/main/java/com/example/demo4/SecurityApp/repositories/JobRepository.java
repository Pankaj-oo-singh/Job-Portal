package com.example.demo4.SecurityApp.repositories;

import com.example.demo4.SecurityApp.entities.Applicant;
import com.example.demo4.SecurityApp.entities.Job;
import com.example.demo4.SecurityApp.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface JobRepository extends JpaRepository<Job, Long> {
    List<Job> findByIdIn(List<Long> ids);
    List<Job> findBySavedByUsersContaining(User user);
    List<Job> findByPostedBy(User user);
    List<Job> findByPostedBy_Id(Long userId);
    @Query("SELECT a FROM Applicant a WHERE a.job.postedBy.id = :userId")
    List<Applicant> findAllByJobPostedByUserId(@Param("userId") Long userId);


}
