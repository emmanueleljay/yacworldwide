// Web3Forms API integration for sending emails
// Access key should be set via environment or provided directly

const WEB3FORMS_API_URL = "https://api.web3forms.com/submit";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface MembershipFormData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  occupation: string;
  affiliation: string;
  address: string;
  phone: string;
  email: string;
  membershipCategory: string;
  introducerName: string;
  introducerPhone: string;
  introducerEmail: string;
  supporterName: string;
  supporterPhone: string;
  supporterEmail: string;
}

// Web3Forms access key - this is a PUBLIC access key (not secret), safe to include in client-side code
// Get your free access key from https://web3forms.com/ - just enter your email and they'll send you the key
// IMPORTANT: Replace the placeholder below with your actual access key
const WEB3FORMS_ACCESS_KEY = "c6ed8f0e-5d61-494a-ba06-7cb1d0a6efff"; // Example format - replace with your key

const getAccessKey = (): string => {
  return WEB3FORMS_ACCESS_KEY;
};

export const submitContactForm = async (data: ContactFormData): Promise<{ success: boolean; message: string }> => {
  const accessKey = getAccessKey();
  
  if (!accessKey) {
    throw new Error("Web3Forms access key not configured");
  }

  try {
    // Send notification to organization
    const orgResponse = await fetch(WEB3FORMS_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New Contact Form Submission: ${data.subject}`,
        from_name: "YAC Website Contact Form",
        to: "info@yacworldwide.org",
        name: data.name,
        email: data.email,
        message: data.message,
        // Customize the email template
        botcheck: false,
      }),
    });

    const orgResult = await orgResponse.json();

    if (!orgResult.success) {
      throw new Error(orgResult.message || "Failed to send message");
    }

    // Send confirmation to user
    await fetch(WEB3FORMS_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: "Thank you for contacting YAC Worldwide",
        from_name: "YAC Worldwide",
        to: data.email,
        replyto: "info@yacworldwide.org",
        message: `Dear ${data.name},\n\nThank you for reaching out to the Yoruba Advancement Council (YAC) Worldwide. We have received your message regarding "${data.subject}" and will respond within 24-48 hours.\n\nYour message:\n${data.message}\n\nBest regards,\nYAC Worldwide Team\ninfo@yacworldwide.org`,
        botcheck: false,
      }),
    });

    return {
      success: true,
      message: "Your message has been sent successfully. Please check your email for confirmation.",
    };
  } catch (error) {
    console.error("Web3Forms error:", error);
    throw error;
  }
};

export const submitMembershipForm = async (data: MembershipFormData): Promise<{ success: boolean; message: string }> => {
  const accessKey = getAccessKey();
  
  if (!accessKey) {
    throw new Error("Web3Forms access key not configured");
  }

  const membershipDetails = `
Applicant Information:
- Name: ${data.firstName} ${data.lastName}
- Date of Birth: ${data.dateOfBirth}
- Occupation: ${data.occupation}
- Affiliation: ${data.affiliation}
- Address: ${data.address}
- Phone: ${data.phone}
- Email: ${data.email}
- Membership Category: ${data.membershipCategory}

Introducer Information:
- Name: ${data.introducerName}
- Phone: ${data.introducerPhone}
- Email: ${data.introducerEmail}

Supporter Information:
- Name: ${data.supporterName}
- Phone: ${data.supporterPhone}
- Email: ${data.supporterEmail}
  `.trim();

  try {
    // Send notification to organization
    const orgResponse = await fetch(WEB3FORMS_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New YAC Membership Application: ${data.firstName} ${data.lastName}`,
        from_name: "YAC Website Membership Form",
        to: "info@yacworldwide.org",
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        message: membershipDetails,
        botcheck: false,
      }),
    });

    const orgResult = await orgResponse.json();

    if (!orgResult.success) {
      throw new Error(orgResult.message || "Failed to submit application");
    }

    // Send confirmation to applicant
    await fetch(WEB3FORMS_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: "YAC Membership Application Received",
        from_name: "YAC Worldwide",
        to: data.email,
        replyto: "info@yacworldwide.org",
        message: `Dear ${data.firstName} ${data.lastName},\n\nThank you for applying to become a member of the Yoruba Advancement Council (YAC) Worldwide.\n\nWe have received your membership application for: ${data.membershipCategory}\n\nOur team will review your application and contact you within 3-5 business days regarding the next steps, including payment information for your membership category.\n\nIf you have any questions, please don't hesitate to contact us at info@yacworldwide.org.\n\nWelcome to the YAC family!\n\nBest regards,\nYAC Worldwide Team`,
        botcheck: false,
      }),
    });

    return {
      success: true,
      message: "Your membership application has been submitted successfully. Please check your email for confirmation.",
    };
  } catch (error) {
    console.error("Web3Forms error:", error);
    throw error;
  }
};
