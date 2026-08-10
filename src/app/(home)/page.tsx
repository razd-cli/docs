import Image from 'next/image';
import Link from 'next/link';
import { Rocket, Globe, Package } from 'lucide-react';
import { showcasesSource } from '@/lib/source';
import { ShowcaseCard } from '@/components/showcase-card';
import { DemoVideo } from '@/components/demo-video';
import { InstallCommand } from '@/components/install-command';

export default async function HomePage() {
  const showcases = showcasesSource
    .getPages()
    .filter((p) => p.slugs.length > 0 && !p.data.full);
  return (
    <div className="flex flex-col flex-1">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <Image
          src="/R_logo_gradient.svg"
          alt="Razd"
          width={128}
          height={128}
          className="mb-1"
          priority
        />
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-fd-foreground to-fd-muted-foreground bg-clip-text text-transparent">
          Razd
        </h1>
        <p className="text-xl text-fd-muted-foreground mb-10 max-w-2xl">
          Современный инструмент для настройки проектов
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href="/docs"
            className="inline-flex items-center justify-center rounded-lg bg-fd-foreground px-8 py-3 text-sm font-semibold text-fd-background shadow-sm transition-colors hover:bg-fd-foreground/90"
          >
            Начать знакомство
          </Link>
          <a
            href="https://github.com/razd-cli/razd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-fd-border bg-fd-background px-8 py-3 text-sm font-semibold text-fd-foreground shadow-sm transition-colors hover:bg-fd-secondary"
          >
            Посмотреть на GitHub
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 pb-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-fd-border bg-fd-card p-6 text-center">
            <div className="flex justify-center mb-4">
              <Rocket className="w-8 h-8 text-fd-muted-foreground" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Автоматизация настройки проекта</h3>
            <p className="text-fd-muted-foreground text-sm">
              Одна команда для клонирования, установки инструментов и запуска настройки. Больше никаких многоэтапных инициализаций проектов.
            </p>
          </div>
          <div className="rounded-xl border border-fd-border bg-fd-card p-6 text-center">
            <div className="flex justify-center mb-4">
              <Globe className="w-8 h-8 text-fd-muted-foreground" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Кроссплатформенность</h3>
            <p className="text-fd-muted-foreground text-sm">
              Работает одинаково на Windows, macOS и Linux без дополнительной настройки.
            </p>
          </div>
          <div className="rounded-xl border border-fd-border bg-fd-card p-6 text-center">
            <div className="flex justify-center mb-4">
              <Package className="w-8 h-8 text-fd-muted-foreground" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Автоматическое управление инструментами</h3>
            <p className="text-fd-muted-foreground text-sm">
              Не нужно вручную устанавливать Node.js, Python, Go и другие инструменты — всё устанавливается автоматически через mise при настройке проекта.
            </p>
          </div>
        </div>
      </section>

      {/* Demo video */}
      <section className="px-4 pb-20">
        <h2 className="text-3xl font-bold text-center mb-8">Демонстрация</h2>
        <div className="max-w-3xl mx-auto">
          <DemoVideo />
        </div>
      </section>

      {/* Showcases */}
      <section className="px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Кейсы</h2>
          <p className="text-fd-muted-foreground text-center mb-8">
            Проекты, использующие Razd. Клонируйте и запускайте одной командой.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {showcases.map((page) => (
              <ShowcaseCard key={page.url} page={page} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/showcases"
              className="text-sm font-medium text-fd-primary hover:underline"
            >
              Все кейсы →
            </Link>
          </div>
        </div>
      </section>

      {/* Quick start */}
      <section className="px-4 pb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Быстрый старт</h2>
          <p className="text-fd-muted-foreground mb-6">
            Установите Razd одной командой:
          </p>
          <InstallCommand />
          <div className="mt-4 rounded-lg bg-fd-secondary p-4 font-mono text-sm">
            <span className="text-fd-muted-foreground select-none mr-2">$</span>
            <span className="text-fd-primary font-semibold">razd up https://github.com/razd-cli/razd-nodejs-example</span>
          </div>
        </div>
      </section>
    </div>
  );
}