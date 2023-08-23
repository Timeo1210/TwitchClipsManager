FROM node:16.14-alpine 
ENV NODE_ENV=production 
WORKDIR /usr/src/app 
COPY package.json ./ 
COPY yarn.lock ./ 
RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers make python3 && \
  npm install --quiet node-gyp -g &&\
  yarn install --frozen-lockfile  && \
  apk del native-deps
COPY ./build ./build 
COPY .env.example .env.example 
EXPOSE 4990 
CMD ["node", "build/index.js"] 
USER node