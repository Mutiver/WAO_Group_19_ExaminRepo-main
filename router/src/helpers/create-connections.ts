export const CreateRabbitMQString = () => {
  return `amqp://${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASSWORD}@${process.env.RABBITMQ_SERVICE}/`;
};

export const CreateTodoString = () => {
  return `${process.env.TODO_SERVICE}:50051`;
};

export const CreateAccountingString = () => {
  return `${process.env.ACCOUNTING_SERVICE}:50053`;
};

export const CreateAnalyticsString = () => {
  return `${process.env.ANALYTICS_SERVICE}:5081`;
};
