import React from 'react';

import Search from './components/Search';
import List from './components/List';
import Paging from './components/Paging';

import { useGetCompanies, useGetSpecialties } from './api';

import './App.css';

const limit = 5;

const App = () => {
  const [page, setPage] = React.useState<number>(1);
  const [term, setTerm] = React.useState<string>('');
  const [selectedSpecialties, setSelectedSpecialties] = React.useState<string[]>([]);

  const { data: dataSpecialties } = useGetSpecialties();
  const { loading, data: dataCompanies } = useGetCompanies({
    page,
    term,
    limit,
    specialties: selectedSpecialties,
  });
  const { companies = [], paging = {} } = dataCompanies;

  const { specialties = [] } = dataSpecialties;

  const handleOnTermChange = (term: string) => {
    setTerm(term);
    setPage(1);
  };

  const handleOnSpecialtiesChange = (specialties: string[]) => {
    setSelectedSpecialties(specialties);
    setPage(1);
  };

  return (
    <div className="App">
      <Search
        term={term}
        onTermChange={handleOnTermChange}
        specialties={specialties}
        selectedSpecialties={selectedSpecialties}
        onSpecialtiesChange={handleOnSpecialtiesChange}
      />
      <List companies={companies} loading={loading} />
      <Paging onChange={page => setPage(page)} pagingProps={paging} />
    </div>
  );
};

export default App;
