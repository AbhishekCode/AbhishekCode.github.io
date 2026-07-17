const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSdClOUqZqB-HEvFz3shvyGsYw1HxVI8LeUMqw0c-0vAWYgnNA/formResponse";

/** Google Form "Collect email addresses" field */
const EMAIL_FIELD = "emailAddress";

/** Google Form "Your Name" question */
const NAME_ENTRY_ID = "entry.233436652";

export function triggerResumeDownload(resumeUrl: string): void {
  const link = document.createElement("a");
  link.href = resumeUrl;
  link.download = "abhishek-resume.pdf";
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

export async function submitResumeForm(input: {
  email: string;
  name: string;
}): Promise<void> {
  const body = new FormData();
  body.append(EMAIL_FIELD, input.email.trim());
  if (input.name.trim()) {
    body.append(NAME_ENTRY_ID, input.name.trim());
  }

  // Google Forms does not allow reading the response (CORS).
  // no-cors still delivers the submission to the form/Sheets.
  await fetch(GOOGLE_FORM_ACTION, {
    method: "POST",
    mode: "no-cors",
    body,
  });
}
