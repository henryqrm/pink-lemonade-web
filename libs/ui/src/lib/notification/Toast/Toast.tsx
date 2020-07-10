import React, { useEffect } from 'react';

// eslint-disable-next-line import/no-cycle
import { useToast } from './Toast.context';
import { CloseIcon } from './icons';
import Icon from './Toast.icon';

import * as S from './Toast.style';

import { ToastProps } from './Toast.props';

const Toast = ({
  message: { id, title, description, type, noIcon, autoClose, timeToClose },
}: ToastProps) => {
  const { removeToast } = useToast();

  useEffect(() => {
    if (!autoClose) return () => {};

    const toastTime = setTimeout(() => {
      removeToast(id);
    }, timeToClose);

    return () => {
      clearTimeout(toastTime);
    };
  }, [autoClose, removeToast, id, timeToClose]);

  return (
    <S.Toast key={id} {...(type && { type })}>
      {!noIcon && (
        <S.IconContainer>
          <Icon type={type} />
        </S.IconContainer>
      )}

      <S.ContentContainer>
        <S.ToastTitle component="strong" variant="heading-06">
          {title}
        </S.ToastTitle>

        {description && (
          <S.ToastContent component="p" variant="subtitle-medium">
            {description}
          </S.ToastContent>
        )}
      </S.ContentContainer>

      <S.CloseToast onClick={() => removeToast(id)}>
        <CloseIcon />
      </S.CloseToast>
    </S.Toast>
  );
};

export default Toast;
