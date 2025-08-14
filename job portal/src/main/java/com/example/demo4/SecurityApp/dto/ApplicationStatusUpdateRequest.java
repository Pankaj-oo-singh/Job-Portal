package com.example.demo4.SecurityApp.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ApplicationStatusUpdateRequest {
    private ApplicationStatus status;
    private LocalDateTime scheduledInterviewTime;  // nullable if not scheduled
}
