'use client';

export function DemoVideo() {
  return (
    <video
      controls
      className="w-full rounded-xl border border-fd-border max-h-[500px]"
      suppressHydrationWarning
    >
      <source src="https://razd-cli.com/2025-11-03 08-58-58.mp4" type="video/mp4" />
      Ваш браузер не поддерживает видео.
    </video>
  );
}