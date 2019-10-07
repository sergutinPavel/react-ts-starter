import React from 'react';


interface IOwnProps {
  readonly [key: string]: any;
}
export const NotFound = (props: IOwnProps) => {
  return (
    <div className={'app-layout__content'}>
      Page you are looking for not found.
    </div>
  );
};
