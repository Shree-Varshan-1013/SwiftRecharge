package com.swiftrecharge.backend.service;

import org.springframework.stereotype.Service;

import com.swiftrecharge.backend.repository.AddonRepo;
import com.swiftrecharge.backend.entity.Addon;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AddonServiceImpl implements AddonService {

    private final AddonRepo addonRepository;

    // @PostConstruct
    public void init() {
        List<Addon> jioAddons = Arrays.asList(
                createAddon("Extra Data", "1GB", 15, "Get 1 GB Data", "Jio"),
                createAddon("Roaming Pack", "1.5GB", 19, "Data for roaming usage", "Jio"),
                createAddon("Social Media Pack", "2GB", 25, "Data for social media apps", "Jio"),
                createAddon("Video Streaming Pack", "2.5GB", 29, "Data for video streaming apps", "Jio"),
                createAddon("Gaming Pack", "6GB", 61, "Data for gaming apps", "Jio"),
                createAddon("Business Pack", "12GB", 121, "Data for business applications", "Jio"),
                createAddon("Night Pack", "10GB", 148, "Unlimited data for nighttime usage", "Jio"),
                createAddon("Weekend Pack", "30GB", 181, "Extra data for weekends", "Jio"),
                createAddon("Music Streaming Pack", "50GB", 301, "Get 50 GB Data for all Customers.", "Jio"),
                createAddon("Family Pack", "40GB", 241, "Get 40 GB Data for all Customers.", "Jio"),
                // Airtel
                createAddon("Extra Data", "1GB", 15, "Additional 2GB data", "Airtel"),
                createAddon("Roaming Pack", "1.5GB", 20, "Data for roaming usage", "Airtel"),
                createAddon("Social Media Pack", "2GB", 25, "Data for social media apps", "Airtel"),
                createAddon("Video Streaming Pack", "2.5GB", 30, "Data for video streaming apps", "Airtel"),
                createAddon("Gaming Pack", "6GB", 70, "Data for gaming apps", "Airtel"),
                createAddon("Business Pack", "12GB", 120, "Data for business applications", "Airtel"),
                createAddon("Night Pack", "10GB", 150, "Unlimited data for nighttime usage", "Airtel"),
                createAddon("Weekend Pack", "30GB", 179, "Extra data for weekends", "Airtel"),
                createAddon("Music Streaming Pack", "50GB", 300, "Data for music streaming apps", "Airtel"),
                createAddon("Family Pack", "50GB", 250, "Shared data for family members", "Airtel"));
        addonRepository.saveAll(jioAddons);
    }

    private Addon createAddon(String addonName, String data, double addonPrice, String addonDetails,
            String operatorName) {
        Addon addon = new Addon();
        addon.setAddonName(addonName);
        addon.setData(data);
        addon.setAddonPrice(addonPrice);
        addon.setAddonDetails(addonDetails);
        addon.setOperatorName(operatorName);
        return addon;
    }

    @Override
    public List<Addon> getAllAddons() {
        return addonRepository.findAll();
    }

    @Override
    public Addon getAddonById(Long id) {
        return addonRepository.findById(id).orElse(null);
    }

    @Override
    public Addon createAddon(Addon addon) {
        return addonRepository.save(addon);
    }

    @Override
    public Addon updateAddon(Long id, Addon addon) {
        addon.setAddonId(id);
        return addonRepository.save(addon);
    }

    @Override
    public void deleteAddon(Long id) {
        addonRepository.deleteById(id);
    }

    @Override
    public List<Addon> getAddOnByOperatorName(String operatorName) {
        return addonRepository.findByOperatorName(operatorName);
    }

    @Override
    public Addon patchUpdateAddon(Long id, Addon updatedAddon) {
        Addon existingAddon = addonRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Addon not found with id: " + id));

        // Update fields if they are not null in the updatedAddon
        if (updatedAddon.getAddonName() != null) {
            existingAddon.setAddonName(updatedAddon.getAddonName());
        }
        if (updatedAddon.getData() != null) {
            existingAddon.setData(updatedAddon.getData());
        }
        if (updatedAddon.getAddonPrice() != 0) {
            existingAddon.setAddonPrice(updatedAddon.getAddonPrice());
        }
        if (updatedAddon.getAddonDetails() != null) {
            existingAddon.setAddonDetails(updatedAddon.getAddonDetails());
        }
        if (updatedAddon.getOperatorName() != null) {
            existingAddon.setOperatorName(updatedAddon.getOperatorName());
        }

        return addonRepository.save(existingAddon);
    }

}
