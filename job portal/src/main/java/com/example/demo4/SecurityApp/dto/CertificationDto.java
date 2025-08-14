package com.example.demo4.SecurityApp.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CertificationDto {


    private String title;
    private String issuer;
    private LocalDateTime issueDate;
    private String certificateId;
}