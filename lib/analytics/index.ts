/** Analytics abstraction — provider configured later */

export const AnalyticsEvents = {
  cta_start_project: "cta_start_project",
  cta_discovery: "cta_discovery",
  project_form_start: "project_form_start",
  project_form_submit: "project_form_submit",
  capability_view: "capability_view",
  solution_view: "solution_view",
  case_view: "case_view",
  perspective_view: "perspective_view",
  careers_view: "careers_view",
  partnership_view: "partnership_view",
} as const;

export type AnalyticsEvent = (typeof AnalyticsEvents)[keyof typeof AnalyticsEvents];

export function track(event: AnalyticsEvent, payload?: Record<string, unknown>) {
  if (process.env.NODE_ENV === "development") {
    console.debug("[analytics]", event, payload ?? {});
  }
  // Provider hook-up deferred
}
