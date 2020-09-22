/* eslint-disable */
import React, { Fragment, useState } from 'react';

function Testfile() {
  const [name, setName] = useState('名称');
  const [content, setContent] = useState('内容');
  const [content1, setContent1] = useState('内容1');
  return (
    <>
      <button onClick={() => setName(new Date().getTime())}>name</button>
      <button onClick={() => setContent(new Date().getTime())}>content</button>
      <Button name="国家">{content}</Button>
      <Button name="民族">{content1}</Button>
    </>
  );
}

function Button({ name, children }) {
  // console.log('{ name, children }1=', { name, children });
  // console.log('name1=', name);
  // console.log('children1=', children);

  function changeName(name) {
    // console.log('11');
    return `${name}改变name的方法`;
  }

  const otherName = changeName(name);

  // console.log('name2=', name);
  // console.log('children2=', children);

  return (
    <>
      <div>{otherName}</div>
      <div>{children}</div>
    </>

  );
}

export default Testfile;
