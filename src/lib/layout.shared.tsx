import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: appName,
    },
    links: [
      {
        text: 'Кейсы',
        url: '/showcases',
        active: 'none',
      },
      {
        text: 'Блог',
        url: '/blog',
        active: 'none',
      },
    ],
    githubUrl: 'https://github.com/razd-cli/razd',
  };
}