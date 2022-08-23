import { DeleteItemCommand, DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { marshall } from '@aws-sdk/util-dynamodb';

const client = new DynamoDBClient({
  region: 'sa-east-1',
});

const command = new DeleteItemCommand({
  TableName: 'favorite-submodules',
  Key: marshall({
    id: 'bla',
  }),
});

try {
  const result = await client.send(command);
  console.log(result);
} catch (e) {

}
