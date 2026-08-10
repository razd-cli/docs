'use client';

export function DemoVideo() {
  return (
    <video
      controls
      className="w-full rounded-xl border border-fd-border max-h-[500px]"
      suppressHydrationWarning
    >
      <source src="/Export-1786365905329.mp4" type="video/mp4" />
      Ваш браузер не поддерживает видео.
    </video>
  );
}