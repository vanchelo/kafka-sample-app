const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: `app-consumer-${Math.random()}`,
  brokers: [
    'localhost:29092'
  ],
});

const consumer = kafka.consumer({ groupId: 'date-group' });

async function main() {
  // Consuming
  await consumer.connect();
  await consumer.subscribe({ topic: 'current-date', fromBeginning: false });

  await consumer.run({
    async eachMessage({ topic, partition, message }) {
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      });
    },
  });
};

main()
  .catch(console.error);
