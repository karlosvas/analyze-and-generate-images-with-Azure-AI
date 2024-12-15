import { isConfigured } from "./scripts/azure-config";
import { analyzeImage } from "./scripts/azure-image-analysis";
import { generateImage } from "./scripts/azure-image-generation";
import { useState } from "react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [inputText, setinputText] = useState("");
  const [subscription, setSubscription] = useState("");

  function manageErrorToast(result) {
    if (typeof result !== "object") return;

    if (result.message) {
      // No es una imagen valida
      if (result.message.includes("Your prompt may contain text that is not allowed by our safety system.")) {
        toast.error("The text entered is not allowed for security reasons");
      }
    } else if (result.error.message) {
      if (result.error.message.includes("The provided image url is not valid.")) {
        toast.error("An error occurred while analyzing the image, pls try valid image url");
      }
    } else toast.error("An error occurred while generating the image");
  }

  // Create elements to display the results
  function DisplayResults(src, result) {
    toast.dismiss();
    const root = document.getElementById("results");

    const h2 = document.createElement("h2");
    if (result.captionResult) h2.textContent = "Image Analysis";
    else if (result.created) h2.textContent = "Generated Image";
    else {
      // Response success but not valid
      manageErrorToast(result);
      return;
    }
    root.appendChild(h2);

    const image = document.createElement("img");
    image.src = src;
    root.appendChild(image);

    const reponse = document.createElement("pre");
    reponse.innerHTML = JSON.stringify(result, null, 2);
    root.appendChild(reponse);

    toast.success(`${h2.textContent} completed successfully`);
  }

  async function getImageInfo(event) {
    event.preventDefault();
    setSubscription(true);
    const features = ["Caption"];
    // const domainDetails = ["Celebrities", "Landmarks"];

    try {
      const result = await analyzeImage(inputText, {
        features: features,
        language: "en", // Caption no soporta español
      });
      DisplayResults(inputText, result);
    } catch (error) {
      // Error de peticion
      console.log("Error", error);
      DisplayResults("", error);
      console.error("Ocurrio errror", error);
    }
    setSubscription(false);
    setinputText("");
  }

  async function getGenerateImg(event) {
    event.preventDefault();
    setSubscription(true);
    try {
      toast.loading("Generating image...");
      const response = await generateImage(inputText);
      DisplayResults(response.data[0].url, response);
    } catch (error) {
      // Error de peticion
      DisplayResults("", error);
      console.error("Ocurrio un error", error);
    }
    setSubscription(false);
    setinputText("");
  }

  if (!isConfigured()) return <h1>Key or endpoint not configured for cognitive services</h1>;

  return (
    <>
      <main>
        <h1>Universe Cloud Skills</h1>
        <form action="127.0.0.1" method="get">
          <input
            type="text"
            name="get_cat"
            value={inputText}
            onChange={(event) => setinputText(event.target.value)}
            placeholder="Esciba URL para analizar o testo para generar imagen"
          />
          <button onClick={getImageInfo} disabled={subscription} className={subscription ? "subscription" : ""}>
            Analizar
          </button>
          <button onClick={getGenerateImg} disabled={subscription} className={subscription ? "subscription" : ""}>
            Generar
          </button>
        </form>
        <section id="results"></section>
      </main>
      <ToastContainer />
    </>
  );
}

export default App;
