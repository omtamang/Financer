import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import * as React from 'react';
import { useAuth } from '../Security/AuthContext';
import { getFarmExpense } from '../api/ApiService';

export default function Charts() {
  // Define state for users and loading
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const authContext = useAuth()

  React.useEffect(() => {
    // Simulating an async data fetch
    const fetchData = async () => {
      try {
        const id = authContext.id
        const response = await getFarmExpense(id);
        setUsers(response.data);
        setLoading(false)
        console.log(users[0])
        // Set the fetched data to state
        setLoading(false); // Set loading to false
      } catch (error) {
        <div>
          Loading.......
        </div>
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='pl-[50px]'>
      <PieChart
        series={[
          {
            data: [
              {value: users[0].labour, label: "Labour"},
              {value: users[0].fertilizer, label: "Fertilizer"},
              {value: users[0].seeds, label: "Seeds"},
              {value: users[0].pesticides, label: "Pesticides"}
            ],
            arcLabelMinAngle: 35,
            arcLabelRadius: '60%',
            arcLabel: (item) => `${item.value}%`,
            cx: 150
          },
        ]}

        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fontWeight: 'bold',
          },
        }}
        
        height={300}
        width={440}
      />
    </div>
  );
}
