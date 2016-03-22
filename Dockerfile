FROM nodesource/trusty:5.9

ENV NODE_PATH /usr/lib/node_modules
ENV NODE_ENV development
ENV GRPC_VERSION 0.13

RUN npm install --verbose --progress=false -g grpc@${GRPC_VERSION}

VOLUME /usr/src/app
WORKDIR /usr/src/app

CMD ["npm", "start"]
