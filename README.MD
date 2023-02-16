# Server 

## Available Scripts

### Running the server.

```bash
    npm start
```

## Learn More

The backend uses the following technologies:

- **Cloudinary** [Docs](https://cloudinary.com/developers)
- **Cors** [Docs](https://www.npmjs.com/package/cors)
- **Dotenv** [Docs](https://www.npmjs.com/package/dotenv)
- **Express** [Docs](https://expressjs.com/)
- **Mongoose** [Docs](https://mongoosejs.com/)
- **Nodemon** [Docs](https://nodemon.io/)

## License

MIT

## Notes

### Data Flow

- Http Request => Routes => Controllers => Models => Database
- Route = Endpoint
- Controller = Logic for each route

### Sessions and atomicity

Using Mongoose to create a new session when creating a new property makes the operation an atomic transaction. This means it either succeeds, or fails. The main benefit is that it prevents updates to the database happening only partially.
