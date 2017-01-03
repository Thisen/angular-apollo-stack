import { Express } from 'express';
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express';

export class GraphQLServer {
  constructor(app: Express, port: number) {

    app.use('/graphiql', graphiqlExpress({
      endpointURL: '/graphql',
    }));

    app.listen(port, () => {
      console.log(`GraphQL server is now running on http://localhost:${port}/graphql`);
      console.log(`GraphiQL server is now running on http://localhost:${port}/graphiql`);
    });
  }

}
