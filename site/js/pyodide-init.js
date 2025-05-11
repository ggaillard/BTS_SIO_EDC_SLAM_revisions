// Chargement de Pyodide et initialisation
let pyodideReadyPromise;

async function initPyodide() {
  if (!pyodideReadyPromise) {
    pyodideReadyPromise = new Promise(async (resolve, reject) => {
      try {
        // Chargement de Pyodide
        console.log("Chargement de Pyodide...");
        self.pyodide = await loadPyodide({
          indexURL: "https://cdn.jsdelivr.net/pyodide/v0.23.4/full/"
        });
        
        // Installation des packages nécessaires
        console.log("Installation des packages...");
        await self.pyodide.loadPackagesFromImports(`
          import numpy
          import matplotlib
          import pandas
        `);
        
        // Initialisation terminée
        console.log("Pyodide est prêt!");
        resolve(self.pyodide);
      } catch (error) {
        console.error("Erreur lors de l'initialisation de Pyodide:", error);
        reject(error);
      }
    });
  }
  return pyodideReadyPromise;
}

// Démarrer le chargement dès que possible
document.addEventListener('DOMContentLoaded', initPyodide);