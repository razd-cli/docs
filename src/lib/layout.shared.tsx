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
          <span className="inline-flex items-center rounded-full border border-fd-border bg-fd-secondary px-2 py-0.5 text-xs font-medium text-fd-muted-foreground">
            v1.x
          </span>
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