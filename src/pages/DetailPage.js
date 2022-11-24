import React from 'react';
import { useParams } from 'react-router-dom';

function DetailPage() {
  const { id } = useParams();
  return (
    <section>
      <div className="section-container">
        <h2 className="section-title">
          Detail Page
          {' '}
          {id}
        </h2>
      </div>
    </section>
  );
}

export default DetailPage;
