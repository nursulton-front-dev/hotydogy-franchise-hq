import { handleLeadSubmission, LeadData } from "@/services/leadService";

export const GOOGLE_SHEETS_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbzZrGHd2IZDTFI2J2xdRFUC2kbHhTABJ6HvjHmgo1XPHq4vH8z1ZJM7GDZhy1n_XdCnFQ/exec";

export type LeadSubmissionPayload = LeadData;

export async function submitLeadForm(payload: LeadSubmissionPayload): Promise<boolean> {
  return handleLeadSubmission(payload);
}
