export enum Specialties {
  plumbing = 'plumbing',
  insulation = 'insulation',
  internalWaterSupply = 'internalWaterSupply',
  liftAndElevators = 'liftAndElevators',
}

export interface Specialty {
  id: string;
  name: string;
}

export interface Company {
  id: string;
  name: string;
  city: string;
  logoUrl: string;
  specialties: string[];
}
