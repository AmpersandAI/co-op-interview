# VideoStreamApp

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

## Features

- NestJS + Mongoose
- MongoDB
- React|Vue as frontend

## Run Locally

Go to the project directory

Set up MongoDB docker container (Make sure docker is running)

```bash
docker run --name mongodb -d -p 27017:27017 mongo
```

Install dependencies

```bash
(cd backend && npm install) & (cd frontend && npm install)
```

Start for development

```bash
(cd backend && npm run start:dev) & (cd frontend && npm start)
```

## License

[MIT](https://choosealicense.com/licenses/mit/)