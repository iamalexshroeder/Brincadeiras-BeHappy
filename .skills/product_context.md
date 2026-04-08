# Skill: BeHappy Brincadeiras - Product Context

This document serves as the ground truth for understanding the BeHappy Brincadeiras repository.

## 🎯 Product Mission
Transform the fragmented knowledge of recreation professionals into a structured, collaborative, and gamified digital repository.

## 🛠️ Core Constraints
- **Mobile First**: All UI components must prioritize the 390px viewport.
- **Engagement**: Use gamification (XP, levels, streaks) to drive content quality.
- **Simplicity**: 4-step wizard for contributing; simple search/filter for finding.

## 🎨 Design System (60/30/10)
- **Base (60%)**: `#FFFFFF` / `#F9F9F7` (Backgrounds, large surfaces).
- **Primary (30%)**: `#FF6B00` (Orange - Buttons, highlights, active states).
- **Accent (10%)**: `#FFD426` (Yellow - Badges, sub-highlights).
- **Radius**: Consistent `4px` for buttons, `16px` for cards.

## 💻 Tech Patterns
- **Next.js App Router**: Use server components for data fetching where possible.
- **Prisma**: Schema must reflect the User, Brincadeira, and XP transaction relationship.
- **Auth**: Strict Google OAuth only.

## 👤 User Personas
1. **The Pro**: Needs to find specific games for specific contexts (Time/Age/Participants) FAST.
2. **The Newbie**: Looking for inspiration and learning from top-ranked professionals.
3. **The Visitor**: View-only access to the treasure trove of games.
