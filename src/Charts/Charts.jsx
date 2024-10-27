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
        console.log(response.data)
       
        setUsers(response.data)
        console.log(users[3])
        
        setLoading(false)

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
                {value: users[0], label: "Labour"}, 
                {value: users[1], label: "Fertilizer"},
                {value: users[2], label: "Seeds"},
                {value: users[3], label: "Pesticides"}
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
