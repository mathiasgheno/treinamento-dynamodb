import { PutItemCommand, DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { marshall } from '@aws-sdk/util-dynamodb';
import { v4 } from 'uuid';

const submodule = {
  id: v4(),
  user: 'lucas',
  name: 'submodule',
  favorite: true,
}

const client = new DynamoDBClient({
  region: 'sa-east-1',
});

const Item = marshall(submodule);

const command = new PutItemCommand({
  TableName: 'favorite-submodules',
  Item,
});

try {
  await client.send(command);
} catch (e) {
  console.log('did not work');
  console.log(e);
}
