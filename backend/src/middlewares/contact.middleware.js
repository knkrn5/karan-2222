import rateLimit from 'express-rate-limit';

const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 60 minutes
  max: 3, // Limit each IP to 3 requests
  message: { success: false, status: "Failed, Too many requests sent..." },
});

export { contactLimiter };
