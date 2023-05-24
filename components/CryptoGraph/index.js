import React, { useEffect, useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { ResponsiveContainer, LineChart, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';
import { FETCH_GRAPH_DATA } from '../../constants';

const Graph = ({payCoin, buyCoin }) => {
  const [chartData, setChartData] = useState([]);
  const limit = 200;

  const fetchGraphData = async () => {
    try {
      const response = await fetch(
        `${FETCH_GRAPH_DATA}?fsym=${payCoin}&tsym=${buyCoin}&limit=${limit}`
      );
      const { Data } = await response.json();
      const formattedData = Data?.Data?.map((item) => ({
        date: new Date(item.time * 1000),
        value: item.close,
      }));
      setChartData(formattedData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  useEffect(() => {
    fetchGraphData();
  }, [payCoin, buyCoin]);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };
  return (
    <Box
      boxShadow="xl"
      p={4}
      transition="background-color 0.3s ease-in-out"
      _hover={{ backgroundColor: '#04001B' }}
    >
      {chartData.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <XAxis
              dataKey="date"
              tickFormatter={formatDate}
              interval="preserveStartEnd"
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="value"
              stroke="rgb(75, 192, 192)"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 8 }}
              name={`${payCoin} Price (${buyCoin})`}
            />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <Text>Loading data...</Text>
      )}
    </Box>
  );
};

export default Graph;
