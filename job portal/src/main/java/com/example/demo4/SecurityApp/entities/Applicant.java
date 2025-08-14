package com.example.demo4.SecurityApp.entities;

import com.example.demo4.SecurityApp.dto.ApplicationStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;


@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Applicant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
    @Column(name = "application_status", length = 20)
    private ApplicationStatus applicationStatus;

    private LocalDateTime scheduledInterviewTime;

    @ManyToOne
    private Job job;
}
