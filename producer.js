const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'app-producer',
  brokers: ['localhost:29092'],
});

const producer = kafka.producer();

const run = async () => {
  await producer.connect();

  setInterval(() => {
    producer.send({
      topic: 'current-date',
      messages: [
        { value: JSON.stringify({ date: new Date().toISOString() }) },
      ],
    });
  }, 1600);
};

run().catch(console.error);
