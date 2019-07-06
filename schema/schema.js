

const { generateRandomData } = require('../src/utils.js');
const movies = generateRandomData(['id', 'name', 'genre'], 5);
const directors = generateRandomData(['id', 'name', 'lastname'], 5);

const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLList } = graphql;

const MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        director: {
            type: new GraphQLList(DirectorsType),
            resolve(parent, args){
                return directors.filter( ({id}) => id != parent.id )
            }
        }
    })
});

const DirectorsType = new GraphQLObjectType({
    name: 'Director',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        lastname: { type: GraphQLString },
    })
});

const query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        movie: {
            type: MovieType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return movies.find( ({id}) => id == args.id )
            }
        },
        director: {
            type: MovieType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return movies.find( ({id}) => id == args.id )
            }
        }
    }
});

module.exports = new GraphQLSchema({ query });