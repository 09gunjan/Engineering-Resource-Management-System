import React, { useEffect, useState } from 'react';
import axios from '@/lib/axios';

const Profile = () => {
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    axios.get('/auth/profile').then(res => setUser(res.data));
  }, []);

  const handleChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    await axios.put('/auth/profile', user);
    alert('Updated');
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Profile</h2>
      <input name="name" value={user.name || ''} onChange={handleChange} className="w-full border p-2 mb-2" />
      <input name="department" value={user.department || ''} onChange={handleChange} className="w-full border p-2 mb-2" />
      <input name="skills" value={(user.skills || []).join(',')} onChange={e => handleChange({ target: { name: 'skills', value: e.target.value.split(',') } })} className="w-full border p-2 mb-2" />
      <select name="seniority" value={user.seniority || ''} onChange={handleChange} className="w-full border p-2 mb-2">
        <option value="junior">Junior</option>
        <option value="mid">Mid</option>
        <option value="senior">Senior</option>
      </select>
      <button onClick={handleSave} className="bg-green-600 text-white px-4 py-2">Save</button>
    </div>
  );
};

export default Profile;