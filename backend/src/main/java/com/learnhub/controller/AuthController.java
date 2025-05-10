package com.learnhub.controller;

import com.learnhub.dto.LoginRequest;
import com.learnhub.dto.SignupRequest;
import com.learnhub.model.User;
import com.learnhub.repository.UserRepository;
import com.learnhub.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtService jwtService;

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody SignupRequest request) {
        logger.info("Received signup request: {}", request);

        // Validate request
        if (request.getUsername() == null || request.getUsername().trim().isEmpty()) {
            logger.error("Username is empty");
            return ResponseEntity.badRequest().body("Username is required");
        }
        if (request.getEmail() == null || request.getEmail().trim().isEmpty()) {
            logger.error("Email is empty");
            return ResponseEntity.badRequest().body("Email is required");
        }
        if (request.getPassword() == null || request.getPassword().trim().isEmpty()) {
            logger.error("Password is empty");
            return ResponseEntity.badRequest().body("Password is required");
        }

        // Check if username exists
        if (userRepository.existsByUsername(request.getUsername())) {
            logger.error("Username already exists: {}", request.getUsername());
            return ResponseEntity.badRequest().body("Username already exists");
        }

        // Check if email exists
        if (userRepository.existsByEmail(request.getEmail())) {
            logger.error("Email already exists: {}", request.getEmail());
            return ResponseEntity.badRequest().body("Email already exists");
        }

        try {
            // Create new user
            User user = new User();
            user.setUsername(request.getUsername().trim());
            user.setEmail(request.getEmail().trim());
            user.setPassword(passwordEncoder.encode(request.getPassword()));

            logger.info("Saving new user: {}", user.getUsername());
            userRepository.save(user);

            String token = jwtService.generateToken(user.getEmail());
            Map<String, String> response = new HashMap<>();
            response.put("token", token);
            response.put("message", "Registration successful");
            logger.info("User registered successfully: {}", user.getUsername());
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            logger.error("Error during registration: ", e);
            return ResponseEntity.badRequest().body("Error during registration: " + e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        logger.info("Received login request for email: {}", request.getEmail());

        if (request.getEmail() == null || request.getEmail().trim().isEmpty()) {
            logger.error("Email is empty");
            return ResponseEntity.badRequest().body("Email is required");
        }
        if (request.getPassword() == null || request.getPassword().trim().isEmpty()) {
            logger.error("Password is empty");
            return ResponseEntity.badRequest().body("Password is required");
        }

        User user = userRepository.findByEmail(request.getEmail().trim())
                .orElse(null);

        if (user == null || !passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            logger.error("Invalid login attempt for email: {}", request.getEmail());
            return ResponseEntity.badRequest().body("Invalid email or password");
        }

        String token = jwtService.generateToken(user.getEmail());
        Map<String, String> response = new HashMap<>();
        response.put("token", token);
        response.put("message", "Login successful");
        logger.info("User logged in successfully: {}", user.getUsername());
        return ResponseEntity.ok(response);
    }
} 