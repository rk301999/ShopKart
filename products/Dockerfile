FROM node

WORKDIR /app/product

COPY package.json package-lock.json .

RUN npm install

COPY ..

EXPOSE 8002

CMD ["npm","start"]