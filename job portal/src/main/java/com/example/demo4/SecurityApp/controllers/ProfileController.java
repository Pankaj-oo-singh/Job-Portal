package com.example.demo4.SecurityApp.controllers;


import com.example.demo4.SecurityApp.dto.ProfileDto;
import com.example.demo4.SecurityApp.entities.Profile;
import com.example.demo4.SecurityApp.entities.User;
import com.example.demo4.SecurityApp.services.ProfileService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/profile")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class ProfileController {

    private final ProfileService profileService;

    @PostMapping("/user")
    public ResponseEntity<ProfileDto> createProfile(@RequestBody ProfileDto dto, @AuthenticationPrincipal User user) {
        return ResponseEntity.ok(profileService.createProfile(dto, user));
    }


    // ✅ Update profile
    @PutMapping
    public ResponseEntity<ProfileDto> updateProfile(@RequestBody ProfileDto dto,
                                                    @AuthenticationPrincipal User user) {
        ProfileDto updated = profileService.updateProfile(dto, user);
        return ResponseEntity.ok(updated);
    }

    // ✅ Get my profile
    @GetMapping("/me")
    public ResponseEntity<ProfileDto> getMyProfile(@AuthenticationPrincipal User user) {
        ProfileDto profile = profileService.getMyProfile(user);
        return ResponseEntity.ok(profile);
    }


    @PostMapping("/upload-photo")
    public ResponseEntity<String> uploadProfilePhoto(@RequestParam("file") MultipartFile file,
                                                     @AuthenticationPrincipal User user) throws IOException {
        String filename = profileService.uploadProfileImage(file, user);
        return ResponseEntity.ok(filename);
    }

//    @GetMapping("allProfile")
//    public ResponseEntity<List<ProfileDto>> getAllProfile(){
//        List<ProfileDto> ListProfileDto=profileService.getAllProfile();
//        return ResponseEntity.ok(ListProfileDto);
//
//    }
@GetMapping("/allProfile")
public ResponseEntity<List<ProfileDto>> getAllProfiles() {
    List<ProfileDto> profiles = profileService.getAllProfiles();
    return ResponseEntity.ok(profiles);
}





}
