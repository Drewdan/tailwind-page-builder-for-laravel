<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta Information -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
	@vite(['public/vendor/page-builder/js/style.css'])

    <title>Page Builder - {{ config('app.name') ? ' - ' . config('app.name') : '' }}</title>

    <!-- Style sheets-->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:300,400,500,600" rel="stylesheet"/>
</head>
<body>
	<div id="app"></div>
</body>
	@vite(['public/vendor/page-builder/js/tailwind-page-builder.js'])
</html>

{{--<script src="{{ asset('vendor/page-builder/tailwind-page-builder.js') }}" type="module"></script>--}}
