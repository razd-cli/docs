import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-1.5">
          <img
            src="/R_logo_gradient.svg"
            alt={appName}
            className="h-6 w-6"
          />
          <span>{appName}</span>
        </div>
      ),
    },
    links: [
      {
        text: 'Документация',
        url: '/docs',
        active: 'none',
      },
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