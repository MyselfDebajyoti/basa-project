// Data cleaning utility for processing members.json
export function cleanMemberData(rawData) {
  const cleanedMembers = [];

  rawData.forEach((item, index) => {
    // Skip empty rows or summary rows
    if (
      !item["Male Member"] ||
      item["Male Member"] === "Male Member" ||
      item["Child Member"] === "TOTAL" ||
      typeof item["Child Member"] === "number"
    ) {
      return;
    }

    // Create a cleaned member object
    const member = {
      male_member_name: item["Male Member"] || null,
      female_member_name:
        item["Female Member"] === "Not Member" ||
        item["Female Member"] === "Not member" ||
        item["Female Member"] === "Cousin"
          ? null
          : item["Female Member"] || null,
      child_member_name: item["Child Member"] || null,

      male_email:
        item["Male Member Email address"] === "No Email ID" ||
        item["Male Member Email address"] === "awaiting response from wife"
          ? null
          : item["Male Member Email address"] || null,
      female_email:
        item["Female Member Email address"] === "No Email ID" ||
        item["Female Member Email address"] === "Not Member"
          ? null
          : item["Female Member Email address"] || null,
      child_email: item["Child Member Email address"] || null,

      male_phone:
        item["Male Member #"] === "No Whatsapp"
          ? null
          : item["Male Member #"] || null,
      female_phone:
        item["Female Member #"] === "No Whatsapp" ||
        item["Female Member #"] === "Not Member"
          ? null
          : item["Female Member #"] || null,
      child_phone: item["Child Contact No"] || null,

      male_phone_alt: item["Male Member #_1"] || null,
      female_phone_alt: item["Female Member #_1"] || null,

      membership_status: "active",
      rsvp_status: item["TentativeDelete from RSVP list"] || null,
      notes: null,
    };

    // Only add if there's at least one member name
    if (
      member.male_member_name ||
      member.female_member_name ||
      member.child_member_name
    ) {
      cleanedMembers.push(member);
    }
  });

  return cleanedMembers;
}

// Validate email format
export function isValidEmail(email) {
  if (!email) return true; // null/empty is valid (not required)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Clean phone number format
export function cleanPhoneNumber(phone) {
  if (!phone) return null;
  // Remove extra spaces and format consistently
  return phone.replace(/\s+/g, " ").trim();
}

// Validation function for member data
export function validateMemberData(member) {
  const errors = [];

  if (
    !member.male_member_name &&
    !member.female_member_name &&
    !member.child_member_name
  ) {
    errors.push("At least one member name is required");
  }

  if (member.male_email && !isValidEmail(member.male_email)) {
    errors.push("Invalid male member email format");
  }

  if (member.female_email && !isValidEmail(member.female_email)) {
    errors.push("Invalid female member email format");
  }

  if (member.child_email && !isValidEmail(member.child_email)) {
    errors.push("Invalid child member email format");
  }

  return errors;
}
