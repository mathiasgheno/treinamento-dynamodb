import { CreateTableCommand, DynamoDBClient } from '@aws-sdk/client-dynamodb';

const client = new DynamoDBClient({
  region: 'sa-east-1',
});

const command = new CreateTableCommand({
  TableName: 'favorite-submodules',
  AttributeDefinitions: [
    {
      AttributeName: 'id',
      AttributeType: 'S',
    }
  ],
  KeySchema: [
    {
      AttributeName: 'id',
      KeyType: 'HASH',
    }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1,
  }
});

await client.send(command);
