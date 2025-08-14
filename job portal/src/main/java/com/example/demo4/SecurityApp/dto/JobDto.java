package com.example.demo4.SecurityApp.dto;

import com.example.demo4.SecurityApp.entities.User;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
public class JobDto {
    private Long Id;
    private String jobTitle;
    private String Company;
    private List<ApplicantDto> applicants;
    private String about;
    private String experience;
    private String jobType;
    private String Location;
    private Long packageOffered;
    private LocalDateTime postTime;
    private String description;
    private List<String> skillsRequired;
    private JobStatus jobStatus;
    private Set<User> savedByUsers = new HashSet<>();

    private User postedBy;
}
