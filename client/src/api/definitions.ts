export enum Specialties {
  plumbing = 'plumbing',
  insulation = 'insulation',
  internalWaterSupply = 'internalWaterSupply',
  liftAndElevators = 'liftAndElevators',
}

export const specialtiesMap = {
  [Specialties.plumbing]: 'Plumbing',
  [Specialties.insulation]: 'Insulation',
  [Specialties.internalWaterSupply]: 'Internal Water Supply',
  [Specialties.liftAndElevators]: 'LIFT & Elevators',
};

export interface Specialty {
  id: string;
  name: string;
}

export interface Company {
  id: string;
  name: string;
  city: string;
  logoUrl: string;
  specialties: Specialties[];
}

export interface Paging {
  page?: number;
  nextPage?: number;
  hasPrevPage?: boolean;
  hasNextPage?: boolean;
  limit?: number;
  total?: number;
}
