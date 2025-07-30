/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import cn from 'classnames';
import { ErrorMessages } from '../../enums/errorMessages';

type Props = {
  errorMessage: string;
  setErrorMessage: (errorMessage: ErrorMessages) => void;
};

export const ErrorMessage: React.FC<Props> = ({
  errorMessage,
  setErrorMessage,
}) => {
  useEffect(() => {
    if (errorMessage === ErrorMessages.None) {
      return;
    }

    const timerId = setTimeout(() => {
      setErrorMessage(ErrorMessages.None);
    }, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, [errorMessage, setErrorMessage]);

  return (
    <div
      data-cy="ErrorNotification"
      className={cn(
        'notification',
        'is-danger',
        'is-light',
        'has-text-weight-normal',
        {
          hidden: errorMessage === ErrorMessages.None,
        },
      )}
    >
      <button
        data-cy="HideErrorButton"
        type="button"
        className="delete"
        onClick={() => {
          setErrorMessage(ErrorMessages.None);
        }}
      />
      {errorMessage}
    </div>
  );
};
