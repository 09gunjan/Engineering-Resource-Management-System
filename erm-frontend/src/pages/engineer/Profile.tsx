import React, { useEffect, useState } from 'react';
import axios from '@/lib/axios';

interface UserProfile {
  name: string;
  department: string;
  skills: string[];
  seniority: 'junior' | 'mid' | 'senior';
}

const Profile = () => {
  const [user, setUser] = useState<UserProfile>({
    name: '',
    department: '',
    skills: [],
    seniority: 'junior',
  });

  useEffect(() => {
    axios.get('/auth/profile').then(res => setUser(res.data));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, skills: e.target.value.split(',').map(skill => skill.trim()) });
  };

  const handleSave = async () => {
    try {
      await axios.put('/auth/profile', user);
      alert('Profile updated');
    } catch (err) {
      alert('Error updating profile');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Engineer Profile</h2>
      <input
        name="name"
        value={user.name}
        onChange={handleChange}
        className="w-full border p-2 mb-2 rounded"
        placeholder="Full Name"
      />
      <input
        name="department"
        value={user.department}
        onChange={handleChange}
        className="w-full border p-2 mb-2 rounded"
        placeholder="Department"
      />
      <input
        name="skills"
        value={user.skills.join(', ')}
        onChange={handleSkillsChange}
        className="w-full border p-2 mb-2 rounded"
        placeholder="Skills (comma separated)"
      />
      <select
        name="seniority"
        value={user.seniority}
        onChange={handleChange}
        className="w-full border p-2 mb-4 rounded"
      >
        <option value="junior">Junior</option>
        <option value="mid">Mid</option>
        <option value="senior">Senior</option>
      </select>
      <button
        onClick={handleSave}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Save
      </button>
    </div>
  );
};

export default Profile;
