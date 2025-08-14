package com.example.demo4.SecurityApp.controllers;

import com.example.demo4.SecurityApp.dto.ApplicantDto;
import com.example.demo4.SecurityApp.dto.ApplicationStatus;
import com.example.demo4.SecurityApp.dto.ApplicationStatusUpdateRequest;
import com.example.demo4.SecurityApp.dto.JobDto;
import com.example.demo4.SecurityApp.entities.User;
import com.example.demo4.SecurityApp.services.JobService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/job")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class JobController {
    private final JobService jobService;

//    @PostMapping("/post")
//    public ResponseEntity<JobDto> postJob(@RequestBody JobDto jobDto) {
//        JobDto createdJob = jobService.createJob(jobDto);
//        return ResponseEntity.status(HttpStatus.CREATED).body(createdJob);
//    }

    @PostMapping("/post")
    public ResponseEntity<JobDto> postJob(@RequestBody JobDto jobDto, @AuthenticationPrincipal User user) {
        JobDto createdJob = jobService.createJob(jobDto, user);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdJob);
    }

    @GetMapping("/posted")
    public ResponseEntity<List<JobDto>> getPostedJobs(@AuthenticationPrincipal User user) {
        List<JobDto> postedJobs = jobService.getJobsPostedByUser(user);
        return ResponseEntity.ok(postedJobs);
    }

    @GetMapping("/posted-jobs/applicants")
    public ResponseEntity<List<ApplicantDto>> getApplicantsForMyPostedJobs(@AuthenticationPrincipal User user) {
        List<ApplicantDto> applicants = jobService.getApplicantsForJobsPostedByUser(user.getId());
        return ResponseEntity.ok(applicants);
    }


    @GetMapping("/{id}")
    public ResponseEntity<JobDto> getJobById(@PathVariable Long id) {
        JobDto job = jobService.getJobById(id);
        return ResponseEntity.ok(job);
    }

    @GetMapping("/all")
    public ResponseEntity<List<JobDto>> getAllJobs() {
        return ResponseEntity.ok(jobService.getAllJobs());
    }

//    @PostMapping("/apply/{jobId}")
//    public ResponseEntity<String> applyToJob(
//            @PathVariable Long jobId,
//            @RequestBody ApplicantDto applicantDto
//    ) {
//        String result = jobService.applyToJob(jobId, applicantDto);
//        return ResponseEntity.ok(result);
//    }

    @PostMapping(value = "/apply/{jobId}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> applyToJob(
            @PathVariable Long jobId,
            @RequestPart("applicant") ApplicantDto applicantDto,
            @RequestPart("resume") MultipartFile resumeFile,
            @RequestPart("coverLetterFile") MultipartFile coverLetterFile
    ) {
        try {
            String response = jobService.applyToJob(jobId, applicantDto, resumeFile, coverLetterFile);
            return ResponseEntity.ok(response);
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
        }
    }


//    @PostMapping(value = "/apply/{jobId}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
//    public ResponseEntity<String> applyToJob(
//            @PathVariable Long jobId,
//            @RequestPart("applicant") ApplicantDto applicantDto,
//            @RequestPart("resume") MultipartFile resumeFile,
//            @RequestPart("coverLetterFile") MultipartFile coverLetterFile,
//            @AuthenticationPrincipal User user // ✅ Get authenticated user
//    ) {
//        try {
//            String response = jobService.applyToJob(jobId, applicantDto, resumeFile, coverLetterFile, user);
//            return ResponseEntity.ok(response);
//        } catch (Exception ex) {
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
//        }
//    }


    @GetMapping("/applied")
    public ResponseEntity<List<JobDto>> getAppliedJobs(@AuthenticationPrincipal User user) {
        return ResponseEntity.ok(jobService.getAppliedJobsByEmail(user.getEmail()));
    }
//@GetMapping("/applied")
//public ResponseEntity<List<JobDto>> getAppliedJobs(@AuthenticationPrincipal User user) {
//    return ResponseEntity.ok(jobService.getAppliedJobsByUserId(user.getId()));
//}


    @GetMapping("/status/{status}")
    public ResponseEntity<List<JobDto>> getJobsByStatus(
            @AuthenticationPrincipal User user,
            @PathVariable ApplicationStatus status) {

        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        List<JobDto> jobs = jobService.getJobsByUserAndStatus(user.getId(), status);
        return ResponseEntity.ok(jobs);
    }

    @PostMapping("/save/{jobId}")
    public ResponseEntity<String> saveJob(@PathVariable Long jobId, @AuthenticationPrincipal User user) {
        String result = jobService.saveJob(jobId, user);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/saved")
    public ResponseEntity<List<JobDto>> getSavedJobs(@AuthenticationPrincipal User user) {
        List<JobDto> savedJobs = jobService.getSavedJobs(user);
        return ResponseEntity.ok(savedJobs);
    }

    @PutMapping("/applicant/{id}/status")
    public ResponseEntity<ApplicantDto> updateApplicationStatus(
            @PathVariable Long id,
            @RequestBody ApplicationStatusUpdateRequest request,
            @AuthenticationPrincipal User user) {

        ApplicantDto updatedDto = jobService.updateApplicantStatus(id, request.getStatus(), request.getScheduledInterviewTime(), user);
        return ResponseEntity.ok(updatedDto);
    }

    @GetMapping("/{jobId}/applicants")
    public ResponseEntity<List<ApplicantDto>> getApplicantsForJob(@PathVariable Long jobId) {
        List<ApplicantDto> applicants = jobService.getApplicantsByJobId(jobId);
        return ResponseEntity.ok(applicants);
    }




}