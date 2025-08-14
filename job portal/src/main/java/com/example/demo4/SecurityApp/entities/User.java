package com.example.demo4.SecurityApp.entities;

import com.example.demo4.SecurityApp.entities.enums.Permission;
import com.example.demo4.SecurityApp.entities.enums.Role;
import com.example.demo4.SecurityApp.utils.PermissionMapping;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;



@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    private String name;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "profile_id", referencedColumnName = "id")
    private Profile profile;

    @ElementCollection(fetch = FetchType.EAGER)
    @Enumerated(EnumType.STRING)
    private Set<Role> roles = new HashSet<>();

    // If you also want direct permissions stored in DB
    // Uncomment the following:
     @ElementCollection(fetch = FetchType.EAGER)
     @Enumerated(EnumType.STRING)
     private Set<Permission> permissions = new HashSet<>();
    @Column(name = "otp")
    private String otp;

    @Column(name = "otp_expiry")
    private LocalDateTime otpExpiry;


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Set<SimpleGrantedAuthority> authorities = new HashSet<>();

        if (roles != null) {
            for (Role role : roles) {
                // Add permissions mapped by role
                Set<SimpleGrantedAuthority> rolePermissions = PermissionMapping.getAuthoritiesForRole(role);
                authorities.addAll(rolePermissions);

                // Add role itself as authority
                authorities.add(new SimpleGrantedAuthority("ROLE_" + role.name()));
            }
        }

        // If using direct permissions (optional):
        // if (permissions != null) {
        //     permissions.forEach(p -> authorities.add(new SimpleGrantedAuthority(p.name())));
        // }

        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    // Recommended overrides for account status checks
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}

