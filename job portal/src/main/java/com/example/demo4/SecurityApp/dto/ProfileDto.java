package com.example.demo4.SecurityApp.dto;

import com.example.demo4.SecurityApp.entities.Experience;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProfileDto {

    private Long id;
    private String email;
    private String JobTitle;
    private String company;
    private String location;
    private String about;

    private String profileImage;
    private List<String> skills;
    private List<ExperienceDto> experiences;
    private List<CertificationDto> certifications;


}
