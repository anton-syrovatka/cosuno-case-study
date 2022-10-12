import { Company, Specialties } from 'api/definitions';

export const specialtiesMap = {
  [Specialties.plumbing]: 'Plumbing',
  [Specialties.insulation]: 'Insulation',
  [Specialties.internalWaterSupply]: 'Internal Water Supply',
  [Specialties.liftAndElevators]: 'LIFT & Elevators',
};

export const specialties = Object.entries(specialtiesMap).map(([id, name]) => ({ id, name }));

export const companies: Company[] = [
  {
    id: '1',
    name: 'Bechtel',
    city: 'San Francisco CA',
    specialties: [Specialties.insulation, Specialties.internalWaterSupply, Specialties.plumbing],
    logoUrl:
      'https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/bechtel-construction.png',
  },
  {
    id: '2',
    name: 'Fluor Corporation',
    city: 'Irving, TX',
    specialties: [Specialties.liftAndElevators, Specialties.plumbing],
    logoUrl:
      'https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/fluor-corporation-construction.png',
  },
  {
    id: '3',
    name: 'Turner Corporation',
    city: 'New York, NY',
    specialties: [Specialties.liftAndElevators],
    logoUrl:
      'https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/turner-corporation-construction.png',
  },
  {
    id: '4',
    name: 'AECOM',
    city: 'Los Angeles, CA',
    specialties: [Specialties.insulation, Specialties.internalWaterSupply, Specialties.plumbing],
    logoUrl:
      'https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/aecom-construction.png',
  },
  {
    id: '5',
    name: 'Skanska USA',
    city: 'New York, NY',
    specialties: [Specialties.internalWaterSupply, Specialties.insulation],
    logoUrl:
      'https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/skanska-usa-construction.png',
  },
  {
    id: '6',
    name: 'Kiewit Corporation',
    city: 'Omaha, NE',
    specialties: [
      Specialties.internalWaterSupply,
      Specialties.liftAndElevators,
      Specialties.plumbing,
    ],
    logoUrl:
      'https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/kiewit-corporation-construction.png',
  },
  {
    id: '7',
    name: 'Jacobs Engineering Group',
    city: 'Dallas,m TX',
    specialties: [
      Specialties.insulation,
      Specialties.internalWaterSupply,
      Specialties.liftAndElevators,
      Specialties.plumbing,
    ],
    logoUrl:
      'https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/jacobs-engineering-group-construction.png',
  },
  {
    id: '8',
    name: 'PCL Construction Enterprises',
    city: 'Denver, CO',
    specialties: [Specialties.insulation, Specialties.internalWaterSupply, Specialties.plumbing],
    logoUrl:
      'https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/pcl-construction-enterprises.png',
  },
  {
    id: '9',
    name: 'DPR Construction',
    city: 'Redwood City, CA',
    specialties: [Specialties.liftAndElevators, Specialties.plumbing],
    logoUrl: 'https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/dpr-construction.png',
  },
  {
    id: '10',
    name: 'Balfour Beatty Construction',
    city: 'Dallas, TX',
    specialties: [Specialties.liftAndElevators],
    logoUrl:
      'https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/balfour-beatty-construction.png',
  },
  {
    id: '11',
    name: 'Gilbane Building Company',
    city: 'Providence, RI',
    specialties: [
      Specialties.insulation,
      Specialties.internalWaterSupply,
      Specialties.liftAndElevators,
      Specialties.plumbing,
    ],
    logoUrl:
      'https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/gilbane-building-company-construction.png',
  },
  {
    id: '12',
    name: 'Hensel Phelps Construction',
    city: 'Greeley, CO',
    specialties: [Specialties.insulation, Specialties.internalWaterSupply, Specialties.plumbing],
    logoUrl:
      'https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/hensel-phelps-construction.png',
  },
  {
    id: '13',
    name: 'Lendlease',
    city: 'Sydney, Australia',
    specialties: [Specialties.liftAndElevators, Specialties.plumbing],
    logoUrl:
      'https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/lendlease-construction.png',
  },
  {
    id: '14',
    name: 'Haskell',
    city: 'Jacksonville, FL',
    specialties: [Specialties.internalWaterSupply, Specialties.insulation],
    logoUrl:
      'https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/haskell-construction.png',
  },
  {
    id: '15',
    name: 'Holder Construction Company',
    city: 'Atlanta, GA',
    specialties: [Specialties.internalWaterSupply, Specialties.insulation],
    logoUrl:
      'https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/holder-construction-company.png',
  },
  {
    id: '16',
    name: 'The Walsh Group',
    city: 'Chicago, IL',
    specialties: [Specialties.liftAndElevators, Specialties.plumbing],
    logoUrl:
      'https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/the-walsh-group-construction.png',
  },
  {
    id: '17',
    name: 'Whiting-Turner Contracting',
    city: 'Baltimore, MD',
    specialties: [Specialties.insulation, Specialties.internalWaterSupply, Specialties.plumbing],
    logoUrl:
      'https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/whiting-turner-contracting-construction.png',
  },
];
