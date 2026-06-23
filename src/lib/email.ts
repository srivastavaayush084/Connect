import emailjs from "@emailjs/browser";

// EmailJS config — reads from VITE_ env vars (public, safe for client-side EmailJS)
function getEmailConfig() {
  return {
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "",
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "",
    adminTemplateId: import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID ?? "",
    brandTemplateId: import.meta.env.VITE_EMAILJS_BRAND_TEMPLATE_ID ?? "",
    adminEmail: import.meta.env.VITE_ADMIN_EMAIL ?? "",
  };
}

export interface CampaignData {
  brandName: string;
  website: string;
  industry: string;
  contact: string;
  email: string;
  phone: string;
  objective: string;
  budget: string;
  platforms: string[];
  categories: string[];
  languages: string[];
  state: string;
  place: string;
}

/**
 * Send campaign details to the admin email.
 */
export async function sendAdminNotification(data: CampaignData) {
  const config = getEmailConfig();

  if (!config.publicKey || !config.serviceId || !config.adminTemplateId) {
    console.warn("EmailJS not configured — skipping admin notification.");
    return;
  }

  return emailjs.send(
    config.serviceId,
    config.adminTemplateId,
    {
      admin_email: config.adminEmail,
      brand_name: data.brandName,
      contact_name: data.contact,
      brand_email: data.email,
      phone: data.phone,
      website: data.website,
      industry: data.industry,
      objective: data.objective,
      budget: data.budget,
      platforms: data.platforms.join(", "),
      categories: data.categories.join(", "),
      languages: data.languages.join(", "),
      state: data.state,
      place: data.place,
    },
    config.publicKey,
  );
}

/**
 * Send a confirmation email to the brand contact.
 */
export async function sendBrandConfirmation(data: CampaignData) {
  const config = getEmailConfig();

  if (!config.publicKey || !config.serviceId || !config.brandTemplateId) {
    console.warn("EmailJS not configured — skipping brand confirmation.");
    return;
  }

  return emailjs.send(
    config.serviceId,
    config.brandTemplateId,
    {
      to_email: data.email,
      contact_name: data.contact,
      brand_name: data.brandName,
      objective: data.objective,
      budget: data.budget,
      platforms: data.platforms.join(", "),
    },
    config.publicKey,
  );
}
