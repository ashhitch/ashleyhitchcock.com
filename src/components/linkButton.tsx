import React, { forwardRef, FC } from 'react';
import { Link } from 'gatsby';
import { Button, ButtonProps } from 'grommet';

interface GLink {
  to: string;
}
export type AnchorLinkProps = ButtonProps & GLink & Omit<JSX.IntrinsicElements['a'], 'color'>;

const LinkBehavior = forwardRef((props, ref) => <Link ref={ref} {...props} />);

const LinkButton: FC<AnchorLinkProps> = ({ label, to }) => (
  <Button as={LinkBehavior} to={to} label={label} type={false} />
);

export default LinkButton;
