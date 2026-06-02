import Image from 'next/image';
import Link from 'next/link';
import { DemoVideo } from '@/components/demo-video';
import { InstallCommand } from '@/components/install-command';

export default function HomePage() {
  return (
    <div className="flex flex-col flex-1">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <Image
          src="/logo.png"
          alt="Razd"
          width={128}
          height={128}
          className="mb-8"
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
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-lg font-semibold mb-2">Автоматизация настройки проекта</h3>
            <p className="text-fd-muted-foreground text-sm">
              Одна команда для клонирования, установки инструментов и запуска настройки. Больше никаких многоэтапных инициализаций проектов.
            </p>
          </div>
          <div className="rounded-xl border border-fd-border bg-fd-card p-6 text-center">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-lg font-semibold mb-2">Кроссплатформенность</h3>
            <p className="text-fd-muted-foreground text-sm">
              Работает одинаково на Windows, macOS и Linux без дополнительной настройки.
            </p>
          </div>
          <div className="rounded-xl border border-fd-border bg-fd-card p-6 text-center">
            <div className="text-4xl mb-4">📦</div>
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