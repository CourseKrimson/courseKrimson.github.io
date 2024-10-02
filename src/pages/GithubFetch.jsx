import React, { useEffect, useState } from 'react';
import '../styles/contr.css';

const Contributors = () => {
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/repos/courseKrimson/courseKrimson.github.io/contributors'
        );
        if (response.ok) {
          const data = await response.json();
          const filteredContributors = data.filter(
            (contributor) => contributor.type !== 'Bot'
          );
          setContributors(filteredContributors);
        } else {
          console.error('Error fetching contributors:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching contributors:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContributors();
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="text-center">Contributors</h3>

      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row">
          {contributors.map((contributor) => (
            <div className="col-md-4" key={contributor.id}>
              <div className="card mb-4 shining-card">
                {' '}
                {/* Add class shining-card */}
                <div className="card-body text-center">
                  <a
                    href={contributor.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={contributor.avatar_url}
                      alt={contributor.login}
                      className="img-fluid rounded-circle mb-3"
                      width="100"
                    />
                    <h5 className="card-title">{contributor.login}</h5>
                  </a>
                  <p className="card-text">
                    Contributions: {contributor.contributions}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Contributors;
