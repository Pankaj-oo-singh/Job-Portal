package com.example.demo4.SecurityApp.dto;

import com.example.demo4.SecurityApp.entities.Job;
import jakarta.persistence.Embeddable;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Data;

import java.time.LocalDateTime;


@Data
public class ApplicantDto {
    private Long applicantId;
    private Long userId;
    private String name;
    private String email;
    private Long phone;
    private String website;
    private String resume;
    private String coverLetter;
    private LocalDateTime timestamp;
    @Enumerated(EnumType.STRING)
    private ApplicationStatus applicationStatus;
    private LocalDateTime scheduledInterviewTime;




}
