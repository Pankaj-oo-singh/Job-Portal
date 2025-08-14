package com.example.demo4.SecurityApp.services;

import com.example.demo4.SecurityApp.dto.LoginDto;
import com.example.demo4.SecurityApp.dto.SignUpDto;
import com.example.demo4.SecurityApp.dto.UserDto;
import com.example.demo4.SecurityApp.entities.Profile;
import com.example.demo4.SecurityApp.entities.User;
import com.example.demo4.SecurityApp.entities.enums.Role;
import com.example.demo4.SecurityApp.exceptions.ResourceNotFoundException;
import com.example.demo4.SecurityApp.repositories.ProfileRepository;
import com.example.demo4.SecurityApp.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.Random;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;
    private final ModelMapper modelMapper;
    private final PasswordEncoder passwordEncoder;
    private final EmailService emailService;

    private final ProfileRepository profileRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByEmail(username)
                .orElseThrow(() -> new BadCredentialsException("User with email "+ username +" not found"));
    }

    public User getUserById(Long userId) {
        return userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User with id "+ userId +
                " not found"));
    }

    public User getUsrByEmail(String email) {
        return userRepository.findByEmail(email).orElse(null);
    }


//    public UserDto signUp(SignUpDto signUpDto) {
//        Optional<User> user = userRepository.findByEmail(signUpDto.getEmail());
//        if(user.isPresent()) {
//            throw new BadCredentialsException("User with email already exits "+ signUpDto.getEmail());
//        }
//
//        User toBeCreatedUser = modelMapper.map(signUpDto, User.class);
//        toBeCreatedUser.setPassword(passwordEncoder.encode(toBeCreatedUser.getPassword()));
//
//        User savedUser = userRepository.save(toBeCreatedUser);
//        return modelMapper.map(savedUser, UserDto.class);
//    }

    public User save(User newUser) {
        return userRepository.save(newUser);
    }


    public void sendOtpToEmail(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        String otp = String.valueOf(new Random().nextInt(900000) + 100000);
        user.setOtp(otp);
        user.setOtpExpiry(LocalDateTime.now().plusMinutes(10));
        userRepository.save(user);

        emailService.sendOtpEmail(user.getEmail(), otp);
    }

    public void verifyOtpAndResetPassword(String email, String otp, String newPassword) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (user.getOtp() == null || !user.getOtp().equals(otp)) {
            throw new RuntimeException("Invalid OTP");
        }

        if (user.getOtpExpiry().isBefore(LocalDateTime.now())) {
            throw new RuntimeException("OTP expired");
        }

        user.setPassword(passwordEncoder.encode(newPassword));
        user.setOtp(null);
        user.setOtpExpiry(null);
        userRepository.save(user);
    }
    public UserDto signUp(SignUpDto dto) {
        if (userRepository.existsByEmail(dto.getEmail())) {
            throw new RuntimeException("Email already registered");
        }

        // Create empty profile
        Profile profile = new Profile();
        profile.setEmail(dto.getEmail());

        // Create user
        User user = new User();
        user.setEmail(dto.getEmail());
        user.setPassword(passwordEncoder.encode(dto.getPassword()));
        user.setName(dto.getName());
        user.setRoles(Set.of(Role.USER));
        user.setProfile(profile); // ✅ Attach profile

        user = userRepository.save(user);

        UserDto userDto = modelMapper.map(user, UserDto.class);
        userDto.setProfileId(user.getProfile().getId());
        return userDto;
    }


}






















