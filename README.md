# 🍓 cmyk-strawberry

Tutti Frutti es un juego de lápiz y papel que consiste en buscar palabras a partir de una letra y de una serie de categorías definidas previamente. En esta oportunidad lo vamos a llevar a lo digital, donde se podrá disfrutar jugando con amigos, para divertirse y pasar un buen rato. El ganador del juego es quien logre conseguir más puntos a lo largo de las diferentes rondas.

## 🌐 URL

#### Web

[URL](https://cmyk-strawberry.web.app/)

#### Informacion

[Notion](https://maxicris.notion.site/maxicris/Tutti-Frutti-CMYK-4-0-2b0647c591be406d859bed2c63d74531)

#### UI

[Figma](https://www.figma.com/file/FB4cduz9ZvdRrFHuyBVs3N/%C2%B0-Tutti-Frutti-%7C-CMYK-4.0?node-id=1%3A3)

#### Firebase

[Proyecto](https://console.firebase.google.com/u/0/project/cmyk-strawberry/overview?hl=es)

## ⚛️ Tecnologias

Se utilizara React como framework para el Frontend y Firebase para guardar las configuraciones de las partidas con base de datos en tiempo real.
Ademas vamos a usar Typescript y SCSS.

## 👨‍💻 Como iniciar

```bash
git clone https://github.com/frontendcafe/cmyk-strawberry.git
cd cmyk-strawberry
npm install && npm run dev
```

## 👩‍💻 Consideraciones para codear
El codigo, los commits y las ramas deben estar en ingles. 
Sobre la estructura de archivos vamos a utilizar atomic design. Existira una carpeta atoms, molecules y organisms que estara directamente relacionado con el figma.

## 👩‍💻 Consideraciones para realizar un deploy

1. Instala Node.js. Firebase CLI requiere Node.js 10.13.0 o versiones posteriores.

2. Ejecuta el siguiente comando para instalar Firebase CLI con npm:

```bash
npm install -g firebase-tools
```

Esto habilita el comando firebase disponible de manera global

3. Accede a Firebase con tu Cuenta de Google ejecutando el siguiente comando

```bash
firebase login
```

4. Ejecuta el script ``` npm run deploy ```
