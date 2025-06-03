import React, { useEffect, useState } from 'react';
import axios from '@/lib/axios';

interface UserProfile {
  name: string;
  department: string;
  skills: string[];
  seniority: 'junior' | 'mid' | 'senior';
  employmentType: 'full-time' | 'part-time';
  allocatedPercentage?: number; // Read-only: comes from backend
}

const Profile = () => {
  const [user, setUser] = useState<UserProfile>({
    name: '',
    department: '',
    skills: [],
    seniority: 'junior',
    employmentType: 'full-time',
    allocatedPercentage: 0,
  });

  useEffect(() => {
    axios.get('/auth/profile').then((res) => {
      setUser(res.data);
    });
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

      {/* Name */}
      <input
        name="name"
        value={user.name}
        onChange={handleChange}
        className="w-full border p-2 mb-2 rounded"
        placeholder="Full Name"
      />

      {/* Department */}
      <input
        name="department"
        value={user.department}
        onChange={handleChange}
        className="w-full border p-2 mb-2 rounded"
        placeholder="Department"
      />

      {/* Skills */}
      <input
        name="skills"
        value={user.skills.join(', ')}
        onChange={handleSkillsChange}
        className="w-full border p-2 mb-2 rounded"
        placeholder="Skills (comma separated)"
      />

      {/* Seniority */}
      <select
        name="seniority"
        value={user.seniority}
        onChange={handleChange}
        className="w-full border p-2 mb-2 rounded"
      >
        <option value="junior">Junior</option>
        <option value="mid">Mid</option>
        <option value="senior">Senior</option>
      </select>

      {/* Employment Type */}
      <select
        name="employmentType"
        value={user.employmentType}
        onChange={handleChange}
        className="w-full border p-2 mb-4 rounded"
      >
        <option value="full-time">Full-time (100%)</option>
        <option value="part-time">Part-time (50%)</option>
      </select>

      {/* Current Status - Read-Only */}
      {user.allocatedPercentage !== undefined && (
        <div className="mb-4 text-sm text-gray-700">
          <strong>Current Status:</strong> {user.allocatedPercentage}% allocated,{' '}
          {user.employmentType === 'full-time'
            ? 100 - user.allocatedPercentage
            : 50 - user.allocatedPercentage}
          % available
        </div>
      )}

      {/* Save Button */}
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
