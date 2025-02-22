import rateLimit from 'express-rate-limit';

const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 60 minutes
  max: 5, // Limit each IP to 5 requests
  message: { success: false, status: "Too many requests sent..." },
});

export { contactLimiter };
