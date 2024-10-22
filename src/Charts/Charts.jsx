import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import * as React from 'react';

export default function Charts() {
  // Define state for users and loading
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulating an async data fetch
    const fetchData = async () => {
      const fetchedUsers = [
        { label: "6d ago", value: 120 },
        { label: "5d ago", value: 200 },
      ];
      setUsers(fetchedUsers);
      // Set the fetched data to state
      setLoading(false); // Set loading to false
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='pl-11'>
      <PieChart
        series={[
          {
            data: users,
            arcLabelMinAngle: 35,
            arcLabelRadius: '60%',
            arcLabel: (item) => `${item.value}%`,
          },
        ]}

        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fontWeight: 'bold',
          },
        }}
        
        height={300}
        width={300}
      />
    </div>
  );
}
