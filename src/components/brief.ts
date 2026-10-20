// Data the cost estimator hands to the project brief wizard.
export type BriefPrefill = {
  businessType?: string;
  features?: string[];
  timeline?: string;
  budget?: string;
  note?: string;
  // Bumped on every hand-off so the wizard re-applies even identical prefills.
  nonce: number;
};
