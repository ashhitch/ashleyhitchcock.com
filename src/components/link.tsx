import React, { forwardRef } from 'react';
import { Link } from 'gatsby';

export const LinkBehavior = forwardRef((props, ref) => <Link ref={ref} {...props} />);
