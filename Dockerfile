# pull the base image
FROM node:13.11.10-alpine

# set the working direction
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./

COPY package-lock.json ./

FROM nginx:1.17.1-alpine
COPY --from=build-step /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

#RUN npm install

# add app
#COPY . ./

# start app
#CMD ["npm", "start"]