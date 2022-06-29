import dynamic from 'next/dynamic';
import { CustomLink } from './custom-link/custom-link';

export const mdxElements = {
  a: CustomLink,
  YouTube: dynamic(() => import('./you-tube/you-tube')),
};
