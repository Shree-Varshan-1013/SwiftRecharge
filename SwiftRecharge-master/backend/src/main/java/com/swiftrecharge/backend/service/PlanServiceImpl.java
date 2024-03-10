package com.swiftrecharge.backend.service;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

import com.swiftrecharge.backend.repository.PlanRepo;
import com.swiftrecharge.backend.entity.Plan;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PlanServiceImpl implements PlanService {

    private final PlanRepo planRepository;

    @Override
    public List<Plan> getAllPlans() {
        return planRepository.findAll();
    }

    @Override
    public Plan getPlanById(Long id) {
        return planRepository.findById(id).orElse(null);
    }

    @Override
    public Plan createPlan(Plan plan) {
        return planRepository.save(plan);
    }

    @Override
    public Plan updatePlan(Long id, Plan plan) {
        plan.setPlanId(id);
        return planRepository.save(plan);
    }

    @Override
    public void deletePlan(Long id) {
        planRepository.deleteById(id);
    }

//     @PostConstruct
    public void initializeDummyData() {
        List<Plan> dummyPlans = Arrays.asList(
                createPlan("Prepaid", "Jio", "Gold Plan", "20 days", "1 GB/day",
                        "Get Free Unlimited Voice Calls + 1 GB/day Data + 100 SMS/Day + Complimentary Subscription to Jio Apps",
                        149),
                createPlan("Prepaid", "Jio", "Platinum Plan", "24 days", "1 GB/day",
                        "Get Free Unlimited Voice Calls + 1 GB/day Data + 100 SMS/Day + Complimentary subscription to Jio Apps.",
                        179),
                createPlan("Prepaid", "Jio", "Youth Plan", "30 days", "30 GB",
                        "Get 30 GB Data for all Customers.", 181),
                createPlan("Prepaid", "Jio", "Unlimited Plan", "23 Days", "1.5 GB/day",
                        "Truly unlimited calls, texts, and data", 199),
                createPlan("Prepaid", "Jio", "Diamond Plan", "28 days", "1.5 GB/day",
                        "Unlimited calls and texts, 12GB data",
                        239),
                createPlan("Prepaid", "Jio", "Titanium Plan", "28 days", "2 GB/day",
                        "Get Free Unlimited Voice Calls + 2 GB/day Data + 100 SMS/Day + Complimentary Subscription to Jio Apps - JioTV, JioCinema",
                        299),
                createPlan("Prepaid", "Jio", "Family Plus Plan", "30 days", "Shared",
                        "Unlimited calls and texts, shared data for family members", 666),
                createPlan("Prepaid", "Jio", "Unlimited Plus Plan", "90 days", "2 GB/day",
                        "Get Free Unlimited Voice Calls + 2 GB/day Data + 100 SMS/Day + Complimentary Subscription to Jio Apps - JioTV, JioCinema (Premium Subscription not included), JioCloud. + Unlimited True 5G Data for eligible subscribers.",
                        749),
                createPlan("Postpaid", "Jio", "Youth Plus Plan", "30 days", "1 GB/day",
                        "Special discount and offers for youth, 5GB data", 150),
                createPlan("Postpaid", "Jio", "Senior Citizen Plan", "30 days", "1.5 GB/day",
                        "Special discount for senior citizens, 1GB data", 299),
                // Airtel
                createPlan("Prepaid", "Airtel", "Silver Plan", "28 days", "2 GB",
                        "Get Truly Unlimited calls + 2 GB Data + 300 SMS + Wynk music.",
                        179),
                createPlan("Prepaid", "Airtel", "Ultimate Plan", "24 days", "1 GB",
                        "Get Truly Unlimited calls + 1 GB Data + 300 SMS + Wynk music.", 155),
                createPlan("Prepaid", "Airtel", "Elite Plan", "28 Days", "1.5 GB/Day",
                        "Get Truly Unlimited calls + 1.5 GB/Day Data + 100 SMS/Day + Apollo 24|7 Circle + Wynk music.",
                        299),
                createPlan("Prepaid", "Airtel", "Power Plan", "84 days", "6 GB",
                        "Get Truly Unlimited calls + 6 GB Data + 900 SMS + Apollo 24|7 Circle + Wynk music.", 455),
                createPlan("Prepaid", "Airtel", "Family Plus Plan", "28 days", "1.5 GB/Day",
                        "Unlimited calls and texts, shared data for family members", 265),
                createPlan("Prepaid", "Airtel", "Unlimited Plus Plan", "84 days", "1.5 GB/Day",
                        "Truly unlimited calls, texts, and data", 719),
                createPlan("Prepaid", "Airtel", "Gold Plan", "1 Month", "2 GB/Day",
                        "Unlimited calls and texts, 4GB data",
                        319),
                createPlan("Postpaid", "Airtel", "Diamond Plan", "30 days", "15GB",
                        "Unlimited calls and texts, 15GB data", 150),
                createPlan("Postpaid", "Airtel", "Corporate Plan", "Unlimited", "Unlimited",
                        "Special corporate offers and services", 360),
                createPlan("Postpaid", "Airtel", "Student Plus Plan", "30 days", "3GB",
                        "Special discount for students, 3GB data", 400));

        planRepository.saveAll(dummyPlans);
    }

    private Plan createPlan(String planType, String operatorName, String planName, String planValidity, String planData,
            String planDetails, double planPrice) {
        Plan plan = new Plan();
        plan.setPlanType(planType);
        plan.setOperatorName(operatorName);
        plan.setPlanData(planData);
        plan.setPlanName(planName);
        plan.setPlanValidity(planValidity);
        plan.setPlanDetails(planDetails);
        plan.setPlanPrice(planPrice);
        return plan;
    }
}
