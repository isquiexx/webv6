module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: '640px',   
      md: '768px',    
      lg: '1024px',   
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        /* Primary Colors */
        primary: {
          background: "var(--bg-primary)",
          text: "var(--text-primary)",
        },
        secondary: {
          background: "var(--bg-white)",
          text: "var(--text-secondary)",
        },
        accent: {
          background: "var(--bg-accent)",
          text: "var(--text-accent)",
        },
        /* Text Colors */
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          accent: "var(--text-accent)",
          white: "var(--text-white)",
          'white-muted': "var(--text-white-muted)",
        },
        /* Background Colors */
        background: {
          primary: "var(--bg-primary)",
          accent: "var(--bg-accent)",
          white: "var(--bg-white)",
        },
        /* Border Colors */
        border: {
          primary: "var(--border-primary)",
          'white-muted': "var(--border-white-muted)",
          'white-secondary': "var(--border-white-secondary)",
        },
        /* Component-specific Colors */
        header: {
          text: "var(--header-text)",
        },
        button: {
          'primary-bg': "var(--button-primary-bg)",
          'primary-text': "var(--button-primary-text)",
          'secondary-bg': "var(--button-secondary-bg)",
          'secondary-text': "var(--button-secondary-text)",
        },
        dropdown: {
          text: "var(--dropdown-text)",
          border: "var(--dropdown-border)",
        },
        input: {
          text: "var(--input-text)",
          border: "var(--input-border)",
        },
      },
      /* Typography */
      fontSize: {
        'xs': 'var(--font-size-xs)',
        'sm': 'var(--font-size-sm)',
        'base': 'var(--font-size-base)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)',
        '5xl': 'var(--font-size-5xl)',
        '6xl': 'var(--font-size-6xl)',
      },
      fontWeight: {
        'normal': 'var(--font-weight-normal)',
        'medium': 'var(--font-weight-medium)',
        'bold': 'var(--font-weight-bold)',
      },
      lineHeight: {
        'xs': 'var(--line-height-xs)',
        'sm': 'var(--line-height-sm)',
        'base': 'var(--line-height-base)',
        'lg': 'var(--line-height-lg)',
        'xl': 'var(--line-height-xl)',
        '2xl': 'var(--line-height-2xl)',
        '3xl': 'var(--line-height-3xl)',
        '4xl': 'var(--line-height-4xl)',
        '5xl': 'var(--line-height-5xl)',
        '6xl': 'var(--line-height-6xl)',
        '7xl': 'var(--line-height-7xl)',
        '8xl': 'var(--line-height-8xl)',
        '9xl': 'var(--line-height-9xl)',
        '10xl': 'var(--line-height-10xl)',
        '11xl': 'var(--line-height-11xl)',
        '12xl': 'var(--line-height-12xl)',
      },
      /* Spacing */
      spacing: {
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
        '4xl': 'var(--spacing-4xl)',
        '5xl': 'var(--spacing-5xl)',
        '6xl': 'var(--spacing-6xl)',
        '7xl': 'var(--spacing-7xl)',
        '8xl': 'var(--spacing-8xl)',
        '9xl': 'var(--spacing-9xl)',
        '10xl': 'var(--spacing-10xl)',
        '11xl': 'var(--spacing-11xl)',
        '12xl': 'var(--spacing-12xl)',
        '13xl': 'var(--spacing-13xl)',
        '14xl': 'var(--spacing-14xl)',
        '15xl': 'var(--spacing-15xl)',
        '16xl': 'var(--spacing-16xl)',
        '17xl': 'var(--spacing-17xl)',
        '18xl': 'var(--spacing-18xl)',
        '19xl': 'var(--spacing-19xl)',
        '20xl': 'var(--spacing-20xl)',
        '21xl': 'var(--spacing-21xl)',
        '22xl': 'var(--spacing-22xl)',
        '23xl': 'var(--spacing-23xl)',
        '24xl': 'var(--spacing-24xl)',
      },
      /* Border Radius */
      borderRadius: {
        'none': 'var(--radius-none)',
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        '3xl': 'var(--radius-3xl)',
        '4xl': 'var(--radius-4xl)',
        '5xl': 'var(--radius-5xl)',
        '6xl': 'var(--radius-6xl)',
        'full': 'var(--radius-full)',
      },
    },
  },
  plugins: []
};