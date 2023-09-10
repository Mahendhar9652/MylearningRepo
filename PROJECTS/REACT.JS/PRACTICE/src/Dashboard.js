import React from 'react';

const Dashboard = (props) => {
  console.log(props.match.params.name);
  return (
    <div>
      Dashboard
    </div>
  );
};

export default Dashboard;
