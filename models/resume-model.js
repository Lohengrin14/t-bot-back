import mongoose from 'mongoose';
import Schema from 'mongoose';

const ResumeSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  avatar: { type: String, required: true },
  user_name: { type: String, required: true },
  resume_name: { type: String, required: true },
  qualification: { type: String, required: true },
  skills: { type: String, required: true },
  salary: { type: String, required: true },
  town: { type: String, required: true },
  busyness: { type: String, required: true },
  office_remote: { type: String, required: true },
  experience: { type: String, required: true },
  description: { type: String, required: true },
  contacts: { type: String, required: true },
  date: { type: String, required: false }
});

export default mongoose.model('Resume', ResumeSchema);
