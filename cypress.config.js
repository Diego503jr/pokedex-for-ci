module.exports = {
    e2e: {
      setupNodeEvents(on, config) {
        // Puedes agregar eventos aquí si es necesario
      },
      specPattern: 'cypress/support/**/*.cy.{js,jsx,ts,tsx}',
      baseUrl: 'http://localhost:5000',
      supportFile: false,
    },
  };
  