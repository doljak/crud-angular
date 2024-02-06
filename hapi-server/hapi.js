"use strict";

const Hapi = require("@hapi/hapi");

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
    routes: {
      cors: true,
    },
  });

  server.route({
    method: "GET",
    path: "/courses",
    handler: (request, h) => {
      return [
        {
          _id: "1",
          name: "Angular",
          category: "Front end",
        },
        {
          _id: "2",
          name: "Spring boot",
          category: "Back end",
        },
        {
          _id: "3",
          name: "Node",
          category: "FullStack",
        },
        {
          _id: "4",
          name: "MongoDB",
          category: "DB No SQL",
        },
      ];
    },
  });

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
