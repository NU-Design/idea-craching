// import {
//   createAuthUserWithEmailAndPassword,
//   signInAuthUserWithEmailAndPassword,
//   auth,
// } from './auth';

import { GetUserRole } from './users';
import { useEffect, useState } from 'react';

const HJXTest = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      console.log('in data');
      const result = await GetUserRole('HNjAiHOh5dRdwpze714m5JN7epp2');
      console.log(result);
      setData(result);
    };
    fetchdata();
  });

  return data ? <div>{data}</div> : <div>Loading...</div>;
  // const data = {
  //   username: 'jjjj',
  //   role: 'developer',
  // };

  // createAuthUserWithEmailAndPassword('jjjj@gmail.com', '123456', data);
  // signInAuthUserWithEmailAndPassword('jjjj@gmail.com', '123456');
  // console.log(auth.currentUser.email);
  // eslint-disable-next-line react-hooks/exhaustive-deps
};

export default HJXTest;
