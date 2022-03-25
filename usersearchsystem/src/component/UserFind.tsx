import React, { useState } from 'react';
import './UserFind.css';

const UserFind: React.FC = () => {
  const users = [
    {
      name: 'saurav',
      age: 20,
      designation: 'Software Engineer',
    },
    {
      name: 'raju',
      age: 25,
      designation: 'Programmer',
    },
    {
      name: 'rajib',
      age: 30,
      designation: 'Designer',
    },
    {
      name: 'ritu',
      age: 20,
      designation: 'UX Writer',
    },
  ];
  const [userList, setUserList] = useState<{
      name: string,age:number,designation: string
  }[] | undefined >(users);
  const [text, setText] = useState('');

  const searchengin = () => {
      const findUsers = userList && userList?.length > 0 ? userList?.filter((u) => u?.name === text) :
      undefined;

      setUserList(findUsers)
  };

  return (
    <div>
      <div className="title">
        <h1>User Find System</h1>
      </div>
      <div className="input__wrapper">
        <input
          type="text"
          placeholder="Search User"
          value={text}
          onChange={(e) => {setText(e.target.value) 
            setUserList(users)}}
        />
        <button disabled={!text} onClick={searchengin}>Search</button>
      </div>

      <div className="body">
        {userList && userList?.length === 0 && (
          <div className="notFound">No User Found</div>
        )}

        {userList &&
          userList?.length > 0 &&
          userList?.map((user) => {
            return (
              <div className="body__item">
                <h3>Name: {user?.name}</h3>
                <p>Age: {user?.age}</p>
                <p>Designation: {user?.designation}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default UserFind;
