import React from 'react';
import scanner_img from '../../assets/sanjit-qr-scanner.png'; // Replace with actual path
import '../CompanyPayment/CompanyPayment.css';

const CompanyPayment = () => {
  function handlePayment() {
    const upiLink = 'upi://pay?pa=8639620754@hdfcbank&pn=SanjiTechSolutions&cu=INR';
    window.location.href = upiLink; // Redirect to UPI link
  }

  return (
    <section id="company-payment">
      {/* Header */}
      <div className="payment-card-box1">
        <h1 className="payment-box1-heading">
          Make a Payment to Sanjit Tech Solutions Pvt. Ltd.
        </h1>
      </div>

      {/* Subheading */}
      <h2 className="payment-subheading">Scan the QR or Use Our Contact Info</h2>

      {/* Payment Card */}
      <div className="payment-card-box2">
        {/* Left: QR Code - Hidden on small screens */}
        <div className="payment-card-left hide-on-mobile">
          <h3 className="payment-card-left-heading">Scan & Pay</h3>
          <img src={scanner_img} alt="QR Code" className="payment-qr-image" />
        </div>

        {/* Right: Company Info */}
        <div className="payment-card-right">
          <h3 className="payment-card-right-heading">Company Details</h3>
          <p><strong>Name:</strong> Sanjit Tech Solutions Pvt. Ltd.</p>
          <p><strong>Address:</strong> #12, Tech Park Road, Hyderabad, Telangana - 500081</p>
          <p><strong>Email:</strong> info@sanjittechsolutions.in</p>
          <p><strong>Phone:</strong> +91 8639620754</p>

          {/* Mobile/Tablet UPI link */}
          <p className="mobile-upi-id" onClick={handlePayment}>
            <strong>UPI ID:</strong> <span className="upi-link">Make Payment</span>
          </p>
        </div>
      </div>

      {/* Footer Message */}
      <div className="payment-card-box3">
        <div className="payment-card-inner-box3">
          “Empowering digital innovation through every transaction.”
        </div>
      </div>
    </section>
  );
};

export default CompanyPayment;
