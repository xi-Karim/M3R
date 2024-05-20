import { Slide } from '@mui/material';
import React, { forwardRef, ReactElement, Ref } from 'react';
import { TransitionProps } from '@mui/material/transitions';

interface M3SlideTransitionProps extends TransitionProps {
  direction: 'down' | 'left' | 'right' | 'up';
  appear?: boolean;
  children: ReactElement<any, any>;
}

const M3SlideTransition = forwardRef<HTMLDivElement, M3SlideTransitionProps>(
  function Transition(props: M3SlideTransitionProps, ref: Ref<HTMLDivElement>) {
    const { direction, children, ...other } = props;
    return <Slide direction={direction} ref={ref} {...other}>{children}</Slide>;
  }
);

export default M3SlideTransition;
