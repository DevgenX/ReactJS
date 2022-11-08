import React, { useState, useEffect } from 'react';
import AdviceContent from './AdviceContent';

const [advice, setAdvice] = useState('');
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

class AdviceGenerator extends React.Component {
    useEffect(() => {
        getAdvice();
      }, []);

      getAdvice = async () => {
        setLoading(true);
        try {
          const resp = await fetch('https://api.adviceslip.com/advice');
          if (!resp.ok) new Error('issue fetching from source');
          const adviceJson = await resp.json();
          setAdvice(adviceJson.slip);
        } catch (e) {
          setError(e.message);
        } finally {
          setLoading(false);
        }
        handleClick = async () => {
            await getAdvice();
          };

}