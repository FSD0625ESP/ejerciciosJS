/**
 * Configuración de Jest para la evaluación automática de ejercicios
 */

module.exports = {
  // Directorio donde Jest buscará los archivos de test
  testMatch: ["**/__tests__/**/*.js", "**/*.test.js"],

  // Ignorar estos directorios
  testPathIgnorePatterns: ["/node_modules/", "/.github/"],

  // Generar un informe de cobertura
  collectCoverage: true,
  coverageDirectory: "coverage",

  // Guardar los resultados en un archivo JSON para el generador de informes
  reporters: [
    "default",
    [
      "./node_modules/jest-html-reporter",
      {
        pageTitle: "Resultados de los Tests",
        outputPath: "./test-results.html",
      },
    ],
    [
      "jest-junit",
      {
        outputDirectory: ".",
        outputName: "test-results.xml",
      },
    ],
  ],

  // Configuración para el entorno de pruebas
  testEnvironment: "node",

  // Tiempo máximo de ejecución para cada test
  testTimeout: 5000,

  // Guardar los resultados en formato JSON para el generador de informes
  json: true,
  outputFile: "test-results.json",
};
