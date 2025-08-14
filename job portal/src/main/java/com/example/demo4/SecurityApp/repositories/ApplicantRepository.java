package com.example.demo4.SecurityApp.repositories;

import com.example.demo4.SecurityApp.dto.ApplicantDto;
import com.example.demo4.SecurityApp.dto.ApplicationStatus;
import com.example.demo4.SecurityApp.entities.Applicant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ApplicantRepository extends JpaRepository<Applicant, Long> {
    List<Applicant> findByUserIdAndApplicationStatus(Long userId, ApplicationStatus applicationStatus);
    List<Applicant> findByJob_Id(Long jobId);
}
