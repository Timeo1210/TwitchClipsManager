FROM node:14.16-alpine 
ENV NODE_ENV=production 
WORKDIR /usr/src/app 
COPY package.json ./ 
COPY yarn.lock ./ 
RUN yarn install --frozen-lockfile 
COPY ./build ./build 
COPY .env.example .env.example 
EXPOSE 4990 
CMD ["node", "build/index.js"] 
USER node