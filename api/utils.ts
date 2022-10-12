import { Company } from 'api/definitions';

export const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const byName = (term: string) => {
  if (!term) {
    return Boolean;
  }

  const pattern = new RegExp(term, 'i');

  return (company: Company) => !!company.name.match(pattern);
};

export const bySpecialties = (specialties: string[]) => {
  if (!Array.isArray(specialties) || specialties.length === 0) {
    return Boolean;
  }

  return (company: Company) =>
    specialties.every(specialty => company.specialties.includes(specialty));
};

export const stringToArray = (specialties?: string | string[]): string[] => {
  if (!specialties) {
    return [];
  }
  if (typeof specialties === 'string') {
    return [specialties];
  }

  return specialties;
};
