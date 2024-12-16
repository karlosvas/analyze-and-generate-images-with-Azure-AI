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
      if (
        result.message.includes(
          "Your prompt may contain text that is not allowed by our safety system."
        )
      ) {
        toast.error("The text entered is not allowed for security reasons");
      }
    } else if (result.error.message) {
      if (
        result.error.message.includes("The provided image url is not valid.")
      ) {
        toast.error(
          "An error occurred while analyzing the image, pls try valid image url"
        );
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

  if (!isConfigured())
    return <h1>Key or endpoint not configured for cognitive services</h1>;

  return (
    <>
      <header>
        <a
          href="https://github.com/karlosvas/analyze-and-generate-images-with-Azure-AI"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="50"
            height="50"
            viewBox="0 0 48 48"
          >
            <circle cx="28" cy="28" r="18" fill="#9fa8da"></circle>
            <path
              fill="none"
              stroke="#18193f"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M35.054,38.836	C31.97,41.137,28.144,42.5,24,42.5C13.783,42.5,5.5,34.217,5.5,24c0-2.917,0.675-5.676,1.878-8.13"
            ></path>
            <path
              fill="none"
              stroke="#18193f"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M13.869,8.518	C16.779,6.61,20.26,5.5,24,5.5c10.217,0,18.5,8.283,18.5,18.5c0,2.941-0.686,5.721-1.907,8.19"
            ></path>
            <path
              fill="#18193f"
              d="M34,23c0-1.574-0.576-3.038-1.558-4.275c0.442-1.368,0.93-3.771-0.242-5.648	c-2.251,0-3.73,1.545-4.436,2.514C26.602,15.213,25.333,15,24,15s-2.602,0.213-3.764,0.591c-0.706-0.969-2.184-2.514-4.436-2.514	c-1.328,2.126-0.526,4.45-0.073,5.43C14.638,19.788,14,21.334,14,23c0,3.78,3.281,6.94,7.686,7.776	c-1.309,0.673-2.287,1.896-2.587,3.38h-1.315c-1.297,0-1.801-0.526-2.502-1.415c-0.692-0.889-1.437-1.488-2.331-1.736	c-0.482-0.051-0.806,0.316-0.386,0.641c1.419,0.966,1.516,2.548,2.085,3.583C15.168,36.161,16.229,37,17.429,37H19v5.942h10v-7.806	c0-1.908-1.098-3.544-2.686-4.36C30.719,29.94,34,26.78,34,23z"
            ></path>
          </svg>
        </a>
      </header>
      <main>
        <h1>Universe Cloud Skills</h1>
        <form action="127.0.0.1" method="get">
          <input
            type="text"
            name="get_cat"
            value={inputText}
            onChange={(event) => setinputText(event.target.value)}
            placeholder="Esciba URL para analizar o texto para generar imagen"
          />
          <button
            onClick={getImageInfo}
            disabled={subscription}
            className={subscription ? "subscription" : ""}
          >
            Analizar
          </button>
          <button
            onClick={getGenerateImg}
            disabled={subscription}
            className={subscription ? "subscription" : ""}
          >
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
