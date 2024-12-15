# Proyecto de Análisis de API con Integración de Azure Services

Este proyecto es parte del desafío del curso de Microsoft Learn, donde se desarrolló una aplicación web inteligente utilizando los servicios de **Azure Cognitive Services** y **Azure OpenAI**. La aplicación integra funcionalidades de **Computer Vision**, aprovechando los modelos avanzados de análisis de imágenes, junto con capacidades generativas de inteligencia artificial.

## Servicios de Microsoft Auzre utilizados


  <img src="https://github.com/user-attachments/assets/b1a9517a-15de-45ef-8bbc-399750bde604" alt="01007-icon-service-Static-Apps" height="100" width="170"/>
  <img src="https://github.com/user-attachments/assets/0a47736c-8ebc-4a55-9828-537a9f73a452" alt="03438-icon-service-Azure-OpenAI" height="100" width="100"/>
  <img src="https://github.com/user-attachments/assets/df0986fd-b3b6-4e05-b4c6-55e9079e4859" alt="00792-icon-service-Computer-Vision" height="100" width="140"/>
  
  Aplicación web estática | Azure OpenAI | Computer Vision



## Descripción del Proyecto

El desafío consistió en desarrollar una aplicación web que:

1. **Analice una imagen existente** usando el servicio de **Computer Vision** de Azure.
2. **Enriquezca la solución con inteligencia artificial generativa** utilizando **Azure OpenAI** para generar una nueva imagen basada en una descripción de texto.
3. **Despliegue la aplicación en la nube** como una aplicación web estática utilizando **Azure Static Web Apps**.
4. **Automatice el proceso de despliegue** creando una canalización de CI/CD con **GitHub Actions**.

## Servicios Utilizados

- **Azure Computer Vision**: Se utilizó para el análisis de imágenes, extrayendo información relevante de imágenes existentes (etiquetas, objetos, descripciones).
- **Azure OpenAI**: Integrado para generar nuevas imágenes a partir de descripciones de texto utilizando un modelo de base grande (Florence), como parte de la inteligencia artificial generativa.
- **Azure Static Web Apps**: Utilizado para desplegar la aplicación como una aplicación web estática, simplificando el proceso de publicación y gestión de la misma en la nube.
- **GitHub Actions (CI/CD)**: Se implementó una canalización de CI/CD para automatizar el despliegue continuo del proyecto.

## Funcionalidades

- **Análisis de Imagen**: La aplicación utiliza el servicio de **Computer Vision** para analizar imágenes cargadas por los usuarios y extraer información como etiquetas, objetos, descripciones, etc.
- **Generación de Imágenes**: A través de **Azure OpenAI**, la aplicación genera imágenes basadas en una descripción de texto proporcionada por el usuario.
- **Interfaz Web**: Una interfaz sencilla donde los usuarios pueden cargar imágenes para su análisis o proporcionar descripciones para la generación de nuevas imágenes.
- **Despliegue en Azure**: La aplicación está desplegada como una aplicación web estática en **Azure Static Web Apps**, lo que permite un acceso rápido y seguro.

## Requisitos Previos

- Cuenta de **Azure**.
- Cuenta de **GitHub** para la implementación de la canalización CI/CD.
- Conocimientos básicos de **HTML**, **JavaScript**, y **Git**.
