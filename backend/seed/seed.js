const { sequelize, User, Project, Assignment } = require('../models');
const bcrypt = require('bcryptjs');

async function seed() {
  try {
    await sequelize.sync({ force: true });

    const password = await bcrypt.hash('password123', 10);

    // Create Manager
    const manager = await User.create({
      name: 'Alice Manager',
      email: 'alice@example.com',
      password,
      role: 'manager',
    });

    // Create Engineers
    const [eng1, eng2, eng3, eng4] = await Promise.all([
      User.create({
        name: 'Bob Frontend',
        email: 'bob@example.com',
        password,
        role: 'engineer',
        skills: ['React', 'Node.js'],
        seniority: 'mid',
        maxCapacity: 100,
        department: 'Frontend',
      }),
      User.create({
        name: 'Charlie Backend',
        email: 'charlie@example.com',
        password,
        role: 'engineer',
        skills: ['Python', 'Node.js'],
        seniority: 'senior',
        maxCapacity: 100,
        department: 'Backend',
      }),
      User.create({
        name: 'Diana Fullstack',
        email: 'diana@example.com',
        password,
        role: 'engineer',
        skills: ['React', 'Python'],
        seniority: 'junior',
        maxCapacity: 50,
        department: 'Fullstack',
      }),
      User.create({
        name: 'Ethan DevOps',
        email: 'ethan@example.com',
        password,
        role: 'engineer',
        skills: ['AWS', 'Docker', 'Node.js'],
        seniority: 'mid',
        maxCapacity: 80,
        department: 'DevOps',
      }),
    ]);

    // Create Projects
    const [proj1, proj2, proj3, proj4] = await Promise.all([
      Project.create({
        name: 'Inventory App',
        description: 'Manage inventory across branches',
        startDate: new Date(),
        endDate: new Date('2025-08-01'),
        requiredSkills: ['React', 'Node.js'],
        teamSize: 3,
        status: 'active',
        managerId: manager.id,
      }),
      Project.create({
        name: 'Analytics Dashboard',
        description: 'Real-time analytics tool',
        startDate: new Date(),
        endDate: new Date('2025-10-15'),
        requiredSkills: ['Python', 'AWS'],
        teamSize: 2,
        status: 'planning',
        managerId: manager.id,
      }),
      Project.create({
        name: 'DevOps Setup',
        description: 'Setup CI/CD and infrastructure',
        startDate: new Date(),
        endDate: new Date('2025-09-30'),
        requiredSkills: ['Docker', 'Node.js'],
        teamSize: 2,
        status: 'active',
        managerId: manager.id,
      }),
      Project.create({
        name: 'Website Redesign',
        description: 'Modernize the company website',
        startDate: new Date(),
        endDate: new Date('2025-07-30'),
        requiredSkills: ['React'],
        teamSize: 1,
        status: 'completed',
        managerId: manager.id,
      }),
    ]);

    // Assignments (6–8 total)
    await Assignment.bulkCreate([
      {
        engineerId: eng1.id,
        projectId: proj1.id,
        allocationPercentage: 60,
        startDate: new Date(),
        endDate: new Date('2025-08-01'),
        role: 'Frontend Developer',
      },
      {
        engineerId: eng2.id,
        projectId: proj1.id,
        allocationPercentage: 40,
        startDate: new Date(),
        endDate: new Date('2025-08-01'),
        role: 'Backend Lead',
      },
      {
        engineerId: eng3.id,
        projectId: proj2.id,
        allocationPercentage: 50,
        startDate: new Date(),
        endDate: new Date('2025-10-15'),
        role: 'Data Engineer',
      },
      {
        engineerId: eng4.id,
        projectId: proj3.id,
        allocationPercentage: 60,
        startDate: new Date(),
        endDate: new Date('2025-09-30'),
        role: 'DevOps Engineer',
      },
      {
        engineerId: eng1.id,
        projectId: proj4.id,
        allocationPercentage: 40,
        startDate: new Date(),
        endDate: new Date('2025-07-30'),
        role: 'UI Specialist',
      },
      {
        engineerId: eng3.id,
        projectId: proj1.id,
        allocationPercentage: 30,
        startDate: new Date(),
        endDate: new Date('2025-08-01'),
        role: 'Support Dev',
      },
      {
        engineerId: eng4.id,
        projectId: proj4.id,
        allocationPercentage: 50,
        startDate: new Date(),
        endDate: new Date('2025-07-30'),
        role: 'Frontend Support',
      },
      {
        engineerId: eng2.id,
        projectId: proj2.id,
        allocationPercentage: 60,
        startDate: new Date(),
        endDate: new Date('2025-10-15'),
        role: 'AI Engineer',
      },
    ]);

    console.log('✅ Seeded successfully');
    process.exit();
  } catch (err) {
    console.error('❌ Seed error:', err);
    process.exit(1);
  }
}

seed();
