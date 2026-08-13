// Place this ONCE in app/layout.tsx, as the first child inside <body>,
// behind {children}. Do NOT add it inside individual section components —
// that was the cause of the mismatched backgrounds across sections.
//
// Example usage in app/layout.tsx:
//
//   <body>
//     <ThemeProvider ...>
//       <BackgroundGrid />
//       <div className="relative z-10">
//         {children}
//       </div>
//     </ThemeProvider>
//   </body>

export default function BackgroundGrid() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      {/* One grid pattern for the entire site — same density, same opacity,
          same fade mask, in both light and dark mode. */}
      <div
        className="absolute inset-0
          bg-[linear-gradient(to_right,#e2e8f01a_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f01a_1px,transparent_1px)]
          dark:bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)]
          bg-[size:4rem_4rem]
          [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_60%,transparent_100%)]"
      />
    </div>
  )
}
