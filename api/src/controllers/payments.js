class PaymentController {
  constructor(subscriptionService) {
    this.subscriptionService = subscriptionService;
  }

  async getPaymentLink(_req, res, next) {
    try {
      const payment = await this.subscriptionService.createPayment();

      return res.json(payment);
    } catch (error) {
      next(error);

      return res
        .status(500)
        .json({ error: true, msg: 'Failed to create payment' });
    }
  }

  async getSubscriptionLink(_req, res, next) {
    try {
      const subscription = await this.subscriptionService.createSubscription();

      return res.json(subscription);
    } catch (error) {
      next(error);

      return res
        .status(500)
        .json({ error: true, msg: 'Failed to create subscription' });
    }
  }
}

module.exports = PaymentController;
