/**
 * Script para generar un informe de evaluación basado en los resultados de los tests
 */

const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

// Ruta donde Jest guarda los resultados
const testResultsPath = path.join(__dirname, "..", "test-results.json");

// Función principal
async function generateReport() {
  try {
    // Verificar si existe el archivo de resultados
    if (!fs.existsSync(testResultsPath)) {
      console.error(
        chalk.red("No se encontró el archivo de resultados de los tests")
      );
      process.exit(1);
    }

    // Leer los resultados
    const testResults = JSON.parse(fs.readFileSync(testResultsPath, "utf8"));

    // Analizar resultados
    const totalTests = testResults.numTotalTests;
    const passedTests = testResults.numPassedTests;
    const failedTests = totalTests - passedTests;
    const successRate = Math.round((passedTests / totalTests) * 100);

    // Generar feedback específico por ejercicio
    const exerciseFeedback = testResults.testResults.map((result) => {
      const exerciseName = path.basename(result.name, ".test.js");
      const passed = result.status === "passed";

      // Extraer mensajes de error para ejercicios fallidos
      let errorMessages = [];
      if (!passed) {
        result.assertionResults.forEach((assertion) => {
          if (assertion.status === "failed") {
            errorMessages.push(
              `- ${assertion.title}: ${
                assertion.failureMessages[0].split("\n")[0]
              }`
            );
          }
        });
      }

      return {
        exercise: exerciseName,
        passed,
        feedback: passed
          ? "✅ ¡Excelente! Has completado correctamente este ejercicio."
          : `❌ Hay problemas en este ejercicio:\n${errorMessages.join("\n")}`,
      };
    });

    // Generar consejos personalizados basados en patrones de errores
    const tips = generateTips(testResults);

    // Crear el informe final
    const report = {
      summary: `Has completado ${passedTests} de ${totalTests} ejercicios (${successRate}% de éxito).`,
      exerciseResults: exerciseFeedback,
      tips,
      feedback: formatFeedback(exerciseFeedback, tips),
    };

    // Guardar el informe
    fs.writeFileSync(
      path.join(__dirname, "..", "evaluation-report.json"),
      JSON.stringify(report, null, 2)
    );

    console.log(chalk.green("Informe de evaluación generado correctamente"));

    // Mostrar un resumen en la consola
    console.log(chalk.bold("\nResumen de la evaluación:"));
    console.log(report.summary);
    console.log(chalk.bold("\nConsejos para mejorar:"));
    console.log(tips.join("\n"));
  } catch (error) {
    console.error(chalk.red("Error al generar el informe:"), error);
    process.exit(1);
  }
}

// Función para generar consejos basados en patrones de errores
function generateTips(testResults) {
  const tips = [];
  const failedAssertions = [];

  // Recopilar todas las aserciones fallidas
  testResults.testResults.forEach((result) => {
    result.assertionResults.forEach((assertion) => {
      if (assertion.status === "failed") {
        failedAssertions.push({
          title: assertion.title,
          message: assertion.failureMessages[0],
        });
      }
    });
  });

  // Analizar patrones comunes de errores
  const syntaxErrors = failedAssertions.filter(
    (a) =>
      a.message.includes("SyntaxError") ||
      a.message.includes("unexpected token")
  ).length;

  const typeErrors = failedAssertions.filter(
    (a) =>
      a.message.includes("TypeError") ||
      a.message.includes("is not a function") ||
      a.message.includes("cannot read property")
  ).length;

  const referenceErrors = failedAssertions.filter(
    (a) =>
      a.message.includes("ReferenceError") ||
      a.message.includes("is not defined")
  ).length;

  // Generar consejos específicos basados en los patrones
  if (syntaxErrors > 0) {
    tips.push(
      "📝 Revisa la sintaxis de tu código. Presta atención a los paréntesis, llaves y puntos y comas."
    );
  }

  if (typeErrors > 0) {
    tips.push(
      "🔍 Verifica los tipos de datos que estás utilizando y asegúrate de que las funciones existen antes de llamarlas."
    );
  }

  if (referenceErrors > 0) {
    tips.push(
      "⚠️ Asegúrate de declarar todas las variables antes de usarlas y de utilizar los nombres exactos solicitados en los ejercicios."
    );
  }

  // Consejos generales
  if (testResults.numFailedTests > testResults.numPassedTests) {
    tips.push(
      "🔄 Intenta resolver primero los ejercicios más sencillos para ganar confianza."
    );
  }

  if (testResults.numPassedTests > 0) {
    tips.push(
      "👍 ¡Buen trabajo! Sigue practicando para mejorar tus habilidades."
    );
  }

  return tips;
}

// Función para formatear el feedback en formato markdown
function formatFeedback(exerciseResults, tips) {
  let markdown = "### Resultados por ejercicio\n\n";

  // Agrupar por categorías
  const categories = {};
  exerciseResults.forEach((result) => {
    const category = result.exercise.split("-")[0];
    if (!categories[category]) {
      categories[category] = [];
    }
    categories[category].push(result);
  });

  // Generar markdown por categoría
  Object.keys(categories)
    .sort()
    .forEach((category) => {
      markdown += `#### ${getCategoryName(category)}\n\n`;

      categories[category].forEach((result) => {
        markdown += `- **${result.exercise}**: ${
          result.passed ? "✅ Correcto" : "❌ Incorrecto"
        }\n`;
        if (!result.passed) {
          markdown += `  ${result.feedback.replace(/\n/g, "\n  ")}\n`;
        }
      });

      markdown += "\n";
    });

  // Añadir consejos
  markdown += "### Consejos para mejorar\n\n";
  tips.forEach((tip) => {
    markdown += `- ${tip}\n`;
  });

  return markdown;
}

// Función para obtener el nombre de la categoría
function getCategoryName(categoryCode) {
  const categories = {
    "01": "Variables y Constantes",
    "02": "Operadores",
    "03": "Comparadores",
    "04": "Condicionales",
    "05": "Bucles",
    "06": "Funciones",
    "07": "Arrays",
    "08": "Objetos",
    "09": "Ejercicios Mixtos",
  };

  return categories[categoryCode] || "Otros ejercicios";
}

// Ejecutar la función principal
generateReport();
