package com.example.demo4.SecurityApp.controllers;

import com.example.demo4.SecurityApp.dto.PostDTO;
import com.example.demo4.SecurityApp.services.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/posts")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class PostController {

    private final PostService postService;

    @GetMapping
    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    public List<PostDTO> getAllPosts() {
        return postService.getAllPosts();
    }

    @GetMapping("/{postId}")
    @PreAuthorize("@postSecurity.isOwnerOfPost(#postId)")
    public PostDTO getPostById(@PathVariable Long postId) {
        return postService.getPostById(postId);
    }

    @PostMapping
    public PostDTO createNewPost(@RequestBody PostDTO inputPost) {
        return postService.createNewPost(inputPost);
    }

}
