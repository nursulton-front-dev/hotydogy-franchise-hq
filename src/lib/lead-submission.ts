import { handleLeadSubmission, LeadData } from "@/services/leadService";

export const GOOGLE_SHEETS_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbzsDM0x0tXHdhd4Uam2FzcfkFDLhRnHLqwxqBO28kii5VLT691lg9LbbhA5CxNNlSmFYg/exec";

export type LeadSubmissionPayload = LeadData;

export async function submitLeadForm(payload: LeadSubmissionPayload): Promise<boolean> {
  return handleLeadSubmission(payload);
}
