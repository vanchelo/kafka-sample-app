const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'app-consumer-' + Math.random(),
  brokers: ['localhost:29092'],
});

const consumer = kafka.consumer({ groupId: 'date-group' });

const run = async () => {
  // Consuming
  await consumer.connect();
  await consumer.subscribe({ topic: 'current-date', fromBeginning: false });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      });
    },
  });
};

run().catch(console.error);
