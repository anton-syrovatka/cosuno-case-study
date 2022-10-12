import { useState, useEffect } from 'react';
import { Company, Paging, Specialty } from './definitions';

interface UseGetCompaniesData {
  companies?: Company[];
  paging?: Paging;
}

interface UseGetCompanies {
  data: UseGetCompaniesData;
  loading: boolean;
}

interface UseGetCompaniesProps {
  term?: string;
  specialties?: string[];
  page: number;
  limit: number;
}

export const useGetCompanies = ({
  page,
  limit,
  term,
  specialties,
}: UseGetCompaniesProps): UseGetCompanies => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<UseGetCompaniesData | {}>({});

  useEffect(() => {
    let controller: AbortController | null = new AbortController();
    setLoading(true);

    (async () => {
      try {
        const query = new URLSearchParams([
          ['page', String(page)],
          ['limit', String(limit)],
          ['term', term || ''],
          ...(specialties || []).map(spec => ['specialties', spec]),
        ]);

        const response = await fetch('http://localhost:3001/companies?' + query, {
          signal: controller.signal,
        });

        setLoading(false);
        setData(await response.json());
        controller = null;
      } catch (e: any) {
        setLoading(false);
        console.log(e.message);
      }
    })();

    return () => controller?.abort();
  }, [page, limit, term, specialties, setLoading, setData]);

  return { loading, data };
};

interface UseGetSpecialtiesData {
  specialties?: Specialty[];
}

interface UseGetSpecialties {
  data: UseGetSpecialtiesData;
  loading: boolean;
}

export const useGetSpecialties = (): UseGetSpecialties => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    let controller: AbortController | null = new AbortController();
    setLoading(true);

    (async () => {
      try {
        const response = await fetch('http://localhost:3001/companies/specialties', {
          signal: controller.signal,
        });

        setLoading(false);
        setData(await response.json());
        controller = null;
      } catch (e: any) {
        setLoading(false);
        console.log(e.message);
      }
    })();

    return () => controller?.abort();
  }, []);

  return { loading, data };
};
