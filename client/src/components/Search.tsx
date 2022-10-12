import React, { ChangeEvent } from 'react';
import debounce from 'lodash/debounce';

import { Specialty } from '../api/definitions';

import './Search.css';

interface SearchProps {
  term: string;
  onTermChange: (text: string) => void;
  specialties: Specialty[];
  selectedSpecialties: string[];
  onSpecialtiesChange: (specialties: string[]) => void;
}

const Search = ({
  term,
  onTermChange,
  specialties,
  selectedSpecialties,
  onSpecialtiesChange,
}: SearchProps) => {
  const handleOnTermChange = React.useMemo(() => {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      onTermChange(e.target.value);
    };

    return debounce(onChange, 300);
  }, [onTermChange]);

  const handleOnSpecialtyChange = (e: ChangeEvent<HTMLInputElement>) => {
    debugger;
    if (!e.target.checked) {
      onSpecialtiesChange(selectedSpecialties.filter(specialty => specialty !== e.target.value));
    } else {
      onSpecialtiesChange([...selectedSpecialties, e.target.value]);
    }
  };

  React.useEffect(() => {
    return () => {
      handleOnTermChange.cancel();
    };
  }, [handleOnTermChange]);

  return (
    <div className="Search">
      <input
        className="Search-input"
        type="text"
        defaultValue={term}
        onChange={handleOnTermChange}
        placeholder="Type company name..."
      />
      <div className="Search-checkbox-container">
        {specialties.map(specialty => (
          <label key={specialty.id} className="Search-checkbox">
            <input
              type="checkbox"
              value={specialty.id}
              checked={selectedSpecialties.includes(specialty.id)}
              onChange={handleOnSpecialtyChange}
            />
            {specialty.name}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Search;
