module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    daisyui: {
        styled: true,
        themes: ['light'],
        base: true,
        utils: true,
        logs: true,
        rtl: false,
    },
    plugins: [
        require('daisyui')
    ],
}