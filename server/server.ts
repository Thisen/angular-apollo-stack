import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as Router from "koa-router";
import { graphqlKoa } from 'graphql-server-koa';

const myGraphQLSchema = {};

const app = new Koa();
const router = new Router();
const PORT = 3000;


app.use(bodyParser());

router.post('/graphql', graphqlKoa({schema: myGraphQLSchema}));
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(PORT);
