package com.swiftrecharge.backend.service;

import java.util.List;

import com.swiftrecharge.backend.entity.Payment;

public interface PaymentService {

    List<Payment> getAllPayments();

    Payment getPaymentById(Long id);

    Payment createPayment(Payment payment);

    Payment updatePayment(Long id, Payment payment);

    void deletePayment(Long id);

}
