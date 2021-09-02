module.exports = {
  client: {
    service: {
      name: 'my-graphql-app',
      url: `http://192.168.10.233:8888/graphql`,
    },
    includes: ['./src/graphql/operations/**/*.{gql,graphql}'],
  },
}
