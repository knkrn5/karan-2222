import rateLimit from 'express-rate-limit';

const contactPostLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 60 minutes
  max: 3, // Limit each IP to 3 requests
  message: { success: false, status: "Too many requests sent..." },
});

const contactPutLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 60 minutes
  max: 2, // Limit each IP to 2 requests
  message: { success: false, status: "Too many requests sent..." },
});

export { contactPostLimiter, contactPutLimiter };
