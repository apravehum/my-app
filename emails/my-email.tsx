import * as React from 'react';
import { Button, Tailwind } from '@react-email/components';

interface EmailProps {
  names: string[]
}

const arr = ["e", "t", "a"];

const Email = ({}) => {
  return (
    <Tailwind>
      <Button>
        Click me
      </Button>
      { arr.map((name) => (
        <h1>{name}</h1>
      ))}
    </Tailwind>
  );
};

export default Email;