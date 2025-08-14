package com.example.demo4.SecurityApp.entities;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Experience {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String company;
    private String location;
    private LocalDate startDate;
    private LocalDate endDate;
    private Boolean working;
    private String description;

    @ManyToOne
    @JoinColumn(name = "profile_id")
    private Profile profile;
}
