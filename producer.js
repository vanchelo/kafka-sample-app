const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'app-producer',
  brokers: [
    'localhost:29092'
  ],
});

const producer = kafka.producer();

async function main() {
  await producer.connect();

  setInterval(() => {
    producer.send({
      topic: 'current-date',
      messages: [
        { value: JSON.stringify({ date: new Date().toISOString() }) },
      ],
    });
  }, 3000);
};

main()
  .catch(console.error);
