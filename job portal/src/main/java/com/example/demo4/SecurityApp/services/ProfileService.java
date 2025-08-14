package com.example.demo4.SecurityApp.services;

import com.example.demo4.SecurityApp.dto.CertificationDto;
import com.example.demo4.SecurityApp.dto.ExperienceDto;
import com.example.demo4.SecurityApp.dto.ProfileDto;
import com.example.demo4.SecurityApp.entities.Certification;
import com.example.demo4.SecurityApp.entities.Experience;
import com.example.demo4.SecurityApp.entities.Profile;
import com.example.demo4.SecurityApp.entities.User;
import com.example.demo4.SecurityApp.exceptions.ResourceNotFoundException;
import com.example.demo4.SecurityApp.repositories.ProfileRepository;
import com.example.demo4.SecurityApp.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProfileService {
    private final ProfileRepository profileRepository;
    private final UserRepository userRepository;

//    private final ProfileRepository profileRepository;
    private final ModelMapper modelMapper;

    public ProfileDto createProfile(ProfileDto dto, User user) {
        // Check if profile already exists for this user
        if (profileRepository.existsByEmail(user.getEmail())) {
            throw new IllegalStateException("Profile already exists for this user.");
        }

        // Create and populate Profile entity
        Profile profile = new Profile();
        profile.setEmail(user.getEmail());
        profile.setJobTitle(dto.getJobTitle());
        profile.setCompany(dto.getCompany());
        profile.setLocation(dto.getLocation());
        profile.setAbout(dto.getAbout());
        profile.setSkills(dto.getSkills());

        // Map and attach experiences
        if (dto.getExperiences() != null) {
            List<Experience> experienceList = dto.getExperiences().stream().map(expDto -> {
                Experience experience = new Experience();
                experience.setTitle(expDto.getTitle());
                experience.setCompany(expDto.getCompany());
                experience.setLocation(expDto.getLocation());
                experience.setStartDate(expDto.getStartDate());
                experience.setEndDate(expDto.getEndDate());
                experience.setWorking(expDto.getWorking());
                experience.setDescription(expDto.getDescription());
                experience.setProfile(profile);
                return experience;
            }).collect(Collectors.toList());

            profile.setExperiences(experienceList);
        }

        // Map and attach certifications
        if (dto.getCertifications() != null) {
            List<Certification> certificationList = dto.getCertifications().stream().map(certDto -> {
                Certification certification = new Certification();
                certification.setTitle(certDto.getTitle());
                certification.setIssuer(certDto.getIssuer());
                // Convert LocalDateTime to LocalDate if needed
                certification.setIssueDate(certDto.getIssueDate().toLocalDate());
                certification.setCertificateId(certDto.getCertificateId());
                certification.setProfile(profile);
                return certification;
            }).collect(Collectors.toList());

            profile.setCertifications(certificationList);
        }

        // Save profile (cascade will save experiences & certifications)
        Profile savedProfile = profileRepository.save(profile);

        // Map to DTO and return
        return mapToDto(savedProfile);
    }

    private ProfileDto mapToDto(Profile profile) {
        ProfileDto dto = new ProfileDto();
        dto.setId(profile.getId());
        dto.setEmail(profile.getEmail());
        dto.setJobTitle(profile.getJobTitle());
        dto.setCompany(profile.getCompany());
        dto.setLocation(profile.getLocation());
        dto.setAbout(profile.getAbout());
        dto.setSkills(profile.getSkills());

        // Add this line to include profile image filename in DTO
        dto.setProfileImage(profile.getProfileImage());

        List<ExperienceDto> experienceDtos = profile.getExperiences().stream().map(exp -> {
            return new ExperienceDto(
                    exp.getTitle(),
                    exp.getCompany(),
                    exp.getLocation(),
                    exp.getStartDate(),
                    exp.getEndDate(),
                    exp.getWorking(),
                    exp.getDescription()
            );
        }).collect(Collectors.toList());

        List<CertificationDto> certificationDtos = profile.getCertifications().stream().map(cert -> {
            return new CertificationDto(
                    cert.getTitle(),
                    cert.getIssuer(),
                    cert.getIssueDate().atStartOfDay(),
                    cert.getCertificateId()
            );
        }).collect(Collectors.toList());

        dto.setExperiences(experienceDtos);
        dto.setCertifications(certificationDtos);

        return dto;
    }


//    // ✅ Update profile (only if user owns it)
//    public ProfileDto updateProfile(ProfileDto dto, User user) {
//        Profile profile = profileRepository.findByEmail(user.getEmail())
//                .orElseThrow(() -> new ResourceNotFoundException("Profile not found for user with email: " + user.getEmail()));
//
//        // Update scalar fields
//        profile.setJobTitle(dto.getJobTitle());
//        profile.setCompany(dto.getCompany());
//        profile.setLocation(dto.getLocation());
//        profile.setAbout(dto.getAbout());
//        profile.setSkills(dto.getSkills());
//
//        // Clear and map experiences
//        profile.getExperiences().clear();
//        if (dto.getExperiences() != null) {
//            List<Experience> experiences = dto.getExperiences().stream()
//                    .map(expDto -> {
//                        Experience experience = modelMapper.map(expDto, Experience.class);
//                        experience.setProfile(profile); // set foreign key
//                        return experience;
//                    })
//                    .collect(Collectors.toList());
//            profile.getExperiences().addAll(experiences);
//        }
//
//        // Clear and map certifications
//        profile.getCertifications().clear();
//        if (dto.getCertifications() != null) {
//            List<Certification> certifications = dto.getCertifications().stream()
//                    .map(certDto -> {
//                        Certification certification = modelMapper.map(certDto, Certification.class);
//                        certification.setIssueDate(certDto.getIssueDate().toLocalDate());
//                        certification.setProfile(profile); // set foreign key
//                        return certification;
//                    })
//                    .collect(Collectors.toList());
//            profile.getCertifications().addAll(certifications);
//        }
//
//        Profile updated = profileRepository.save(profile);
//        return modelMapper.map(updated, ProfileDto.class);
//    }

    public ProfileDto updateProfile(ProfileDto dto, User user) {
        Profile profile = profileRepository.findByEmail(user.getEmail())
                .orElseThrow(() -> new ResourceNotFoundException("Profile not found for email: " + user.getEmail()));

        // Update basic fields
        profile.setJobTitle(dto.getJobTitle());
        profile.setCompany(dto.getCompany());
        profile.setLocation(dto.getLocation());
        profile.setAbout(dto.getAbout());
        profile.setSkills(dto.getSkills());

        // Clear existing experiences and add from dto
        profile.getExperiences().clear();
        if (dto.getExperiences() != null) {
            List<Experience> experienceList = dto.getExperiences().stream().map(expDto -> {
                Experience exp = new Experience();
                exp.setTitle(expDto.getTitle());
                exp.setCompany(expDto.getCompany());
                exp.setLocation(expDto.getLocation());
                exp.setStartDate(expDto.getStartDate());
                exp.setEndDate(expDto.getEndDate());
                exp.setWorking(expDto.getWorking());
                exp.setDescription(expDto.getDescription());
                exp.setProfile(profile); // set relation
                return exp;
            }).collect(Collectors.toList());
            profile.getExperiences().addAll(experienceList);
        }

        // Clear existing certifications and add from dto
        profile.getCertifications().clear();
        if (dto.getCertifications() != null) {
            List<Certification> certificationList = dto.getCertifications().stream().map(certDto -> {
                Certification cert = new Certification();
                cert.setTitle(certDto.getTitle());
                cert.setIssuer(certDto.getIssuer());
                // Convert LocalDateTime to LocalDate
                cert.setIssueDate(certDto.getIssueDate() != null ? certDto.getIssueDate().toLocalDate() : null);
                cert.setCertificateId(certDto.getCertificateId());
                cert.setProfile(profile); // set relation
                return cert;
            }).collect(Collectors.toList());
            profile.getCertifications().addAll(certificationList);
        }

        Profile updatedProfile = profileRepository.save(profile);

        // Map updated entity back to DTO manually
        return mapToDto(updatedProfile);
    }

//    private ProfileDto mapToDto(Profile profile) {
//        ProfileDto dto = new ProfileDto();
//        dto.setId(profile.getId());
//        dto.setEmail(profile.getEmail());
//        dto.setJobTitle(profile.getJobTitle());
//        dto.setCompany(profile.getCompany());
//        dto.setLocation(profile.getLocation());
//        dto.setAbout(profile.getAbout());
//        dto.setSkills(profile.getSkills());
//
//        List<ExperienceDto> expDtos = profile.getExperiences().stream().map(exp -> {
//            ExperienceDto expDto = new ExperienceDto();
//            expDto.setTitle(exp.getTitle());
//            expDto.setCompany(exp.getCompany());
//            expDto.setLocation(exp.getLocation());
//            expDto.setStartDate(exp.getStartDate());
//            expDto.setEndDate(exp.getEndDate());
//            expDto.setWorking(exp.getWorking());
//            expDto.setDescription(exp.getDescription());
//            return expDto;
//        }).collect(Collectors.toList());
//        dto.setExperiences(expDtos);
//
//        List<CertificationDto> certDtos = profile.getCertifications().stream().map(cert -> {
//            CertificationDto certDto = new CertificationDto();
//            certDto.setTitle(cert.getTitle());
//            certDto.setIssuer(cert.getIssuer());
//            certDto.setIssueDate(cert.getIssueDate() != null ? cert.getIssueDate().atStartOfDay() : null);
//            certDto.setCertificateId(cert.getCertificateId());
//            return certDto;
//        }).collect(Collectors.toList());
//        dto.setCertifications(certDtos);
//
//        return dto;
//    }


    // ✅ Get profile of current user
    public ProfileDto getMyProfile(User user) {
        Profile profile = profileRepository.findByEmail(user.getEmail())
                .orElseThrow(() -> new ResourceNotFoundException("Profile not found for email: " + user.getEmail()));

        return mapToDto(profile);
    }
//    public Profile getByUser(User user) {
//        return profileRepository.findByEmail(user.getEmail())
//                .orElseThrow(() -> new ResourceNotFoundException("Profile not found for user"));
//    }

    public Profile save(Profile profile) {
        return profileRepository.save(profile);
    }
    public String uploadProfileImage(MultipartFile file, User user) {
        try {
            Profile profile = getByUser(user); // get profile linked to the user

            // Directory where files will be stored
            String uploadsDir = "uploads/profile-photos/";
            Path uploadPath = Paths.get(uploadsDir);

            // Create directory if not exist
            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }

            // Create unique filename
            String filename = UUID.randomUUID() + "-" + file.getOriginalFilename();
            Path filePath = uploadPath.resolve(filename);

            // Save file to disk
            Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

            // Save filename to profile
            profile.setProfileImage(filename);
            profileRepository.save(profile);

            return filename;
        } catch (IOException e) {
            throw new RuntimeException("Failed to upload image", e);
        }
    }



    public Profile getByUser(User user) {
        return profileRepository.findByEmail(user.getEmail())
                .orElseThrow(() -> new RuntimeException("Profile not found"));
    }




    public List<ProfileDto> getAllProfiles() {
        List<Profile> profiles = profileRepository.findAll();
        return profiles.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    private ProfileDto convertToDto(Profile profile) {
        ProfileDto dto = modelMapper.map(profile, ProfileDto.class);

        // Manually mapping nested objects if ModelMapper isn't configured to handle relationships:
        dto.setExperiences(
                profile.getExperiences().stream()
                        .map(exp -> modelMapper.map(exp, ExperienceDto.class))
                        .collect(Collectors.toList())
        );

        dto.setCertifications(
                profile.getCertifications().stream()
                        .map(cert -> modelMapper.map(cert, CertificationDto.class))
                        .collect(Collectors.toList())
        );

        return dto;
    }
}
