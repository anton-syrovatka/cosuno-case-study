import { Company, specialtiesMap } from '../api/definitions';
import './List.css';

interface ListProps {
  companies: Company[];
  loading: boolean;
}

const List = ({ companies, loading }: ListProps) => {
  if (loading) {
    return <>{'Loading ...'}</>;
  }

  return (
    <div className="List">
      {companies.length === 0 && <div className="List-item-no-content">No Content</div>}
      {companies.map(company => (
        <div key={company.id} className="List-item" data-id={company.id}>
          <div className="List-item-logo-container">
            <div className="List-item-logo" style={{ backgroundImage: `url(${company.logoUrl}` }} />
          </div>
          <div className="List-item-details">
            <div>{company.name}</div>
            <div>{company.city}</div>
            <div className="List-item-details-specialties ">
              {company.specialties.map(s => specialtiesMap[s]).join(', ')}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
