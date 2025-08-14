package com.example.demo4.SecurityApp.entities;

import com.example.demo4.SecurityApp.dto.ApplicantDto;
import com.example.demo4.SecurityApp.dto.JobStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity@Data
@AllArgsConstructor
@NoArgsConstructor

public class Job {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    private String jobTitle;
    private String Company;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "job_id")
    private List<Applicant> applicants = new ArrayList<>();
    private String about;
    private String experience;
    private String jobType;
    private String Location;
    private Long packageOffered;
    private LocalDateTime postTime;
    private String description;
    @ElementCollection
    private List<String> skillsRequired;
    private JobStatus jobStatus;
    @ManyToMany
    @JoinTable(
            name = "saved_jobs",
            joinColumns = @JoinColumn(name = "job_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    private Set<User> savedByUsers = new HashSet<>();
    @ManyToOne
    @JoinColumn(name = "posted_by_id")
    private User postedBy;

}
