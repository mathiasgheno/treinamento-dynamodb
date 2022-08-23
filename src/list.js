import { DynamoDBClient, ScanCommand } from '@aws-sdk/client-dynamodb';
import { marshall, unmarshall } from '@aws-sdk/util-dynamodb';

const client = new DynamoDBClient({
  region: 'sa-east-1',
});

const command = new ScanCommand({
  TableName: 'favorite-submodules',
  FilterExpression: '#user = :user OR #name = :name',
  ExpressionAttributeNames: {
    '#user': 'user',
    '#name': 'name',
  },
  ExpressionAttributeValues: marshall({
    ':user': 'mathias',
    ':name': 'submodules',
  }),
  Limit: 50,
});

try {
  const {Items} = await client.send(command);
  console.log(Items.map(v => unmarshall(v)));
} catch (e) {
  console.log(e);
}
