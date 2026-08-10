import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Card } from 'fumadocs-ui/components/card';
import { icons } from 'lucide-react';
import type { MDXComponents } from 'mdx/types';
import type { ComponentProps, ReactNode } from 'react';

function resolveIcon(icon: unknown): ReactNode {
  if (typeof icon !== 'string') return icon as ReactNode;
  const Icon = icons[icon as keyof typeof icons];
  return Icon ? <Icon /> : icon;
}

function CardWithIcon(props: ComponentProps<typeof Card>) {
  return <Card {...props} icon={resolveIcon(props.icon)} />;
}

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    Card: CardWithIcon,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
