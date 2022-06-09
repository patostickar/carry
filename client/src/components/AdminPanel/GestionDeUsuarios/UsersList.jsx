import React from 'react';

export default function List({ id, email }) {
  return (
    <div>
      <ul>
        <li>
          id:{id} email:{email}
        </li>
      </ul>
    </div>
  );
}
