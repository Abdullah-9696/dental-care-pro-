<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="color-scheme" content="light dark">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&display=swap" rel="stylesheet">

    <!-- Vite -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body class="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 antialiased flex flex-col items-center justify-center p-5 sm:p-8">

    <!-- Auth links -->
    @if (Route::has('login'))
    <header class="w-full max-w-5xl flex justify-end mb-8">
        <nav class="flex gap-4 text-sm font-medium">
            @auth
                <a href="{{ url('/dashboard') }}"
                   class="px-5 py-2 border border-neutral-300 dark:border-neutral-700 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
                    Dashboard
                </a>
            @else
                <a href="{{ route('login') }}"
                   class="px-5 py-2 hover:underline">
                    Log in
                </a>

                @if (Route::has('register'))
                    <a href="{{ route('register') }}"
                       class="px-5 py-2 border border-orange-600 bg-orange-600 text-white rounded hover:bg-orange-700 transition">
                        Register
                    </a>
                @endif
            @endauth
        </nav>
    </header>
    @endif

    <main class="w-full max-w-5xl grid lg:grid-cols-2 gap-0 bg-white dark:bg-neutral-900 rounded-xl shadow-xl overflow-hidden">

        <!-- Left - Content -->
        <div class="p-8 lg:p-12 order-2 lg:order-1 flex flex-col justify-center">
            <h1 class="text-2xl sm:text-3xl font-semibold mb-3">Let's get started</h1>

            <p class="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                Laravel has a rich and powerful ecosystem.<br class="hidden sm:inline">
                Here are the best places to begin.
            </p>

            <ul class="space-y-6 mb-10">
                <li class="flex gap-4">
                    <div class="flex-shrink-0 mt-1">
                        <div class="w-5 h-5 rounded-full border-2 border-neutral-300 dark:border-neutral-600 flex items-center justify-center">
                            <div class="w-2.5 h-2.5 rounded-full bg-neutral-400 dark:bg-neutral-500"></div>
                        </div>
                    </div>
                    <div>
                        <a href="https://laravel.com/docs" target="_blank" class="font-medium text-orange-600 dark:text-orange-400 hover:underline inline-flex items-center gap-1">
                            Official Documentation
                            <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </li>

                <li class="flex gap-4">
                    <div class="flex-shrink-0 mt-1">
                        <div class="w-5 h-5 rounded-full border-2 border-neutral-300 dark:border-neutral-600 flex items-center justify-center">
                            <div class="w-2.5 h-2.5 rounded-full bg-neutral-400 dark:bg-neutral-500"></div>
                        </div>
                    </div>
                    <div>
                        <a href="https://laracasts.com" target="_blank" class="font-medium text-orange-600 dark:text-orange-400 hover:underline inline-flex items-center gap-1">
                            Laracasts video tutorials
                            <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </li>
            </ul>

            <div>
                <a href="https://cloud.laravel.com" target="_blank"
                   class="inline-block px-7 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition">
                    Deploy to Laravel Cloud →
                </a>
            </div>
        </div>

        <!-- Right - Visual / Logo area -->
        <div class="relative bg-gradient-to-br from-orange-50 to-red-50 dark:from-red-950/30 dark:to-orange-950/20 lg:order-2 min-h-[320px] lg:min-h-auto flex items-center justify-center p-8 overflow-hidden">

            <!-- Simple Laravel logo (you can replace with full SVG later) -->
            <div class="text-center">
                <div class="text-8xl sm:text-9xl font-black text-orange-600 dark:text-orange-500 tracking-tight">
                    LARAVEL
                </div>
                <div class="mt-2 text-xl sm:text-2xl text-neutral-600 dark:text-neutral-400 font-medium">
                    Think PHP. Think Elegant.
                </div>
            </div>

            <!-- Optional: subtle grid / noise background -->
            <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] pointer-events-none"
                 style="background-image: radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0); background-size: 40px 40px;">
            </div>
        </div>

    </main>

</body>
</html>