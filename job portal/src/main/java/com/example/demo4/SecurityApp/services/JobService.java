package com.example.demo4.SecurityApp.services;

import com.example.demo4.SecurityApp.dto.ApplicantDto;
import com.example.demo4.SecurityApp.dto.ApplicationStatus;
import com.example.demo4.SecurityApp.dto.JobDto;
import com.example.demo4.SecurityApp.dto.JobStatus;
import com.example.demo4.SecurityApp.entities.*;
import com.example.demo4.SecurityApp.exceptions.ResourceNotFoundException;
import com.example.demo4.SecurityApp.repositories.ApplicantRepository;
import com.example.demo4.SecurityApp.repositories.JobRepository;
import com.example.demo4.SecurityApp.repositories.SavedJobRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.security.access.AccessDeniedException;


import java.io.File;
import java.io.IOException;
import java.nio.file.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class JobService {
    private final JobRepository jobRepository;
    private final ModelMapper modelMapper;
    private final ApplicantRepository applicantRepository;
    private final SavedJobRepository savedJobRepository;

    public String saveJob(Long jobId, User user) {
        Job job = jobRepository.findById(jobId)
                .orElseThrow(() -> new ResourceNotFoundException("Job not found with ID: " + jobId));

        if (savedJobRepository.existsByUserAndJob(user, job)) {
            throw new IllegalStateException("Job already saved");
        }

        SavedJob savedJob = new SavedJob();
        savedJob.setUser(user);
        savedJob.setJob(job);
        savedJob.setSavedAt(LocalDateTime.now());
        savedJobRepository.save(savedJob);

        return "Job saved successfully";
    }

    public List<JobDto> getSavedJobs(User user) {
        List<SavedJob> savedJobs = savedJobRepository.findByUser(user);
        return savedJobs.stream()
                .map(saved -> mapToJobDto(saved.getJob()))
                .collect(Collectors.toList());
    }

    private JobDto mapToJobDto(Job job) {
        JobDto dto = new JobDto();
        dto.setId(job.getId());
        dto.setJobTitle(job.getJobTitle());
        dto.setCompany(job.getCompany());
        dto.setLocation(job.getLocation());
        dto.setDescription(job.getDescription());
        dto.setExperience(job.getExperience());
        dto.setSkillsRequired(job.getSkillsRequired());
        dto.setJobStatus(job.getJobStatus());
        dto.setPackageOffered(job.getPackageOffered());
        dto.setJobType(job.getJobType());
        dto.setAbout(job.getAbout());
        dto.setPostTime(job.getPostTime());
        // Add other fields if needed
        return dto;
    }


//    public JobDto createJob(JobDto dto) {
//        Job job = modelMapper.map(dto, Job.class);
//        job.setPostTime(LocalDateTime.now());
//        job.setJobStatus(JobStatus.OPEN); // default
//        job.setApplicants(new ArrayList<>()); // initialize empty list
//        Job saved = jobRepository.save(job);
//        return modelMapper.map(saved, JobDto.class);
//    }
public JobDto createJob(JobDto dto, User user) {
    Job job = modelMapper.map(dto, Job.class);
    job.setPostTime(LocalDateTime.now());
    job.setJobStatus(JobStatus.OPEN);
    job.setApplicants(new ArrayList<>());
    job.setPostedBy(user); // associate current user
    Job saved = jobRepository.save(job);
    return modelMapper.map(saved, JobDto.class);
}
    public List<JobDto> getJobsPostedByUser(User user) {
        List<Job> jobs = jobRepository.findByPostedBy(user);
        return jobs.stream()
                .map(job -> modelMapper.map(job, JobDto.class))
                .collect(Collectors.toList());
    }

    public List<ApplicantDto> getApplicantsForJobsPostedByUser(Long userId) {
        List<Applicant> applicants = jobRepository.findAllByJobPostedByUserId(userId);

        return applicants.stream().map(applicant -> {
            ApplicantDto dto = new ApplicantDto();
            dto.setApplicantId(applicant.getApplicantId());
            dto.setUserId(userId);
            dto.setName(applicant.getName());
            dto.setEmail(applicant.getEmail());
            dto.setPhone(applicant.getPhone());
            dto.setWebsite(applicant.getWebsite());
            dto.setResume(applicant.getResume());
            dto.setCoverLetter(applicant.getCoverLetter());
            dto.setTimestamp(applicant.getTimestamp());
            dto.setApplicationStatus(applicant.getApplicationStatus());
            return dto;
        }).collect(Collectors.toList());
    }
//public List<ApplicantDto> getApplicantsForPostedJobs(Long userId) {
//    List<Applicant> applicants = jobRepository.findAllApplicantsForJobsPostedBy(userId);
//    return applicants.stream()
//            .map(applicant -> modelMapper.map(applicant, ApplicantDto.class))
//            .collect(Collectors.toList());
//}



    public JobDto getJobById(Long id) {
        Job job = jobRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Job not found"));
        return modelMapper.map(job, JobDto.class);
    }


    public List<JobDto> getAllJobs() {
        return jobRepository.findAll().stream()
                .map(job -> modelMapper.map(job, JobDto.class))
                .collect(Collectors.toList());
    }



    public String applyToJob(Long jobId, ApplicantDto applicantDto,
                             MultipartFile resumeFile, MultipartFile coverLetterFile) throws IOException {

        Job job = jobRepository.findById(jobId)
                .orElseThrow(() -> new RuntimeException("Job not found with ID: " + jobId));

        if (job.getApplicants() == null) {
            job.setApplicants(new ArrayList<>());
        }

        boolean alreadyApplied = job.getApplicants().stream()
                .anyMatch(a -> a.getEmail().equalsIgnoreCase(applicantDto.getEmail()));

        if (alreadyApplied) {
            throw new RuntimeException("You have already applied for this job.");
        }

        // ✅ Save both files
        String resumeFileName = saveFile(resumeFile, "uploads/resumes/");
        String coverLetterFileName = saveFile(coverLetterFile, "uploads/cover-letters/");

        // ✅ Map DTO to Entity
        Applicant applicant = new Applicant();
        applicant.setName(applicantDto.getName());
        applicant.setUserId(applicantDto.getUserId());
        applicant.setEmail(applicantDto.getEmail());
        applicant.setPhone(applicantDto.getPhone());
        applicant.setWebsite(applicantDto.getWebsite());
        applicant.setTimestamp(LocalDateTime.now());
        applicant.setApplicationStatus(ApplicationStatus.APPLIED);
        applicant.setResume(resumeFileName);
        applicant.setCoverLetter(coverLetterFileName);

        job.getApplicants().add(applicant);
        jobRepository.save(job);

        return "Application submitted successfully.";
    }



//    public String applyToJob(Long jobId, ApplicantDto applicantDto,
//                             MultipartFile resumeFile, MultipartFile coverLetterFile,
//                             User user) throws IOException {
//
//        Job job = jobRepository.findById(jobId)
//                .orElseThrow(() -> new RuntimeException("Job not found with ID: " + jobId));
//
//        if (job.getApplicants() == null) {
//            job.setApplicants(new ArrayList<>());
//        }
//
//        boolean alreadyApplied = job.getApplicants().stream()
//                .anyMatch(a -> a.getEmail().equalsIgnoreCase(applicantDto.getEmail()));
//
//        if (alreadyApplied) {
//            throw new RuntimeException("You have already applied for this job.");
//        }
//
//        // Save files
//        String resumeFileName = saveFile(resumeFile, "uploads/resumes/");
//        String coverLetterFileName = saveFile(coverLetterFile, "uploads/cover-letters/");
//
//        // Map DTO to Entity
//        Applicant applicant = new Applicant();
//        applicant.setName(applicantDto.getName());
//        applicant.setEmail(applicantDto.getEmail());
//        applicant.setPhone(applicantDto.getPhone());
//        applicant.setWebsite(applicantDto.getWebsite());
//        applicant.setTimestamp(LocalDateTime.now());
//        applicant.setApplicationStatus(ApplicationStatus.APPLIED);
//        applicant.setResume(resumeFileName);
//        applicant.setCoverLetter(coverLetterFileName);
//
//        // ✅ Set userId from authenticated user
//        applicant.setUserId(user.getId());
//
//        job.getApplicants().add(applicant);
//        jobRepository.save(job);
//
//        return "Application submitted successfully.";
//    }


    private String saveFile(MultipartFile file, String uploadDir) throws IOException {
        File dir = new File(uploadDir);
        if (!dir.exists()) {
            dir.mkdirs();
        }

        String fileName = UUID.randomUUID() + "_" + file.getOriginalFilename();
        Path path = Paths.get(uploadDir + fileName);
        Files.copy(file.getInputStream(), path, StandardCopyOption.REPLACE_EXISTING);

        return fileName;
    }
//
//    public List<JobDto> getAppliedJobsByEmail(String email) {
//        List<Job> allJobs = jobRepository.findAll();
//
//        List<Job> appliedJobs = allJobs.stream()
//                .filter(job -> job.getApplicants().stream()
//                        .anyMatch(applicant -> applicant.getEmail().equalsIgnoreCase(email)))
//                .collect(Collectors.toList());
//
//        return appliedJobs.stream()
//                .map(job -> modelMapper.map(job, JobDto.class))
//                .collect(Collectors.toList());
//    }

    public List<JobDto> getAppliedJobsByEmail(String email) {
        System.out.println("Searching jobs for applicant email: " + email);

        List<Job> allJobs = jobRepository.findAll();

        List<Job> appliedJobs = allJobs.stream()
                .peek(job -> System.out.println("Checking job: " + job.getJobTitle()))
                .filter(job -> job.getApplicants() != null &&
                        job.getApplicants().stream()
                                .peek(a -> System.out.println("Applicant: " + a.getEmail()))
                                .anyMatch(applicant -> applicant.getEmail().equalsIgnoreCase(email)))
                .collect(Collectors.toList());

        System.out.println("Matched jobs count: " + appliedJobs.size());

        return appliedJobs.stream()
                .map(job -> modelMapper.map(job, JobDto.class))
                .collect(Collectors.toList());
    }

//    public List<JobDto> getAppliedJobsByUserId(Long userId) {
//        List<Job> allJobs = jobRepository.findAll();
//
//        List<Job> appliedJobs = allJobs.stream()
//                .filter(job -> job.getApplicants().stream()
//                        .anyMatch(applicant -> applicant.getUserId() != null && applicant.getUserId().equals(userId)))
//                .collect(Collectors.toList());
//
//        return appliedJobs.stream()
//                .map(job -> modelMapper.map(job, JobDto.class))
//                .collect(Collectors.toList());
//    }




    public List<JobDto> getJobsByStatus(Long userId, ApplicationStatus status) {
        List<Applicant> applicants = applicantRepository.findByUserIdAndApplicationStatus(userId, status);

        List<Long> jobIds = applicants.stream()
                .map(applicant -> applicant.getJob().getId())
                .collect(Collectors.toList());

        List<Job> jobs = jobRepository.findByIdIn(jobIds);

        return jobs.stream()
                .map(job -> modelMapper.map(job, JobDto.class))
                .collect(Collectors.toList());
    }

    public List<JobDto> getJobsByUserAndStatus(Long userId, ApplicationStatus status) {
        List<Job> allJobs = jobRepository.findAll();

        List<Job> filteredJobs = new ArrayList<>();

        for (Job job : allJobs) {
            // Filter applicants for this job by userId and status
            List<Applicant> filteredApplicants = job.getApplicants().stream()
                    .filter(a -> a.getUserId() != null
                            && a.getUserId().equals(userId)
                            && a.getApplicationStatus() == status)
                    .collect(Collectors.toList());

            if (!filteredApplicants.isEmpty()) {
                // Create a new Job object or clone to avoid modifying original entity
                Job jobCopy = new Job();
                BeanUtils.copyProperties(job, jobCopy);

                // Set filtered applicants only
                jobCopy.setApplicants(filteredApplicants);

                filteredJobs.add(jobCopy);
            }
        }

        // Map to DTOs
        return filteredJobs.stream()
                .map(job -> modelMapper.map(job, JobDto.class))
                .collect(Collectors.toList());
    }



    public void saveJobForUser(Long jobId, User user) {
        Job job = jobRepository.findById(jobId)
                .orElseThrow(() -> new ResourceNotFoundException("Job not found"));

        job.getSavedByUsers().add(user);
        jobRepository.save(job);
    }

//    public List<JobDto> getSavedJobs(User user) {
//        List<Job> jobs = jobRepository.findBySavedByUsersContaining(user);
//        return jobs.stream()
//                .map(job -> modelMapper.map(job, JobDto.class))
//                .collect(Collectors.toList());
//    }


    public ApplicantDto updateApplicantStatus(Long applicantId, ApplicationStatus status, LocalDateTime interviewTime, User user) {
        Applicant applicant = applicantRepository.findById(applicantId)
                .orElseThrow(() -> new ResourceNotFoundException("Applicant not found"));


        Job job = applicant.getJob();
        if (!job.getPostedBy().getId().equals(user.getId())) {
            throw new AccessDeniedException("You are not authorized to update this applicant.");
        }

        applicant.setApplicationStatus(status);
        if (status == ApplicationStatus.INTERVIEWING && interviewTime != null) {
            applicant.setScheduledInterviewTime(interviewTime);
        }

        applicantRepository.save(applicant);
        return mapToDto(applicant);
    }
    public ApplicantDto mapToDto(Applicant applicant) {
        ApplicantDto dto = new ApplicantDto();
        dto.setApplicantId(applicant.getApplicantId());
        dto.setUserId(applicant.getUserId());
        dto.setName(applicant.getName());
        dto.setEmail(applicant.getEmail());
        dto.setPhone(applicant.getPhone());
        dto.setWebsite(applicant.getWebsite());
        dto.setResume(applicant.getResume());
        dto.setCoverLetter(applicant.getCoverLetter());
        dto.setTimestamp(applicant.getTimestamp());
        dto.setApplicationStatus(applicant.getApplicationStatus());
        dto.setScheduledInterviewTime(applicant.getScheduledInterviewTime());

        // Optional: set job to null or skip it to avoid circular references
         // or don't include this field if not required

        System.out.println(dto);
        return dto;
    }





    public List<ApplicantDto> getApplicantsByJobId(Long jobId) {
        List<Applicant> applicants = applicantRepository.findByJob_Id(jobId);
        return applicants.stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

}

