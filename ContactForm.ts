import { Router } from 'express';
import Contact from './Contact';

const router = Router();

router.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: 'Contact saved successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to save contact', error });
  }
});

export default router;
