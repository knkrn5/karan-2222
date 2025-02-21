import rateLimit from 'express-rate-limit';

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5 // Limit each IP to 5 requests per windowMs
});


export { contactLimiter };