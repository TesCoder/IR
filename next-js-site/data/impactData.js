export const impactData = [
  { name: "Harvard University", acceptanceRate: "3.59%", ivyReadyRate: "21.5%", ivyReadyImpact: "6x" },
  { name: "Yale University", acceptanceRate: "4.6%", ivyReadyRate: "23.0%", ivyReadyImpact: "5x" },
  { name: "Princeton University", acceptanceRate: "4.62%", ivyReadyRate: "23.1%", ivyReadyImpact: "5x" },
  { name: "Columbia University", acceptanceRate: "4.29%", ivyReadyRate: "30.0%", ivyReadyImpact: "7x" },
  { name: "University of Pennsylvania", acceptanceRate: "4.9%", ivyReadyRate: "24.5%", ivyReadyImpact: "5x" },
  { name: "Brown University", acceptanceRate: "5.65%", ivyReadyRate: "28.3%", ivyReadyImpact: "5x" },
  { name: "Cornell University", acceptanceRate: "8.41%", ivyReadyRate: "50.5%", ivyReadyImpact: "6x" },
  { name: "Dartmouth College", acceptanceRate: "6.03%", ivyReadyRate: "30.2%", ivyReadyImpact: "5x" },
  { name: "Massachusetts Institute of Technology", acceptanceRate: "4.52%", ivyReadyRate: "18.1%", ivyReadyImpact: "4x" },
  { name: "Stanford University", acceptanceRate: "3.61%", ivyReadyRate: "28.9%", ivyReadyImpact: "8x" },
  { name: "California Institute of Technology", acceptanceRate: "2.3%", ivyReadyRate: "13.8%", ivyReadyImpact: "6x" },
  { name: "University of Chicago", acceptanceRate: "4.1%", ivyReadyRate: "24.6%", ivyReadyImpact: "6x" },
  { name: "Duke University", acceptanceRate: "4.8%", ivyReadyRate: "28.8%", ivyReadyImpact: "6x" },
  { name: "Johns Hopkins University", acceptanceRate: "6.0%", ivyReadyRate: "30.0%", ivyReadyImpact: "5x" },
  { name: "Amherst College", acceptanceRate: "7.0%", ivyReadyRate: "42.0%", ivyReadyImpact: "6x" },
  { name: "Williams College", acceptanceRate: "10.0%", ivyReadyRate: "50.0%", ivyReadyImpact: "5x" },
  { name: "UC Berkeley", acceptanceRate: "11.0%", ivyReadyRate: "52.0%", ivyReadyImpact: "5x" },
];

const highlightNames = [
  "Harvard University",
  "Stanford University",
  "UC Berkeley",
  "Princeton University",
  "Massachusetts Institute of Technology",
];

export const impactHighlights = impactData.filter(({ name }) => highlightNames.includes(name));

